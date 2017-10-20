---
title: Lesson 4
lesson: Working with CSS Preprocessor
author: Dan Hahn
date: 10/16/2017 18:00
template: article.jade
nav:
  Basic Layouts: index.html
  Setting up preprocessor: less.html
  Using Less: using-less.html
  Flex Box: flex.html
  Position: position.html
  Homework: homework.html
---

A preprocessor is a program that will take one file and turn it into another.  This allows your add logic to something that did not have it.  

CSS is very powerful it has changed the way that we display things on the web today but it is not with out its limits.   Where css allows you to select many element using a selector it does not have variables in in.  So you might want to set a color pallet for your site.  If you have 5 colors you want to use they need to be defined every time you use them.  If you want to change them to an other color you need to find every time that color is used and change them.  A preprocessor takes the CSS code you know and enhances it allowing you to do things like setting up variables or change a lighten or darken a color.  You can also nest your selectors to allow for better organization of the files.

## LESS and SASS

The two popular preprocessors are LESS and SASS.  LESS is based on node, the server side javascript language.  SASS is based on ruby.  

For the most part they a very much a like.  Other than the syntax and a few more advanced things they are the same.  

### Installing LESS

To install LESS you need to have node installed on your computer.  Node can run on both window and OSX.  It in install that you download.  

It can be found here [Node Js](https://nodejs.org/en/).  When you install `node` you will also install `npm`.  `npm` or node package manager is a command line tool that allow you to install scrips form the web.  

On the Mac you will need to open the terminal form the applications folder.  When you open it will give you a prompt.  This is where you will need to type all the commands.  

[Here are some very useful commands](https://ashleynolan.co.uk/blog/getting-started-with-terminal)

To install less you will need to type the following command in the terminal.

```bash
$ sudo npm install -g less
```

Lets break down this command.

* `sudo` - will prompt you to enter the password you used to login to the computer.  This is needed to run as an admin.
* `$` - tells you that you need to run this on the command line.  You do not need to type this.
* `npm` - the tool that you are running.  (Make sure you have installed node)
* `install` - the command you are running
* `-g` - you are install this globally.
* `less` - the package you are installing.

### Using LESS

Now that we have less installed we need to change way we work a little bit.

Rather than creating a `css` file we are now going to create a `less` file that we will turn in to a css file.

To create a `less` you need to create a new file and save it as `.less`  for example `global.less`.

After we create the `less` code we need to turn it in to the css file.  Form the command line you need to navigate to the folder where the the `less` file is saved.  

```bash
$ cd Documents/HTML_and_CSS/week4/
```

Now we need to turn the `less` file in to a `css` file.

```bash
$ lessc global.less global.css
```
This will take the less file and turn it in to a css file.   You will then take that `css` file and use it in your HTML file.

The issue with this is every you need save the less file you need to run that command.  

## Other options

There are a number of options that we can use to get around this.  

1. Install a plugin.  (atom-less)
2. Run a gulp script.

### Installing a plugin

Open `file>preferences` then select `install` and search for `atom-less` and install.  This will compile the `less` file everytime you save it.  It will save a css file in the same folder as the less file.

### Set up a gulp file.

Install a package.json file.  

```bash
$ npm init
```

Then follow the steps.  This will create a `package.json` file.  This file contians the information about the packages needed to run the gulp file.

Next we need to add the packages to the `.json` file.

```bash
$ npm install --save-dev gulp gulp-less gulp-watch
```

We need to install `gulp` globally

```bash
$ sudo npm install -g gulp
```

It seems a little weird that you install `gulp` twice.  But one time you are installing the command and one time you are install the tools.

Next we need to create a `gulpfile.js` file.  

in this file you will need to add this to that `gulpfile.js`

```js
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['less']);
});
```

This allows us to have our less and css in different foldes.

We need to create a new folder called `less`.

Now we just need to run the gulp file

```bash
$ gulp watch
```

This will run in the background and every time the `less` file is saved it will create a new `css` file.;
