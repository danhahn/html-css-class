---
title: Lesson 4
author: Dan Hahn
date: 2014-06-30 18:00
template: article.jade
---

# Flex Width

* [Basic Layouts]()
* [Flexible Width](flexable.html)
* [Variable Width](varable.html)
* [Grid System](grid.html)
* [Position](position.html)

There are times where we want the display to be flexible. In this example we will keep the `#globalNav` a fixed width of `width: 200px;`.

To make this work we need to keep the nav a fixed width and have the content be flexible. The issue is that once we float an element it will take up as much space as needed unless a width is set. To get around this we will change things up a bit. Rather than float both elements, we will float only the nav and offset the content by the with of that nav.

	<style>
		#gloablNav {
			width: 200px;
			float: left;
		}

		#contentArea {
			margin-left: 200px;
		}

		#footer {
			clear: both;
		}
	</style>

	<div id="container">
        <header id="globalHeader"></header>
        <nav id="globalNav"></nav>
        <article id="contentArea"></article>
        <footer id="gloablFooter"></footer>
    </div>

