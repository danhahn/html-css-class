---
title: Lesson 8
author: Dan Hahn
date: 11/16/2015 18:00
template: article.jade
---

This week we will talk about CSS reset, Sprites and Flexbox

<span class="more"></span>

# What Is A CSS Reset?

* [Reset]()
* [Sprites](sprites.html)
* [Flexbox](flexbox.html)
* [Media Query](media.html)

[Download Notes  <i class="icon-download-alt icon-white"></i>](week8-notes.zip)
[Download Starter File  <i class="icon-download-alt icon-white"></i>](week8.zip)

<a href="http://www.cssreset.com/" class="btn">Get a Reset</a>

A CSS Reset (or “Reset CSS”) is a short, often compressed (minified) set of CSS rules that resets the styling of all HTML elements to a consistent baseline.

In case you didn’t know, every browser has its own default ‘user agent’ stylesheet, that it uses to make unstyled websites appear more legible. For example, most browsers by default make links blue and visited links purple, give tables a certain amount of border and padding, apply variable font-sizes to H1, H2, H3 etc. and a certain amount of padding to almost everything. Ever wondered why Submit buttons look different in every browser?

Obviously this creates a certain amount of headaches for CSS authors, who can’t work out how to make their websites look the same in every browser.

Using a CSS Reset, CSS authors can force every browser to have all its styles reset to null, thus avoiding cross-browser differences as much as possible.

## Why Use A CSS Reset?

You might wonder what this is all for – well, it’s simple. From the consistent base that you’ve set up via your reset, you can then go on to re-style your document, safe in the knowledge that the browsers’ differences in their default rendering of HTML can’t touch you!

## CSS Reset Issues

Some people claim that this is unnecessary – that there’s no sense resetting an element’s style, only to un-reset it afterwards. If you did a close up on one element, with a CSS Reset and then further styling, the issue becomes clear:

	/* CSS Reset */
	#element { margin:0; padding:0; font-size:100%; line-height:1; }

	/* #element rules: */
	#element { margin:5px 0 10px; font-size:13px; line-height:1.5; }
	In many ways, they’re right – it duplicates effort and processing time, when a single declaration would have sufficed – many developers and designers feel that this violates the ‘DRY’ (Don’t Repeat Yourself) principle.

However, there are multiple benefits of this technique that outweigh any drawbacks, not least the more logical development progression that it afford: paste in your CSS Reset, paste in your base styles (if needed), then define everything else from there. It’s also nice to know that you’ve got your bases covered.

Another issue is to do with the Cascading part of ‘Cascading Style Sheets’. If your CSS Reset isn’t carefully written, you might find that your CSS rules are being themselves overwritten by the code that was supposed to be their baseline! This is often a problem when using the Universal Selector Reset, but won’t generally be an issue if working with well-written code such as the HTML5 Doctor CSS Reset.

Hopefully this article has helped answer the whole What is a CSS Reset question with a little clarity… if you’re still left scratching your head, check out the companion article, Which CSS Reset Should I Use?

Please shoot me a message if there’s anything you think needs to be added to this article and I’ll be happy to add it with credit and a link back!

**Note:** this page is a copy of this http://www.cssreset.com/what-is-a-css-reset/
