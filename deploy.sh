#!/usr/bin/env sh

# abort on errors
set -e

DOMAIN=joshpeak.net
USERNAME=neozenith
NOW=`node -p 'new Date().toISOString()'`

npm run build

# build
[ ! -d dist/.git ] && rm -rfv dist && git clone -b master "https://github.com/$USERNAME/$USERNAME.github.io.git" dist
cd dist

cp ../README.md .
cp ../LICENSE .
cp ../CNAME .
cp -R ../build/ .

git add -A
git commit -m "Deploy $NOW"

git push

# Pop back to last directory
cd -
