#!/bin/bash
git remote -v | grep profesor
if [ $? -eq 1 ]
then
    git remote add profesor ssh://git@gitlab.iessanclemente.net:60600/dwcc-dist-2223/edu-javascript-escoba.git
fi

git fetch profesor
git checkout profesor/release/test/$1 -- src/test
git restore --staged src/test