---
title: Lesson 3
author: Dan Hahn
date: 2013-06-19 18:00
template: article.jade
---

This week we will talk about the **CSS Box Model** and how to float elements.

<span class="more"></span>

* [Box Model](#)
* [Floats](floats.html)

## Box Model

The box model is how we get the size of an element.

Because element are measured based on the size of the content not the size of the box.

Use this calculation to find the real size of your box.

	Desired Width = Actual Width - (Left and Right Padding) - (Left and Right Margin) - (Left and Right Border)

An element that should take up 400px on the screen with padding of 5px and margin of 10px with a 1px border would be?

	400px - (5px x 2) - (10px x 2) - (1px x 2) = 368px (desired width)

