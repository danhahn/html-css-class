---
title: Lesson 8
lesson: CSS Sprites
author: Dan Hahn
date: 11/13/2017 18:00
template: article.jade
nav:
  Reset: index.html
  Sprites: sprites.html
  HTML Emails: email.html
  SVG: svg.html
---

CSS Sprites are an idea of using one image as a background for many elements on the page.

This cuts down on the load time for and the number of assent need for a site.

This idea is used only for background images and is at its most advantage when you are repeating the element many times on your page/site.

![](images/image01.png)

The Idea is only the graphic seen in the HTML element would be show.  All other graphics would be hidden.

To view the next graphic the background position would need be change to so the correct graphic would show.  Often the background poistion will be a negative number.

![](images/image05.png)

Here the second graphic is shown.

### Example

	selector {
		background-image(images/sprites.png);
		background-position: right -20px;
	}

Notice the -20px that moves the starting point of the time up 20 pixals.  By doing that the image appears to be a whole new graphic but is still the same image.

## Real Example

![](images/image04.png)

This is a real world example that google used.  You can see that there are 20 or so graphic on one image.

![](images/image00.png)

To expose the graphic of the folder with the small icon the markup would look like this:

	<style type="text/css">
	.folderExample {
		background: url(images/sprites.png) -48px -33px;
		height: 14px;
		width: 14px;
	}
	</style>

	<div class=""folderExample></div>

Notice that DIV has no content in it.  In place of the content we use styles to make it seem like the DIV has an image in it.

![](images/image02.png)

In this example we use the same image but expose a new image.

	<style type="text/css">
	.docExample {
		background: url(images/sprites.png) -33px -18px;
		height: 12px;
		width: 12px;
	}
	</style>

	<div class="docExample"></div>

The same image is used for both.
