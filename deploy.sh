#!/usr/bin/env sh

# abort on errors
set -e

DOMAIN=joshpeak.net
USERNAME=neozenith
NOW=`node -p 'new Date().toISOString()'`
DIST_DIR=dist

# Build
if [[ $OSTYPE == msys* ]]; then
  env PYTHON=/c/Python27/ winpty yarn.cmd run build
else
  yarn run build
fi

# Create distribution folder
[ ! -d "$DIST_DIR/.git" ] && rm -rfv dist && git clone -b master "https://github.com/$USERNAME/$USERNAME.github.io.git" $DIST_DIR

# Copy artifacts
cp ./README.md $DIST_DIR
cp ./LICENSE $DIST_DIR
cp ./CNAME $DIST_DIR
cp -R ./build/* $DIST_DIR

# Create deploy commit and push
cd $DIST_DIR
git add -A
git commit -m "Deploy $NOW"
git push

# Pop back to last directory
cd -
