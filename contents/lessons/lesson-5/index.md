---
title: Lesson 5
author: Dan Hahn
date: 10/19/2015 18:00
template: article.jade
---

This week we will be going over background and building a two level dropwdown.

<span class="more"></span>

# Backgrounds

* [Backgrounds]()
* [Gradients](gradients.html)
* [Drop Down](dropdown.html)

[Download Notes  <i class="icon-download-alt icon-white"></i>](week5-notes.zip)
[Download Starter File  <i class="icon-download-alt icon-white"></i>](week5.zip)

Backgrounds are a way to add colors and images to elements on the page.

### Background Color

	background-color: color name | RGB Value | Hex Value;

Background color can be added any element on the page including both block and inline elements. Block level elements will display the full width of the element where inline will only display in the space the content needs. You can use padding to expose more of the background.

### Background Image

	background-image: url(<image path>);

Background images can be applied to any element on the page including both block and inline elements. If a background color and image are applied at the same time to the same element the image will overlay the color. By default a background image will tile in all directions starting in the top left corner.

### Background Repeat

	background-repeat: repeat | no-repeat | repeat-x | repeat-y

When applying a background image it will tile in all directions by default.

You can control the way the image will tile by using `background-repeat`.

Repeat           | Direction
-----------------|--------------------------------
repeat (default) | tiles in all directions
no-repeat        | the image will appear one time.
repeat-x         | repeat along the x axis
repeat-y         | repeat along the x axis

### Background Attachment

	background-attachment: scroll | fixed;

When a background image is applied to an element by default it will move with that element then the page scrolls. An image can be locked to one location by setting the value of background-attachment to fixed. When fixed is applied the element will no longer have its location set by the element but the body instead. The most common use of the is property is when applying a background to the BODY tag and that background image should not move when the page is scrolled.

#### Background Position

	background-position: (left, right or center) (top, center or bottom);

The position of the background image can be sent by using background-position. When a value is set the image will move to the location set background-position and if a tile is applied tile out from that point.

If you want the image to be position the center both vertical and horizontal than you need only define the value of center.

	background-position: center;

Position can also be set by adding a number value, two values must be set with the first value how far from the left and the second value how far from the top. Number can be in pixels or percentages.

	background-position: 100px 300px;
	background-position: 50% 80%;

### Background Shorthand

	background: image repeat attachment position color;

Like many CSS properties there is a shorthand way to define a background. Like with other shorthand options not all values are required and values not set will be set to the default value.

	background: #fff url(images/side-bar.png) repeat-y right top;

In this example attachment is not defined so it will be set to the defult which in this case is scroll.

In a case where you need to override a value set elsewhere and remove all background values it can be done by setting the background value to none.

	background: none;

You are setting the `background-image` to none and by default setting the `background-color` to transparent.

### Background Size

Background size allows you to control the size of the background. The value can be both pixel or percentage.

Background-size can take one or two values. When one value is set it controls both x and y.

When two values are set it controls x and the y independent.

	background-size: 50%;
	background-size: 100px 200px;

**Note:** background-size can't be added to the short had.  It may be added in the future.
