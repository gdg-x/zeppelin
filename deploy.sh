#!/bin/bash
set -e # Exit with nonzero exit code if anything fails
COMMIT_SHA=$(git rev-parse --short HEAD)
COMMIT_MESSAGE=$(git log -1 --pretty=%B)

TMP_DIR=.tmp
rm -rf $TMP_DIR
mkdir -p $TMP_DIR
cd $TMP_DIR

git clone git@github.com:droidconvn/droidconvn.github.io.git
cd droidconvn.github.io
git checkout master || git checkout --orphan master
cd ../..

yes | cp -rf _site/* $TMP_DIR/droidconvn.github.io/
cd $TMP_DIR/droidconvn.github.io
git status
git add -f *

git commit -m "$COMMIT_SHA - $COMMIT_MESSAGE"
git push