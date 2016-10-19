---
title: Lesson 5
author: Dan Hahn
date: 7/18/2016 18:00
template: article.jade
---

# Gradients

* [Backgrounds]()
* [Gradients](gradients.html)
* [Drop Down](dropdown.html)

New in CSS3 you can add a background that is a gradient.  Becasue this is still new browser support is limited.  Most modern browsers support backgrounds in one form but you may need to add a vender prefix to enable for each brwoser.

Gradients are applied as a background to an element.  This means that we can not set a gradient on text.

### General description

Multiple gradients can be assigned comma separated. By default gradients fill the whole background. For tiled gradients see repeating-linear-gradient. rgba and transparent values for all color information are possible.

	background: linear-gradient(left, red, blue 30%, green)

### Options
* Optional. The starting point of the gradient defining a straight line on which the gradient runs to the ending point. General values from the background-position property apply. In this case left defines a gradient running from the left to the right, left top would be a diagonal gradient running from the top left corner to the bottom right. Can also be an angle where 0deg points to the right, 90deg points up and -45deg runs from the top left corner to bottom right. Defaults to a top down gradient (top).
* The starting color (the first color stop). Can also be enhanced by a stop position to move its position on the gradient axis (like at 4).
* Optional. A color stop. In this case the gradient doesn’t simply transition from red (2) to green (5) but is enhanced by a color stop of blue in the middle. Multiple color stops (perhaps enhanced by a stop position like at 4) are possible, separated by commas.
* Optional. Stop position. Defines the position of the color stop on the gradient axis. In this case blue is set to be at 30% instead of 50% (which would be the natural behavior). Can also be a length value (e. g. 20px).
* The ending color (the last color stop). Can also be extended by a stop position (like at 4).