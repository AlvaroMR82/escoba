#!/bin/bash
git remote -v | grep profesor
if [ $? -eq 1 ]
then
    git remote add profesor ssh://git@gitlab.iessanclemente.net:60600/dwcc-dist-2223/edu-javascript-escoba.git
fi

git fetch --tags profesor

echo "Obteniendo $npm_package_config_test_version versión de los test..."
git checkout release/test/$npm_package_config_test_version -- src/test
git restore --staged src/test