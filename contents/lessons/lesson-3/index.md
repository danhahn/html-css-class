---
title: Lesson 3
author: Dan Hahn
date: 2013-06-24 18:00
template: article.jade
---

This week we will talk about the **CSS Box Model** and how to float elements.

<span class="more"></span>

# CSS Box Model

* [Box Model]()
* [Floats](floats.html)
* [Clear Fix](clear-fix.html)

Since Everything on in web design is a rectangular box we need to know how to size that box.  The way that CSS calculates the size of a box is not what you expect.  Rather than set the size of the box based on the outter most elements `border` or `padding` the widht is set baed on the content.

## Setting a width

To set the width of an element you take the desired width and subtract the `padding-left`, `padding-right`, `border-left-width` and `border-right-width`.  If you need to maintain the `margin` you will need to subtract the `margin-left` and `margin-right`.

### Example

If we have an element that needs to fit in to a space that is `400px` and it has `padding: 20px` and `border: 5px solid black` the calulation to find the size would look like this.

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



<script src="lesson-3.js"></script>