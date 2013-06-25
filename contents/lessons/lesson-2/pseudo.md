---
title: Lesson 2
author: Dan Hahn
date: 2013-06-12 18:00
template: article.jade
---

#Pesedo

* [Borders]()
* [Padding](padding.html)
* [Margin](margin.html)
* [Pseudo](pseudo.html)
* [overflow](overflow.html)
* [Homework](homework.html)

Pseudo class selectors are CSS selectors with a colon preceding them.

###Link-related pseudo class selectors

`:link` - Perhaps the most confusion-causing link-related pseudo selector. Aren't all `<a>`'s links? Well not if they don't have an href attribute. This selects only those that do, thus is essentially the same as a[href]. This selector will become a lot more useful should any-element linking become reality.

`:visited` - Selects links that have already been visited by the current browser.

`:hover` - When the mouse cursor rolls over a link, that link is in it's hover state and this will select it.

`:active` - Selects when the link while it is being activated (being clicked on or otherwise activated). For example, for the "pressed" state of a button-style link or to make all links feel more button-like.



