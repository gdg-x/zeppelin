#!/bin/sh
set -e

if ! (bundle check); then
  bundle install
fi

exec "$@"
