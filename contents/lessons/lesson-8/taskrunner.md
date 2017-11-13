---
title: Lesson 8
lesson: Task Runners
author: Dan Hahn
date: 11/13/2017 18:00
template: article.jade

nav:
  What is a CSS preprocessor: index.html
  Task Runner: taskrunner.html
  SASS: sass.html
  Using SASS: using-sass.html
  Reset: reset.html

---

## What is a task runner?

A task runner is a tool that will run a task over and over again.  There are many types of task runners but today we are going to talk about [Gulp](https://gulpjs.com/).  Gulp is a javascript based task runner that can be run from the command line.  After it is set up you can 'set it and forget it' and just let it run in the background. 

## Set up

While set up is not hard there are a few things that we need to make sure we have installed. 

1. [Node](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com/) - Node package Manager
3. [Gulp CLI](https://www.npmjs.com/package/gulp-cli) - command line interface
4. [Gulp](https://www.npmjs.com/package/gulp) - Gulp
5. Add a `gulpfile.js` to your project

### Node

Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.  In other words it is javascript that is not run on the browser but on a computer (local or remote).

#### How to check if you have node installed

We need to check to see if you have node installed.  We will do this from the command line.  

```powershell
$ which node
/usr/bin/node
```
When you run this command if it writes something right after like the example above than you have node installed and are good to go.  Otherwise you will need to install it.  Follow the instructions here [Node](https://nodejs.org/en/).  You will need to have admin access on your computer. 

If you have node installed than you will also have NPM (node package manager).  NPM is a way to install "packages" which is code that is bundled together for easy distribution.

If we have NPM installed we can move on to the next step installing gulp and gulp-cli 

### Installing gulp

Installing gulp is done in two parts.  First we need to to install the command line tools.

```powershell
$ npm install gulp-cli -g
```

Lets break down what this is doing.  

1. `npm` we are running npm 
2. `install` we are using the install part of npm
3. `gulp-cli` the package we want to install
4. `-g` the global flag allowing us to run it from any where.

**note:** you many need to add `sudo` (super user do) when installing some command line tasks.

```powershell
$ sudo install gulp-cli -g
```

This will prompt you to enter a password just use the password you used to login to.  Note that while you are typing the screen will not change.  Once you enter the password just press enter. 

It will output many many lines of information.  When it is done you will get the prompt back.  

At this point we can run any gulp commands but still need to install gulp for the project. 

Next make sure you are in the directory you want run gulp from.  

### Install Gulp local

Before we can install any local files to our project we need to add a `package.json` file.  This is where all all our npm information is stored.  We can create it form the command line by running this command

```powershell
$ npm init -y
```

it will output something like this

```powershell
Wrote to /Users/dev/gulp-test/package.json:

{
  "name": "gulp-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

and create a new file `package.json`

Now that we are in the directory where we want to run the scripts from we need to install gulp.

```powershell
$ npm install gulp --save
```

Once everything is installed you will have a few new files/directories.  A directory `node_modules` will be added this is where any file form `npm` is added.  We do not want commit this file with git.  The `package.json` will be updated with the information about this package.  Make sure you add the `--save` other wise the file will not be updated but the package will be added.  

```powershell
[gulp-test]$ npm install gulp --save
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
gulp-test@1.0.0 /Users/dhahn/dev/gulp-test
└─┬ gulp@3.9.1 
  ├── archy@1.0.0 
  ├─┬ chalk@1.1.3 
...
    │ └─┬ readable-stream@1.0.34 
    │   ├── isarray@0.0.1 
    │   └── string_decoder@0.10.31 
    └─┬ vinyl@0.4.6 
      └── clone@0.2.0 

npm WARN gulp-test@1.0.0 No description
npm WARN gulp-test@1.0.0 No repository field.
``` 

package.json is update to this.

```javascript
{
  "name": "gulp-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "gulp": "^3.9.1"
  }
}
```

### Adding a gulpfile.js

`gulpfile.js` is the file that contains all the gulp tasks.  

We can add a file from the command line but running this command

```powershell
$ touch gulpfile.js
```

This will create a blank file named `gulpfile.js` in the directory that you run it from. 

Next we need to add javascript to gulpfile.js that run

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

Right now this is place holder code but will run.

Now from the command line we can run 

```powershell
$ gulp
```

if it works and there are no errors you should get this 

```powershell
Using gulpfile ~/my-project/gulpfile.js
[11:15:51] Starting 'default'...
[11:15:51] Finished 'default' after 103 μs
```