---
title: Lesson 3
lesson: Floats
author: Dan Hahn
date: 10/02/2017 18:00
template: article.jade
nav:
  Box Model: index.html
  Overflow: overflow.html
  Floats: floats.html
  Clear Fix: clear-fix.html
  Flex Box: flex-box.html
---

# CSS Floats

* [Box Model]()
* [Overflow](overflow.html)
* [Floats](floats.html)
* [Clear Fix](clear-fix.html)
* [Flex Box](flex-box.html)

Float is CSS property that is used to display content.  Floats where originally intended to get the magazine feel on the web by allowing images or other content to wrap around text within an article.  Over time floats have been used for other reason like layouts. CSS floats can be applied to any elements, both *inline* and *block*.

When an element is floated they go into a state that is not inline or block.  A floated element is a lot like `display: inline-block` but the content will wrap around it..  A floated element differs from all other elements because it is not part of the *flow of the document* so the container is not able to use a floated element to determine its height.

**Note:** Elements are floated horizontally, this means that an element can only be floated left or right, not up or down.

## Float Basics

| prop  | value | desc                                                       | example         |
|-------|-------|------------------------------------------------------------|-----------------|
| float | left  | float an item to the left and content will wrap around it  | `float: left;`  |
| float | right | float an item to the right and content will wrap around it | `float: right;` |

<p data-height="700" data-theme-id="light" data-slug-hash="beqpdV" data-default-tab="result" data-user="danhahn" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/danhahn/pen/beqpdV/">Floating Elements</a> by Dan Hahn (<a href="http://codepen.io/danhahn">@danhahn</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Note:** Elements that are floated will move to the far left or right of the container and the content will wrap around the floated element.

When two elements are floated in the same direction one after another they will "stack" next to each other.

## Clearing A float
When an element is floated it affects both the element that has the float and the element after it.  To stop an element from being affected by the float you need to add the css property of clear.

Clear has three values, left, right and both.  `clear: left` will clear a `float: left`, `clear: right` will clear a `float right` and `clear: both` will clear either a left or right float.

|prop|value|desc|example|
|----|-----|----|-------|
|clear|left|A clear **left** will clear an element that has been floated left|`clear: left;`|
|clear|right|A clear **right** will clear an element that has been floated right|`clear: right;`|
|clear|both|A clear **both** will clear an element that has been floated left **or** right|`clear: both;`|

The the clear float must be added to an element after the floated element.

In this example the content in the second element is not affected by the the float because it has a clear:left; on it.

<p data-height="700" data-theme-id="light" data-slug-hash="aZJNdG" data-default-tab="result" data-user="danhahn" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/danhahn/pen/aZJNdG/">Floating Elements-clear</a> by Dan Hahn (<a href="http://codepen.io/danhahn">@danhahn</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

 **Note:** When the clearing an element it will clear that element and all the elements after.

## Stacking Floats

When two or more consecutive elements are floated in the same direction they will "stack" horizontally.  This is often used to create navigation or layouts.

**Note:** when all the content with in an element is floated that element will seem to have no height.

### Example

    <style>
        li {
            float: left;
            list-style:none;
        }
    </style>
    <ul>
        <li>Nav Item 1</li>
        <li>Nav Item 2</li>
        <li>Nav Item 3</li>
        <li>Nav Item 4</li>
    </ul>

<div id="stacking_content"></div>


[More Info](http://css-tricks.com/all-about-floats/)

<script src="lesson-3.js"></script>
