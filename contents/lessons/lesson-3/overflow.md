---
title: Lesson 3
author: Dan Hahn
lesson: Overflow
date: 10/02/2017 18:00
template: article.jade
nav:
  Box Model: index.html
  Overflow: overflow.html
  Floats: floats.html
  Clear Fix: clear-fix.html
  Homework: homework.html

---

Overflow is how an element deals with content that is greater than the space it has to display. This will happen when an element has a height defined on it. When an element has a width defined that width will not change but the element will grow in height. If a height is set the element will not grow past that height even if the content is greater than that space.

When the overflow property is set it tells the element how to deal with the extra content. There are four options

* `visible`
* `hidden`
* `auto`
* `scroll`

## Visible
When visible is set the extra content will overflow the element and is seen in the screen. It may overlap other content below it.
```css
overflow: visible;
```
### Example

<p data-height="350" data-theme-id="light" data-slug-hash="gMmPdE" data-default-tab="result" data-user="danhahn" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/danhahn/pen/gMmPdE/">Overflow: Visible </a> by Dan Hahn (<a href="http://codepen.io/danhahn">@danhahn</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Hidden

When hidden is she the extra content will not be seen. The element will just be the size but if the content is greater than the size the user will not be able to see it.
```css
overflow: hidden;
```
### Example

<p data-height="350" data-theme-id="light" data-slug-hash="mEWVzv" data-default-tab="result" data-user="danhahn" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/danhahn/pen/mEWVzv/">Overflow: Hidden </a> by Dan Hahn (<a href="http://codepen.io/danhahn">@danhahn</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


## Auto

Like hidden the content that is greater than the element will not be seen but if they are needed scrollbars will appear.
```css
overflow: auto;
```
### Example

<p data-height="350" data-theme-id="light" data-slug-hash="pbeyoR" data-default-tab="result" data-user="danhahn" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/danhahn/pen/pbeyoR/">Overflow: Auto </a> by Dan Hahn (<a href="http://codepen.io/danhahn">@danhahn</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Scroll

In this case scroll bars will be present at all times even if they are not needed.
```css
overflow: scroll;
```
### Example

<p data-height="350" data-theme-id="light" data-slug-hash="LZWNYJ" data-default-tab="result" data-user="danhahn" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/danhahn/pen/LZWNYJ/">Overflow: Scroll </a> by Dan Hahn (<a href="http://codepen.io/danhahn">@danhahn</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
