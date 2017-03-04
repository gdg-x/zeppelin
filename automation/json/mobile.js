/*
 * mobile
 * Convert data to the API version as expected by mobile app
 */
'use strict';

var fs = require('fs');
var ent = require('ent');
var YAML = require('yamljs');
var deHtml = function(s) {
  if (s) {
    s = s.replace(/<br>/g, '\n');
    s = s.replace(/<a[- a-zA-Z\"\'=\/:._]*>/g, '');
    s = s.replace(/<\/[a-zA-Z]*>/g, '');
    s = ent.decode(s);
  }
  return s;
};

var src = '_data';
var trg = '_site/api';
// load files from src: speakers.yml, sessions.yml, schedule-data.yml
var speakers = YAML.load(src + '/speakers.yml');
var sessions = YAML.load(src + '/sessions.yml');
var schedule = YAML.load(src + '/schedule.yml');
// give each speaker a unique number
// create output arrays
var i, j, k;
var speakerNum = {};
var speakersOut = [];
var aSpeaker;
for (i=0; i<speakers.length; i++) {
  if (!speakers[i].active) continue;
  speakerNum[speakers[i].id] = i+1;
  aSpeaker = {
    'bio': deHtml(speakers[i].bio),
    'id': i+1,
    'name': speakers[i].name + ' ' + speakers[i].surname,
    'photo': 'https://www.womentechmakers.at/img/people/' + speakers[i].thumbnailUrl
  }
  if (speakers[i].title && speakers[i].company) {
    aSpeaker.title = speakers[i].title + ', ' + speakers[i].company;
  }
  else if (speakers[i].title) {
    aSpeaker.title = speakers[i].title;
  }
  else {
    aSpeaker.title = speakers[i].company;
  }
  if (speakers[i].social) {
    for (j=0; j<speakers[i].social.length; j++) {
      var aLink = speakers[i].social[j];
      if (aLink.name == "twitter") {
        aSpeaker.twitter = aLink.link.replace(/https?:\/\/w?w?w?.?twitter.com\//, '');
      }
      else if (aLink.name == "google-plus") {
        aSpeaker.gplus = aLink.link;
      }
      else if (aLink.name == "linkedin") {
        aSpeaker.linkedin = aLink.link;
      }
      else if (aLink.name == "github") {
        aSpeaker.github = aLink.link.replace(/https?:\/\/w?w?w?.?github.com\//, '');
      }
      else if (aLink.link.indexOf("xing.com") !== -1) {
        aSpeaker.xing = aLink.link;
      }
      else {
        aSpeaker.website = aLink.link;
      }
    }
  }
  // speakersOut[i] = aSpeaker;
  speakersOut.push(aSpeaker);
}
// create assoc of sessions by id
var sessionsById = {};
for (i=0; i<sessions.length; i++) {
  sessionsById[sessions[i].id] = sessions[i];
}
// get the start- and end-times for sessions
for (i=0; i<schedule.length; i++) {
  for (j=0; j<schedule[i].timeslots.length; j++) {
    for (k=0; k<schedule[i].timeslots[j].sessionIds.length; k++) {
      var sessionId = schedule[i].timeslots[j].sessionIds[k];
      if (sessionId in sessionsById) {
        var session = sessionsById[sessionId];
        var slot = schedule[i].timeslots[j];
        var timeFrom = schedule[i].date + ' ' + slot.startTime;
        var timeTo = schedule[i].date + ' ' + slot.endTime;
        if (!session.timeFrom || session.timeFrom > timeFrom) {
          session.timeFrom = timeFrom;
        }
        if (!session.timeTo || session.timeTo < timeTo) {
          session.timeTo = timeTo;
        }
        // get the room id
        if (slot.sessionIds.length == 1) {
          if (sessionsById[sessionId].service) {
            // we have a service session
            session.roomId = 0;
          }
          else {
            // we have a content session
            session.roomId = 1;
          }
        }
        else if (slot.sessionIds.length == 2) {
          // first session in room 1, second in room 2
          if (k == 0) {
            session.roomId = 1;
          }
          else {
            session.roomId = 2;
          }
        }
        else {
          session.roomId = k + 1;
        }
      }
    }
  }
}

var x = 1;
var sessionsOut = [];
// create output sessions
for (i=0; i<sessions.length; i++) {
  var session = sessions[i];
  var milsecTo = new Date(session.timeTo).getTime();
  var milsecFrom = new Date(session.timeFrom).getTime();
  var duration = (milsecTo - milsecFrom) / (1000 * 60);
  var aSession = {
    'description': deHtml(session.description),
    'id': i,
    'title': deHtml(session.title),
    'roomId': session.roomId,
    'startAt': session.timeFrom,
    'duration': duration
  };
  // get session image (if exists)
  if ('imageUrl' in session) {
    aSession.photo = 'https://www.womentechmakers.at/img/' + session.imageUrl;
  }
  var sessionSpeakers = [];
  if ('speakers' in session) {
    for (var t=0; t<session.speakers.length; t++) {
      var speakerStrId = session.speakers[t];
      if (speakerStrId in speakerNum) {
        sessionSpeakers.push(speakerNum[speakerStrId]);
      }
    }
  }
  if (sessionSpeakers.length) {
    aSession.speakersId = sessionSpeakers;
  }
  // add session
  sessionsOut.push(aSession);
}
// serialize sessions & speakers to file
try {
  fs.accessSync(trg);
}
catch(e) {
  fs.mkdirSync(trg);
}
try {
  fs.accessSync(trg + '/v1');
}
catch(e) {
  fs.mkdirSync(trg + '/v1');
}
fs.writeFileSync(trg + '/v1/speakers', JSON.stringify(speakersOut));
fs.writeFileSync(trg + '/v1/sessions', JSON.stringify(sessionsOut));
