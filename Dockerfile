FROM ruby:2.5-stretch

WORKDIR /app
VOLUME /app
COPY Gemfile Gemfile.lock ./

ENV BUNDLE_GEMFILE=/app/Gemfile \
  BUNDLE_JOBS=5 \
  BUNDLE_PATH=/bundle

RUN apt-get update
RUN gem install bundler
RUN bundle install
