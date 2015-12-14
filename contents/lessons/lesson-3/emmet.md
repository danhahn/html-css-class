---
title: Lesson 3
author: Dan Hahn
date: 10/5/2015 18:00
template: article.jade
---

# Using Emmet

* [Center thing]()
* [Using Emmet](emmet.html)
* [Box Model](box-model.html)
* [Floats](floats.html)
* [Clear Fix](clear-fix.html)
* [Homework](homework.html)

Basically, most text editors out there allow you to store and re-use commonly used code chunks, called “snippets”. While snippets are a good way to boost your productivity, all implementations have common pitfalls: you have to define the snippet first and you can’t extend them in runtime.

Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.

<a href="http://docs.emmet.io/" class="btn" target="\_blank">Emmet Docs <i class="fa fa-book"></i></a>

## Setting up Sublime Text

Emmet is not installed by default on most editors.  Many editors like brackets and atom have built in package managers but we need to install on for sublime text.

<a href="https://packagecontrol.io/" class="btn" target="\_blank">Sublime Text Package Control <i class="fa fa-external-link"></i></a>

To open the control panel in sublime text you need to hold down <code>cntr \`</code>.  This will open panel on the bottom 1/3 of the application.

https://packagecontrol.io/installation

## Once installed we now need to instll emmet

http://emmet.io/blog/sublime-text-3/

Emmet now supports Sublime Text 3 beta!

How to install:

The preferred way to install Emmet is to use Package Control:

1. Open Command Palette in Sublime Text
2. Pick “Install Package” command
3. Find and install “Emmet” plugin

<iframe width="480" height="360" src="https://www.youtube.com/embed/blGzzrmS34k" frameborder="0" allowfullscreen></iframe>

## Abbreviations

Abbreviations are the heart of the Emmet toolkit: these special expressions are parsed in runtime and transformed into structured code block, HTML for example. The abbreviation’s syntax looks like CSS selectors with a few extensions specific to code generation. So every web-developer already knows how to use it.

Here’s an example: this abbreviation

    #page>div.logo+ul#navigation>li*5>a{Item $}

...can be transformed into

    <div id="page">
        <div class="logo"></div>
        <ul id="navigation">
            <li><a href="">Item 1</a></li>
            <li><a href="">Item 2</a></li>
            <li><a href="">Item 3</a></li>
            <li><a href="">Item 4</a></li>
            <li><a href="">Item 5</a></li>
        </ul>
    </div>

...with just a single key stroke. In many editors (such as Eclipse, Sublime Text 2, Espresso etc.) plugins will also generate proper tabstop marks so you can quickly traverse between important places of generated code with the Tab key.

Abbreviations are optimised for, but not limited to, HTML and XML generation, and make writing tedious markup code a breeze. You can start learning syntax to unleash the full power of Emmet abbreviations.
