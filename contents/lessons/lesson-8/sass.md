---
title: Lesson 8
lesson: Setting up SASS
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

## Install SASS

There are a few different ways to install sass.  

We are going to use `gulp-sass` which is designed to work with gulp.

All the info about it is here [gulp-sass](https://www.npmjs.com/package/gulp-sass).

We need to add gulp-sass to our project.  Make sure you are in the root directory of your project (the same folder as package.json).

```bash 
npm install gulp-sass --save-dev
```

This will add all the things we need to add sass to our project. 

Next we need to add the tasks to our `gulpfile.js`.

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
```

Here we added `var sass = require('gulp-sass');` that makes gulp-sass avalable to use.

Next we added a new task `gulp.task('sass', function () {` that has a callback function that will execute.  It will look for any `.scss` files and run the though "SASS" to make css and save them in css folder.

## Running tasks

We have two tasks we can run. 

1. `sass` this will run the task one time
2. `sass:watch` this will run the task until we stop it.

```bash
$ gulp sass
```

This will run it just one time and the output will look like this

```bash
[gulp-test]$ gulp sass
[13:02:16] Using gulpfile ~/dev/gulp-test/gulpfile.js
[13:02:16] Starting 'sass'...
[13:02:16] Finished 'sass' after 54 ms
[gulp-test]$ 
```

```bash
├── css
│   └── test.css
├── gulpfile.js
├── node_modules
├── package.json
└── sass
    └── test.scss
```

Notice how a new directory `css` was created and a new file `test.css` was added to it.

To have the task keep running in the background we need to run this command 

```bash
[gulp-test]$ gulp sass:watch
[13:10:30] Using gulpfile ~/dev/gulp-test/gulpfile.js
[13:10:30] Starting 'sass:watch'...
[13:10:30] Finished 'sass:watch' after 14 ms
```

Notice how the command prompt `$` is not returned this mean the script is running in the background and every time a file is changed it will rerun the `sass` task.

To end the task you will need to press `control + c`. 

## Adding to HTML

Even though we are using SASS at the end of the day we are creating a css file.  It is this css file that we will use in our HTML file. 

Lets add an html file to our directory 

```bash
├── css
├── gulpfile.js
├── index.html
├── node_modules
├── package.json
└── sass
```

Now we would add the css file like any other file.  

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/test.css">
</head>
```

In this case we added a `test.css` file to our html with this line `<link rel="stylesheet" href="css/test.css">`
