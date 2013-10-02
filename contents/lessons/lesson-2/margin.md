---
title: Lesson 2
author: Dan Hahn
date: 2013-06-12 18:00
template: article.jade
---

#Margin

* [Font Properites]()
* [Text Properties](text.html)
* [Borders](borders.html)
* [Padding](padding.html)
* [Margin](margin.html)
* [Pseudo](pseudo.html)
* [overflow](overflow.html)
* [Homework](homework.html)

Margin is the space from one element `border` to another element `border`. What this means that that you are note setting the space from the edge of margin but the element itself.  Margins can overlap.

Margin will define all four sides of the box one value is set. If you need to define the margin of just one side of the box you can use `margin-[top,right,bottom,left]`.

###Example

	margin-top: 20px;
	margin-bottom: 20px;

Just like padding the number of values you place effects different sides.

	margin: (All Sides);
	margin: (top and bottom) (left and right);
	margin: (top) (left and right) (bottom);
	margin: (top) (right) (bottom) (left);

## Center Container

The problem with centering `#container` on the page is there is no real property that does this. Your first thought might be `text-align: center;` but that will just center the text within the elements.

By setting the `margin` on the left and right to `auto` the element will be centered on the page. Because we set the left and right to auto it take the space left over after the and divide it by 2 and set it equal to each other. This will make the element center on the page.

	<style>
		#container {
			width: 800px;
			margin: 0 auto;
		}
	</style>

<script src="lesson-2.js"></script>