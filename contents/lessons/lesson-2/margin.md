---
title: Lesson 2
author: Dan Hahn
date: 2013-06-12 18:00
template: article.jade
---

#Margin

* [Borders]()
* [Padding](padding.html)
* [Margin](margin.html)
* [Box Model](box-model.html)

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

<script src="lesson-2.js"></script>