---
title: Lesson 3
lesson: Homework 3
author: Dan Hahn
date: 10/02/2017 18:00
template: article.jade
nav:
  Box Model: index.html
  Overflow: overflow.html
  Floats: floats.html
  Clear Fix: clear-fix.html
  Homework: homework.html
homework:
  lesson: lesson3
downloads:
  Starter File Lesson 3:
    file: homework3.zip
    btn: primary
---

Please send a zip file to me before the start of next class.

## What we will be working on this week
* Floating with text wrap
* `clear` an element
* "stacking" floats
* Add "clear fix"
* review margin/padding

## Getting Started

Download the starter files

There are two files you will need to edit `index.html` and `css/style.css`.  In each file there are comments that outline what needs to be done.

## Adding styles

1. Add global (*) box size 
2. "reset" elements `h1, h2, h3, ul, p`
3. center `.container`
4. add clear fix to `.global-nav`
5. float `.global-nav li`
6. move content from the edge top/bottom 2em left/right 1em
7. add spacing for paragraph
8. clear the h2
9. add class for photo on the right
10. move the "photo" to the right and have text wrap around it.
11. add clear fix for `.promos`
12. "stack the `.promo`
13. on the last `.promo` remove the margin on the right

<pre class="text-content">
/* add global (*) box size */

body {
  font: 16px arial;
  background-color: #c0c0c0;
  margin: 0;
  color: #222222
}

h1, h2, h3, ul, p {
  /* add reset */
}

.container {
  width: 1000px;
  /* center container */
  background-color: #fff;  
}

.global-header {
  background-color: #222222;
  color: #F3F3F3;
  padding: 1em;
}

.global-nav {
  background-color: #E67E39;
}

/* add clear fix for `.global-nav` */

.global-nav li {
  /* float to the left */
}

.global-nav a {
  display: block;
  color: #F3F3F3;
  text-decoration: none;
  padding: 1em;
}

.global-nav a:hover {
  background-color: #F3F3F3;
  color: #E67E39;
}

.content-area {
  /* move content from the edge top/bottom 2em left/right 1em */
}

.content-area h2 {
  text-transform: uppercase;
  color: #E67E39;
}

.content-area > p {
  /* add spacing for paragraph */
}

/* clear the h2 */

.photo {
  border: 3px solid #E67E39;
  padding: 1em;
  margin-bottom: 1em;
}

.photo > img {
  display: block;
}

.photo > p {
  margin-top: .5em;
  text-align: center;
}

/* add class for photo on the right {
  margin-left: 2em;
  [push to the right]
} */

.promos {
  background-color: #E67E39;
  padding: 1em;
}

/* add clear fix for `.promos` */

.promos h3 {
  margin-bottom: .5em;
  text-transform: uppercase;
}

.promo {
  /* add missing code */
  width: 32.533%;
  margin-right: 1%;
  text-align: center;
}

.promo:last-of-type {
  /* remove the margin on the right */
}

.promo > img {
  max-width: 100%;
}

.promo p {
  margin: 1em;
  font-size: .7em;
  color: white;
  line-height: 1.3em;
}

.global-footer {
  background-color: #222222;
  color: white;
  padding: 1em;
}

.global-footer a {
  color: white;
}
</pre>
