---
title: Lesson 2 - Include CSS File
author: Dan Hahn
date: 2013-06-08 18:00
template: article.jade
---

<span class="more"></span>

* [Borders](/articles/lesson-2/#Borders)
* [Padding](/articles/lesson-2/#Padding)
* [Margin](/articles/lesson-2/#Margin)
* [Include File](#)

#Include CSS File

To include a css **file in an HTML** the first thing you need is a `.css` file.  You can create a .css file the same way you create a .html.  Go to file save as and give the file a name and add .css as the extension.

##Link tag `<link>`

The link tag is an HTML tag that is added within the head of a document.  This tag has three attributes.

* `href` – the location of the file
* `rel` – set to stylesheet
* `type` – set to text/css (*not needed in HTML5*)

###Example

	<link rel="stylesheet" type="text/css" href="filelocaiton.css">

##@import `@import`

@import includes a .css but does it with in CSS itself.  With @import one css file can include another file.

EXAMPLE

	<style type="text/css">
		@import url(filename.css);
	</style>

##Print CSS

CSS files can be targeted to only the screen or printer.  This allows different styles to be applied to the screen and the printer.

###Example

	<style type="text/css">
		@import url(filename.css) print;
	</style>

###Within a style block

	<style type="text/css">
	h2 {
		color: blue;
	}
	@media print {
		h1 {
			color: black;
		}
	}
	</style>

###Using Link

	<link rel="stylesheet" type="text/css" href="filelocaiton.css" media="print"/>


* `all` – Suitable for all devices.
* `handheld` – Intended for handheld devices (typically small screen, limited bandwidth).
* `print` – Intended for paged material and for documents viewed on screen in print preview mode. Please consult the section on paged media for information about formatting issues that are specific to paged media.
* `screen` – Intended primarily for color computer screens.

 <script src="lesson-2.js"></script>