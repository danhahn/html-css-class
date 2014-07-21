---
title: Lesson 4
author: Dan Hahn
date: 2014-06-30 18:00
template: article.jade
---

# Variable Width

* [Basic Layouts]()
* [Flexible Width](flexable.html)
* [Variable Width](varable.html)
* [Grid System](grid.html)
* [Position](position.html)

In the examples above we had a fixed width of the container. In one example it was `800px` the other fit the width of the screen. In this example we will limit the width to be variable width of anything from `700px` to `1200px`.

	<style>
	    #container {
            min-width: 700px;
            max-width: 1200px;
        }

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
