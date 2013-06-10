---
title: Lesson 1
author: Dan Hahn
date: 2013-06-05 18:00
template: article.jade
subject: TEST
---

In this lesson we will talk about how CSS works, basic selectors and basic format of CSS.

<span class="more"></span>

# Introduction

* [Introductin]()
* [Selectors](selectors.html)
* [Comments](comments.html)
* [Include File](include.html)
* [Homework](homework.html)

[Download Notes <i class="icon-download-alt icon-white"></i>](week1-notes.zip) [Download Stater File <i class="icon-download-alt icon-white"></i>](week1.zip)

##Information

###What is CSS

* CSS stands for Cascading Style Sheets
* Styles define how to display HTML elements
* Styles are normally stored in Style Sheets
* External Style Sheets can save you a lot of work
* External Style Sheets are stored in CSS files
* Multiple style definitions will cascade into one

---

###Locations of Styles
Styles can be written in 3 different location.  Where they style is defined will impact how an element will be displayed.

* External file include within the HTML file
* Embedded or Internal style sheet local to HTML file
* Inline style that is added directly to an HTML element

---

###Weight of locations
The location impacts the presentation of the HTML element.

* Default browser setting
* External style sheet.  Last one included on the page has most weight
* Embedded on the page - Last style defended will be displayed.

---

###Inline Style

In the case where two elements have the same style applied the more specific the style the more weight it has.  An inline style has the most weight because it is applied directly to an element. In internal style sheet has more weight than an external because it applied only to that on page.

The efficiency of a style often time is the opposed of how specific it is.  This is because you often want to reuse a style across may elements or page with in your site.

---

###Selectors
In CSS, selectors are used to declare which of the markup elements a style applies to, a kind of match expression.  In other words it is the instruction to the CSS on what HTML elements should be styled but not how they should be styled.

There are 3 basic selectors each has its own weight that defines how an element will look when there are conflicting styles.

* Tag Name Selector
* Class Name Selector
* ID Name Selector

---

###Tag Name Selector
Because HTML has a standard set of tags use CSS can use there names to connect the HTML and CSS.  A tag name selector will apply the style to all elements on a page that match that tag name.

For example if a html page use the paragraph tag CSS can style all P tags on the page to look the same way.  This is very efficient to style a large number of elements at one time.  Because the HTML tag is the reference there is no need to add any addiction mark up.

---

###Class Name Selectors
Often times a style will need to be applied to one or more elements on a page but not all elements.  To allow of a style to be applied to one more more elements on a page a class is created and added to the HTML element.

* A class selectors must have a name given to it.
* A class name can be applied to one or more elements with in a document.
* A class attribute must be added to an HTML element.  `class="className"`
* Class names are case sensitive

---

###ID Name Selectors
Like the class selectors ID selector are applied to an element within the document but unlike a class an ID name can only be used once.

* An ID selector must have a name given to it.
* An ID name can be used only once per document.
* An ID attribute must be added to an HTML element `id="idName"`

**Note:** ID names are case sensitive

---

###Weight of selectors
The more specific a selector is the more weight it has.  An ID has the the most weight because it is used on a page only once.  A class has more weight than a tag selector because it defines what elements it is applied to.

Any time you put effort in to connecting the HTML and the CSS it will have more weight than if you do nothing to the HTML.

---

####Order of weight
* ID Name
* Class Name
* Tag Name

--

###Inline Styles
Inline style are effect way of applying a style to one element.  The down side is that it is not reusable.  If you where apply that style a second time you would need to create that style a second time.

####How to use
Inline styles are applied to an HTML element with an attribute of style.  The attribute is HTML but the value is CSS.

	<h1 style="property:value;">HTML Text</h1>

####Internal and External Styles
The more common way to use CSS is to add the style to an external file or internal style block.  This creates a clear separation between the HTML and the CSS.  If the CSS is written in an external file that file can used on many pages with in your site and if a change needs to be made it is made in once place an applied to all pages at the same time.

####How to use
$$$$HTML
On each element that a class is applied you need to add the class attribute with a value of the class name.  Note: that class name can be anything you want it it be.  The example below use a generic className but it could be almost anything.  The same thing goes for the ID name.

	<h1 class="className">HTML Text</h1>
	<p class="className">HTML Text</p>

*or*

	<div id="idName">
		<p>HTML Text</p>
	</div>

---

###CSS - internal style sheet
The style block will be added with the HEAD tag.  Adding a style tag.

To define a class use the class name defined in the HTML and add a period (.) in front of it. .className

To define an id use the id name defined in the HTML and add a number symbol (#) in front of it. #idName

	[--- head tag --]
	<style type="text/css">
    .className {
		property: value;
	}
	#idName {
		property: value;
	}
	</style>
	[--- end  head tag --]

---

###CSS Syntax
The syntax for css is very different than HTML syntax.

####Basic format
* **Declaration** - The whole style including the selector and properties and values.
* **Selector** - How the HTML and CSS are connected
* **Property** - predefined options used to change the look and feel of an element.
* **Value** - predefined value based on selected property.
* **Colon(:)** - indicates the end of the property.
* **Semicolon(;)** - indicates the end of a value.  Semicolons are required.

Inline style - when using an inline style you will only use the property and value.
Basic format

	selector {
		property: value;
	}


More than one property - declarations can have many properties defined

	selector {
		property1: value;
		property2: value2;
	}

---

##Homework

This weeks homework is due a the start of next week.

[Get Started](homework.html)


