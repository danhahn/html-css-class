---
title: Lesson 4
lesson: Homework 4
author: Dan Hahn
date: 10/16/2017 18:00
template: article.jade
nav:
  Layout Types: index.html
  Table Layout: table.html
  Position: position.html
  Float Layout: float.html
  Homework: homework.html
homework:
  lesson: lesson4
downloads:
  Starter File Lesson 4:
    file: homework4.zip
    btn: primary
---

This week we will be building a fixed width "Holy Grail" layout.  We will be using `float` to layout our our three column layout.  

The HTML is already written so you will not need to make any changes to it.  Also much of the CSS is set up you will need to fill in the blanks as outlined in the CSS comments.  

## Todos

1. Add global box-sizing
2. set `.container` to 1000 
3. center `.container`
4. add margin to the bottom of `.global-header`
5. Fix spacing of `p` in in `.content-area`
6. add margin to the top of `.global-footer`
7. add padding and align the right
8. Add "clearfix" to `.row`
9. add float left to `.global-nav, .content-area, .side-bar`
10. set width on `.global-nav` to 200
11. `.content-area`
  * set width 600
  * add margin on left and right of 1em
  * calculate the correct size
12. set `.side-bar` to 200
13. fix width of img to only be as wide as the side bar 

## Starter CSS

<pre class="text-content">
* {
  /* box sizing */
}

body {
  font: 16px arial;
  background-color: lightgray;
  margin: 0;
}

h1, h2, h3, p, ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.container {
  /* set width to 1000 */
  /* center block in the window  */
}

.global-header {
  background-color: #5187B2;
  padding: 1em;
  color: white;
  /* add margin of 1 em at the bottom */
}

.global-nav {
  background-color: #FFDDA7;
}

.global-nav a {
  display: block;
  padding: .5em 1em;
  text-decoration: none;
  color: black;
}

.content-area {
  padding: 1em;
  background-color: #fff;
}

.content-area p {
  /* let margin top and bottom to 1em */
  /* set line height to 1.5 em */
}

.side-bar {
  background-color: #A7D7FF;
  padding: 1em;
}

.global-footer {
  /* add margin top of 1em */
  background-color: #B2B0AD;
  /* add padding of 1em */
  /* align the test to the right */
}

.row::after {
  /* add clear fix */
}

.global-nav, .content-area, .side-bar {
  /* float: left */
}

.global-nav {
  /* set width to 200 */
}

.content-area {
  /* set width to 600 */
  /* add margin on left and right of 1em */
  /* note you will need to calculate the size using `calc()` */
}

.side-bar {
  /* set width to 200 */
}

.side-bar img {
  /* fix width of img to only be as wide as the side bar */
}
</pre>