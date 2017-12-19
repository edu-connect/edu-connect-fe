#!/bin/bash

if [ "$TRAVIS_BRANCH" = "master" ]; then
  echo $TRAVIS_BRANCH
elif [ "$TRAVIS_BRANCH" = "develop" ]; then
  curl -X GET http://ec2-13-125-21-21.ap-northeast-2.compute.amazonaws.com:9999/deploy/test
elif [ "$TRAVIS_BRANCH" = "feature/*" ]; then
  echo $TRAVIS_BRANCH
fi
