#!/usr/bin/evn sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Nova implantação'
git push -f git@github.com:gustavomaz/todo-list-app.git master:gh-pages

cd -