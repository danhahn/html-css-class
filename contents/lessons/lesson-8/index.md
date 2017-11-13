---
title: Lesson 8
lesson: What is a CSS preprocessor?
author: Dan Hahn
date: 11/13/2017 18:00
template: article.jade

downloads:
  Download Stater File:
    file: week8.zip
    btn: primary
  Download Notes:
    file: week8-notes.zip
    btn: null

nav:
  What is a CSS preprocessor: index.html
  Task Runner: taskrunner.html
  SASS: sass.html
  Using SASS: using-sass.html
  Reset: reset.html
---

This week we are going to talk about CSS preprocessor (SASS), Task Runners (Gulp), Node Package Manager (NPM) and CSS Resets.  

<span class="more"></span>

## Why Pre-Processing CSS?
CSS is primitive and incomplete. Building a function, reusing a definition or inheritance are hard to achieve. For bigger projects, or complex systems, maintenance is a very big problem. On the other hand, web is evolving, new specs are being introduced to HTML as well as CSS. Browsers apply these specs while they are in proposal state with their special vendor prefixes. In some cases (as in background gradient), coding with vendor specific properties become a burden. You have to add all different vendor versions for a single result.

In order to write better CSS, there were different approaches such as separating definitions into smaller files and importing them in to one main file. This approach helped to deal with components but, did not solved code repetitions and maintainability problems. Another approach was early implementations of object oriented CSS. In this case, applying two or more class definition to an element. Each class adds one type of style to the element. Having multiple classes increased re-usability but decreased the maintainability.

Pre-processors, with their advanced features, helped to achieve writing reusable, maintainable and extensible codes in CSS. By using a pre-processor, you can easily increase your productivity, and decrease the amount of code you are writing in a project.

There are three popular types of pre-processing SASS, LESS and Stylus.  At their core they have the same idea.  You talk a file that is not CSS and convert it to CSS when the file is saved.  This will allow us to do non traditional things to our CSS like variables, nesting or Mixins plus much more.  

Lets use SASS as an example since SASS is the most popular. 

Here we have a variable of `$font-size` and the value is `16px`.

```css
$font-size: 16px;

div {
  font-size: $font-size;
}
``` 

After going through the pre-processor it will out put a new file that is a standard CSS file. 

```css
div {
  font-size: 16px;
}
```

One of the things I like the best is you can nest your selector to make maintenance easy.

```css
$link-color: #999;
$link-hover: #229ed3;

ul {
  margin: 0;

  li {
    float: left;
  }

  a {
    color: $link-color;

    &:hover {
      color: $link-hover;
    }
  }
}
```
Will output this

```css
ul {
  margin: 0;
}
ul li {
  float: left;
}
ul a {
  color: #999;
}
ul a:hover {
  color: #229ed3;
}
```

Notice how everything is nested under the `ul`.  If we needed to change that part of the selector we would have just update one part of the CSS and it would update the final css rather than needing to update each place where it is defined.  