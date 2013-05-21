---
title: Lesson 2
author: Dan Hahn
date: 2013-06-08 18:00
template: article.jade
---

This lesson we talk about borders, padding and margin as well as how to include a file.

<span class="more"></span>

* [Borders](#Borders)
* [Padding](#Padding)
* [Margin](#Margin)

#Border, Padding and Margin

Border, padding and margin are the key parts that go in to the CSS Box Model, but more on that later.

---

##Borders
Borders can be added to most every element and are made up of three parts.


* `border-width:` defines the width of the border, If no border is defined the default size is 3px.
* `border-style:` defines how the border will look.  There are a number of options including solid, double, dotted and dashed.
* `border-color:` defines the color of the border.  If no color is defined the current font color will be used.

A border can’t be defined on an element with out at least the border-style because there is no default value.  If you only define a border-style the border will be 3px thick and have the current font color.

`border-*` will define the border for all sides.  If you need to define a border for only side there are border-[top,right,bottom,left]-[width,style,color] that can be used.
###For example

	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: green;

###Using border
CSS has short hand way to easily define a border.  The border property takes up to three values.

	border: {width} {style} {color};

The only required property is style, the other two are option but recommended.  If the options values are not set the are set to the default value.

Again if you need to target one side of a border you can use border-[top,right,bottom,left].
###For example

	border-top: 2px dashed #ff00ff;

Since you can only define one value for each option in the shorthand there is no easy way to set each side to a different value.  In this case you will need to set each with its own property.

###For example

	border-top: 10px dotted blue;
	border-bottom: 8px solid yellow;

---

##Padding
Padding is the space from the "border" in to the content. Even if a border is not defined there is still an edge of the element, this is the "border".

Padding will define all four sides of the box one value is set. If you need to define the padding of just one side of the box you can use padding-[top,right,bottom,left].
###For Example

	padding-top: 20px;
	padding-bottom: 20px;

##Other values for padding
* When padding has only one value `padding: 20px;` it will define that value 20px the same on **all four sides**.
* When padding has two values `padding: 10px 20px;` it defines 10px for the **top and bottom** and 20px on the **left and right**.
* When padding has three values `padding: 10px 5px 30px;` it defines 10px for the **top** 5px for the **left and right**, and 30px for the **bottom**.
* When Padding has four values `padding: 10px 20px 30px 40px;` it will define 10px for the **top**, 20px for the **right**, 30px for the **bottom**, and 40px for the **left**.

###Again
	padding: (All Sides);
	padding: (top and bottom) (left and right);
	padding: (top) (left and right) (bottom);
	padding: (top) (right) (bottom) (left);

**Note:** you will never user a comma only a space.  If you use a comma it will not work.

---
##Margin
Margin is the space from one element "border" to another element "border". What this means that that you are note setting the space from the edge of margin but the element itself.  Margins can overlap.

Margin will define all four sides of the box one value is set. If you need to define the margin of just one side of the box you can use `margin-[top,right,bottom,left]`.

##For Example

	margin-top: 20px;
	margin-bottom: 20px;

Just like padding the number of values you place effects different sides.

	margin: (All Sides);
	margin: (top and bottom) (left and right);
	margin: (top) (left and right) (bottom);
	margin: (top) (right) (bottom) (left);

<script src="lesson-2.js"></script>