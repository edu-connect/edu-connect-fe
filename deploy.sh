#!/bin/bash

if [ "$TRAVIS_BRANCH" = "master" ]; then
  echo $TRAVIS_BRANCH
elif [ "$TRAVIS_BRANCH" = "develop" ]; then
  echo $TRAVIS_BRANCH
elif [ "$TRAVIS_BRANCH" = "feature/*" ]; then
  echo $TRAVIS_BRANCH
fi