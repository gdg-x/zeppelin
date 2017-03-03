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
    'photo': 'https://www.womentechmakers.at/img/speakers/' + speakers[i].thumbnailUrl
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
var x = 1;
var sessionsOut = [];
// create output sessions
for (i=0; i<schedule.length; i++) {
  for (j=0; j<schedule[i].timeslots.length; j++) {
    for (k=0; k<schedule[i].timeslots[j].sessionIds.length; k++) {
      var sessionId = schedule[i].timeslots[j].sessionIds[k];
      if (sessionId in sessionsById) {
        var aSession = {
          'description': deHtml(sessionsById[sessionId].description),
          'id': x,
          'title': deHtml(sessionsById[sessionId].title)
        };
        x++;
        // get session image (if exists)
        if ('imageUrl' in sessionsById[sessionId]) {
          aSession.photo = 'https://www.womentechmakers.at/img/' + sessionsById[sessionId].imageUrl;
        }
        // get the duration
        var date1 = schedule[i].date + ' ' + schedule[i].timeslots[j].startTime;
        var date2 = schedule[i].date + ' ' + schedule[i].timeslots[j].endTime;
        var duration = ((new Date(date2).getTime()) - (new Date(date1).getTime())) / (1000 * 60);
        aSession.startAt = date1;
        aSession.duration = duration;
        var sessionSpeakers = [];
        if ('speakers' in sessionsById[sessionId]) {
          for (var t=0; t<sessionsById[sessionId].speakers.length; t++) {
            var speakerStrId = sessionsById[sessionId].speakers[t];
            if (speakerStrId in speakerNum) {
              sessionSpeakers.push(speakerNum[speakerStrId]);
            }
          }
        }
        if (sessionSpeakers.length) {
          aSession.speakersId = sessionSpeakers;
        }
        // get the room id
        if (schedule[i].timeslots[j].sessionIds.length == 1) {
          if (sessionsById[sessionId].service) {
            // we have a service session
            aSession.roomId = 0;
          }
          else {
            // we have a content session
            aSession.roomId = 1;
          }
        }
        else if (schedule[i].timeslots[j].sessionIds.length == 2) {
          // first session in room 1, second in room 2
          if (k == 0) {
            aSession.roomId = 1;
          }
          else {
            aSession.roomId = 2;
          }
        }
        else {
          aSession.roomId = k + 1;
        }
        // add session
        sessionsOut.push(aSession);
      }
    }
  }
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
