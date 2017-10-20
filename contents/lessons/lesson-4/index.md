---
title: Lesson 4
lesson: Basic Layout
author: Dan Hahn
date: 10/16/2017 18:00
template: article.jade

downloads:
  Download Stater File:
    file: week4.zip
    btn: primary
  Download Notes:
    file: week4-notes.zip
    btn: null

nav:
  Layout Types: index.html
  Table Layout: table.html
  Position: position.html
  Float Layout: float.html
  Flexbox Layout: flex.html
  Homework: homework.html
---

This week we will explore ways to build page layouts include tables, position, floats, and flexbox.  

<span class="more"></span>

As we move to building more complex pages layouts we need to talk about different ways we can do this with HTML and CSS. 

## Holy grail Layout

The <a href="https://en.wikipedia.org/wiki/Holy_Grail_(web_design)" target="_blank">holy grail layout</a> is a page design that has a header, three columns with equal height, and a footer.  This historicly has been something that has been very hard to acceve with HTML and CSS thus its like looking for the "Holy Grail"

![](https://upload.wikimedia.org/wikipedia/commons/a/ad/HolyGrail.svg)

We are going explore a  few different ways solve this problem.  Some will be outdated and no longer used and some with have limitations that we will have to work through.

1. [Table Layout](table.html)
2. [Position](position.html)
3. [Float Layout](float.html)
4. [Flexbox Layout](flexbox)

There is also a new CSS grid layout that we will talk about in a lesson all on its own later in the semester.  

## Setting up the HTML 

With with all but the `<table>` layout we can use the same html structure to achieve our goal.

```html
<main>
  <header></header>
  <section>
    <nav></nav>
    <article></article>
    <aside></aside>
  </section>
  <footer></footer>
</main>
```

We use the `<main>` to create a wrapper around the content.  The `<header>` and `<footer>` are their won rows.  Last we add a `<section>` to create a "row" that has our `<nav>`, `<article>` and `<aside>`. 

**Note**: This is a very basic example you can swap any HTML element for another and all elements should have `class` names to better define them.  

