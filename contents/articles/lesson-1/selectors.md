---
title: Selectors
author: Dan Hahn
date: 2013-06-05 18:00
template: article.jade
subject: TEST
---

* [Introductin](index.html)
* [Selectors](#)
* [Comments](comments.html)

#CSS Selectors

Selectors are the way that the HTML and CSS connect to each other.   There are 3 basic types of selectors, tag, class and id.

##Tag Name Selector

Tag name selectors use HTML tags as the connection.  Any HTML element can be used as a selector. Although not all HTML elements can be styled.

	Example
	[-- head --]
	<style type="text/css">
	h1 {
		color: red;
	}
	</style>

	[-- body --]
	<h1>Example Text</h1>

##Class Name selector

Class name selectors require an attribute of `class=""` to be added to an HTML element.  A class name must be given and that name will be used to connect the HTML and CSS.  Many elements on a page may use the same class name.

###Example
	[-- head --]
	<style type="text/css">
	.className {
		color: red;
	}
	</style>
	
	[-- body --]
	<h1 class="className">Example Text</h1>
	
##ID Name selector
An ID name selectors require an attribute of `id=""` to be added to an HTML element.  An ID name must be given and that name will be used to connect the HTML and CSS.  Only one element per page can use an ID name although there can be many different ID names on the same page.

###Example

	[-- head --]
	<style type="text/css">
	#idName {
		color: red;
	}
	</style>
	
	[-- body --]
	<h1 id="idName">Example Text</h1>
	
##Limiting the scope

Because classes can be applied to many elements on a page there could be a case where the same class name is used on two or more different elements.  One way to ensure that styles are applied only to the elements intended is limit the scope.  For example you may have a class name of "firstLine" that is applied to both a P tag and an LI tag.  The style you create would apply to both at the same time.

Since they are not the same it may be the case that you want to style each differently.  By combining two of the basic selectors you can ensure that only the intended element is styled.

	tag.className
	
or
	p.intro	

When two selectors are combined without a space, as with the example above, the class will only applied to the HTML tag that has the class name.

###Example

	[-- head --]
	<style type="text/css">
	p.firstLine {
		color: red;
	}
	</style>
	
	[-- body --]
	<p class="firstLine">Example Text</p>
	<ul>
		<li class="firstLine">List Text</li>
	</ul>

In this example you can see there are two elements that have the class name of "firstLine".  To limit the class "firstLine" only to P tags, we start with a tag name selector and append the class name.

This idea will work with any combination of the three basic selectors

	tag.className
	tag#idName
	#id.className
	.className.className2

##Context Selectors

Context selectors use the HTML structure to target elements to be styled.  Context selectors can use any combination of the three basic selectors.

	[-- head --]
	<style type="text/css">
	/* case 1 */
	div h1 {
		color: red;
	}
	/* or */
	#example h1 {
		color: red
	}

	/* case 2 */
	div div p {
		color: blue;
	}
	/* or */
	.repetElement p {
		color: blue;
	}
	/* or */
	#example div p {
		color: blue;
	}
	</style>

