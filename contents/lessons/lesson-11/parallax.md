---
title: Lesson 11
lesson: Parallax Scrolling
author: Dan Hahn
date: 12/04/2017 15:00
template: article.jade
nav:
  GIT: index.html
  Wintersmith: wintersmith.html
  Parallax: parallax.html
---

# Parallax Scrolling

* [GIT]()
* [Wintersmith](wintersmith.html)
* [Parallax](parallax.html)

## Installation

<a href="https://github.com/pixelcog/parallax.js/archive/v1.2.zip" class="btn">Download</a>

Download and include parallax.min.js in your document after including jQuery.

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script src="/path/to/parallax.js"></script>

## Useage
Via data attributes
To easily add a parallax effect behind an element, add data-parallax="scroll" to the element you want to use, and specify an image with data-image-src="/path/to/image.jpg".

	<div class="parallax-window" data-parallax="scroll" data-image-src="/path/to/image.jpg"></div>

## Via JavaScript
To call the parallax plugin manually, simply select your target element with jQuery and do the following:

	$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
## Under The Hood

What parallax.js will do is create a fixed-position element for each parallax image at the start of the document’s body. This mirror element will sit behind the other elements and match the position and dimensions of it’s target object.

Due to the nature of this implementation, you must ensure that these parallax objects and any layers below them are transparent so that you can see the parallax effect underneath. Also, if there is no other content in this element, you will need to ensure that it has some fixed dimensions otherwise you won’t see anything.

.parallax-window {
    min-height: 400px;
    background: transparent;
}

## Options

Options can be passed in via data attributes of JavaScript. For data attributes, append the option name to data-, as in data-image-src="".

**Note:** that when specifying these options as html data-attributes, you should convert “camelCased” variable names into “dash-separated” lower-case names (i.e. zIndex would be data-z-index="").

Name          | type    | default | description
--------------|---------|---------|------------------------------
imageSrc      | path    | null    | You must provide a path to the image you wish to apply to the parallax effect.
naturalWidth  | number  | auto    | You can provide the natural width and natural height of an image to speed up loading and reduce error when determining the correct aspect ratio of the image.
naturalHeight | number  | auto    | You can provide the natural width and natural height of an image to speed up loading and reduce error when determining the correct aspect ratio of the image.
speed         | float   | 0.2     | The speed at which the parallax effect runs. 0.0 means the image will appear fixed in place, and 1.0 the image will flow at the same speed as the page content.
zIndex        | number  | -100v   | The z-index value of the fixed-position elements. By default these will be behind everything else on the page.
bleed         | number  | 0       | You can optionally set the parallax mirror element to extend a few pixels above and below the mirrored element. This can hide slow or stuttering scroll events in certain browsers.
iosFix        | boolean | true    | iOS devices are incompatable with this plugin. If true, this option will set the parallax image as a static, centered background image whenever it detects an iOS user agent. Disable this if you wish to implement your own graceful degradation.
androidFix    | boolean | true    | If true, this option will set the parallax image as a static, centered background image whenever it detects an Android user agent. Disable this if you wish to enable the parallax scrolling effect on Android devices.
