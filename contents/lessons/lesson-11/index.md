---
title: Lesson 11
author: Dan Hahn
date: 2014-12-01 18:00
template: article.jade
---

This week we will talk about advaced CSS slectors.  We will also talk about CSS sprites.

<span class="more"></span>

# Selectors

* [Selectors]()
* [CSS3](css3.html)
* [Sprites](sprites.html)

[Downlaod Notes  <i class="icon-download-alt icon-white"></i>](week6-notes.zip)
[Downlaod Starter File  <i class="icon-download-alt icon-white"></i>](week6.zip)

<table class="selectorsReview">
<thead>
<tr>
	<th class="pattern">Pattern</th>
	<th class="meaning">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
	<td class="pattern">*</td>
	<td class="meaning">any element</td>
</tr>
<tr>
	<td class="pattern">E

	</td>
	<td class="meaning">an element of type E

	</td>
</tr>
<tr>
	<td class="pattern">E[foo]

	</td>
	<td class="meaning">an E element with a "foo" attribute

	</td>
</tr>
<tr>
	<td class="pattern">E[foo="bar"]

	</td>
	<td class="meaning">an E element whose "foo" attribute value is exactly
		equal to "bar"

	</td>
</tr>
<tr>
	<td class="pattern">E[foo~="bar"]

	</td>
	<td class="meaning">an E element whose "foo" attribute value is a list of
		whitespace-separated values, one of which is exactly equal to "bar"

	</td>
</tr>
<tr>
	<td class="pattern">E[foo^="bar"]

	</td>
	<td class="meaning">an E element whose "foo" attribute value begins
		exactly with the string "bar"

	</td>
</tr>
<tr>
	<td class="pattern">E[foo$="bar"]

	</td>
	<td class="meaning">an E element whose "foo" attribute value ends exactly
		with the string "bar"

	</td>
</tr>
<tr>
	<td class="pattern">E[foo*="bar"]

	</td>
	<td class="meaning">an E element whose "foo" attribute value contains the
		substring "bar"

	</td>
</tr>
<tr>
	<td class="pattern">E[foo|="en"]

	</td>
	<td class="meaning">an E element whose "foo" attribute has a
		hyphen-separated list of values beginning (from the left) with "en"

	</td>
	</td>
</tr>
<tr>
	<td class="pattern">E:root

	</td>
	<td class="meaning">an E element, root of the document

	</td>
</tr>
<tr>
	<td class="pattern">E:nth-child(n)

	</td>
	<td class="meaning">an E element, the n-th child of its parent

	</td>
</tr>
<tr>
	<td class="pattern">E:nth-last-child(n)

	</td>
	<td class="meaning">an E element, the n-th child of its parent, counting
		from the last one

	</td>
</tr>
<tr>
	<td class="pattern">E:nth-of-type(n)

	</td>
	<td class="meaning">an E element, the n-th sibling of its type

	</td>
</tr>
<tr>
	<td class="pattern">E:nth-last-of-type(n)

	</td>
	<td class="meaning">an E element, the n-th sibling of its type, counting
		from the last one

	</td>
</tr>
<tr>
	<td class="pattern">E:first-child

	</td>
	<td class="meaning">an E element, first child of its parent

	</td>
</tr>
<tr>
	<td class="pattern">E:last-child

	</td>
	<td class="meaning">an E element, last child of its parent

	</td>
</tr>
<tr>
	<td class="pattern">E:first-of-type

	</td>
	<td class="meaning">an E element, first sibling of its type

	</td>
</tr>
<tr>
	<td class="pattern">E:last-of-type

	</td>
	<td class="meaning">an E element, last sibling of its type

	</td>
</tr>
<tr>
	<td class="pattern">E:only-child

	</td>
	<td class="meaning">an E element, only child of its parent

	</td>
</tr>
<tr>
	<td class="pattern">E:only-of-type

	</td>
	<td class="meaning">an E element, only sibling of its type

	</td>
</tr>
<tr>
	<td class="pattern">E:empty

	</td>
	<td class="meaning">an E element that has no children (including text
		nodes)

	</td>
</tr>
<tr>
	<td class="pattern">E:link<br>
		E:visited

	</td>
	<td class="meaning">an E element being the source anchor of a hyperlink of
		which the target is not yet visited (:link) or already visited
		(:visited)

	</td>
</tr>
<tr>
	<td class="pattern">E:active<br>
		E:hover<br>
		E:focus

	</td>
	<td class="meaning">an E element during certain user actions

	</td>
</tr>
<tr>
	<td class="pattern">E:target

	</td>
	<td class="meaning">an E element being the target of the referring URI

	</td>
	</td>
</tr>
<tr>
	<td class="pattern">E:lang(fr)

	</td>
	<td class="meaning">an element of type E in language "fr" (the document
		language specifies how language is determined)

	</td>
</tr>
<tr>
	<td class="pattern">E:enabled<br>
		E:disabled

	</td>
	<td class="meaning">a user interface element E which is enabled or
		disabled

	</td>
</tr>
<tr>
	<td class="pattern">E:checked<!--<br>E:indeterminate-->

	</td>
	<td class="meaning">a user interface element E which is
		checked<!-- or in an
indeterminate state--> (for instance a
		radio-button or checkbox)

	</td>
</tr>
<tr>
	<td class="pattern">E::first-line

	</td>
	<td class="meaning">the first formatted line of an E element

	</td>
</tr>
<tr>
	<td class="pattern">E::first-letter

	</td>
	<td class="meaning">the first formatted letter of an E element

	</td>
</tr>
<tr>
	<td class="pattern">E::before

	</td>
	<td class="meaning">generated content before an E element

	</td>
</tr>
<tr>
	<td class="pattern">E::after

	</td>
	<td class="meaning">generated content after an E element

	</td>
</tr>
<tr>
	<td class="pattern">E.warning

	</td>
	<td class="meaning">an E element whose class is "warning" (the document
		language specifies how class is determined).

	</td>
</tr>
<tr>
	<td class="pattern">E#myid

	</td>
	<td class="meaning">an E element with ID equal to "myid".

	</td>
</tr>
<tr>
	<td class="pattern">E:not(s)

	</td>
	<td class="meaning">an E element that does not match simple selector s

	</td>
	</td>
</tr>
<tr>
	<td class="pattern">E F

	</td>
	<td class="meaning">an F element descendant of an E element

	</td>
</tr>
<tr>
	<td class="pattern">E &gt; F

	</td>
	<td class="meaning">an F element child of an E element

	</td>
</tr>
<tr>
	<td class="pattern">E + F

	</td>
	<td class="meaning">an F element immediately preceded by an E element

	</td>
</tr>
<tr>
	<td class="pattern">E ~ F

	</td>
	<td class="meaning">an F element preceded by an E element

	</td>
</tr>
</tbody>
</table>