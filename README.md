# typescript-basics-course

## Install Node.js

nodejs.org
install node+npm

## setup a typscript project

npm init --yes
npm i typescript --dev
tsc --init ====> tsconfig.json

## tsconfig.json

Sets all typescript sonfigs

rootDir:"/src"
outDir:'/dist'
"target": "es2016",

## Compile and RUN

1- compile : tsc
2- RUN : node dist/index.js

## Nodemon

npm install -g ts-node
npm i nodemon --dev

## git

git clone https://github.com/saeedalam/typescript-basics-course.git
npm install

## git basic commands

git status
git add .
git commit -m "message"
git push origin master

git pull origin ....

### Branchs

Create New branch :
git branch -C add_login_function
git branch

git checkout add_login_branch
