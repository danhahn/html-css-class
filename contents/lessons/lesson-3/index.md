---
title: Lesson 3
lesson: CSS Box Model
author: Dan Hahn
date: 10/02/2017 18:00
template: article.jade

downloads:
  Download Stater File:
    file: week3.zip
    btn: primary
  Download Notes:
    file: week3-notes.zip
    btn: null

nav:
  Box Model: index.html
  Overflow: overflow.html
  Floats: floats.html
  Clear Fix: clear-fix.html
  Flex Box: flex-box.html
---

This week we will talk about the **CSS Box Model**,floating elements and **Flex Box**.

<span class="more"></span>

# CSS Box Model

* [Box Model]()
* [Overflow](overflow.html)
* [Floats](floats.html)
* [Clear Fix](clear-fix.html)
* [Flex Box](flex-box.html)

[Download Notes  <i class="icon-download-alt icon-white"></i>](week3-notes.zip)
[Download Starter File  <i class="icon-download-alt icon-white"></i>](week3.zip)

Since Everything on in web design is a rectangular box we need to know how to size that box.  The way that CSS calculates the size of a box is not what you expect.  Rather than set the size of the box based on the outer most elements `border` or `padding` the width is set baed on the content.

## Setting a Width

To set the width of an element you take the desired width and subtract the `padding-left`, `padding-right`, `border-left-width` and `border-right-width`.  If you need to maintain the `margin` you will need to subtract the `margin-left` and `margin-right`.

### Example

If we have an element that needs to fit in to a space that is `400px` and it has `padding: 20px` and `border: 5px solid black` the calculation to find the size would look like this.

    400px - 20px -20px - 5px - 5px = 350px

### Example

<button id="fixWidth" class="btn" style="float: right;">Fix Width</button>

<ul id="cntrBoxModel" class="btn-group">
    <li class="btn" data-total="400" id="total">width: 400px;</li>
    <li class="btn" data-size="20">padding: 20px;</li>
    <li class="btn" data-size="10">border: 10px solid #1abc9c;</li>
    <li class="btn" data-size="30">margin: 30px;</li>
</ul>

<div id="displayBoxModel" class="box-container">
    <div class="box-model">
        Box Model Element.
    </div>
</div>

## CSS3 Box Sizing

In CSS3 they fixed this issue with the introduction of a new CSS property called `box-sizing`.

| Value | Description |
|---|---|
| content-box | Default. The width and height properties (and min/max properties) includes only the content. Border, padding, or margin are not included |
| border-box | The width and height properties (and min/max properties) includes content, padding and border, but not the margin |
| initial | Sets this property to its default value. |
| inherit | Inherits this property from its parent element. |

Now we can change an element to define its size based on the way we would expect it too.

### Setting standard box-sizing

You can set all elements to use the `*` selector.

    * {
        box-sizing: border-box;d
    }

<style>
table tr td:nth-child(1){width:40%}
</style>

<script src="lesson-3.js"></script>
