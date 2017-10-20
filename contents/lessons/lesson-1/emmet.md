---
title: Lesson 1
lesson: Emmet
author: Dan Hahn
date: 9/18/2017 18:00
template: article.jade

nav:
  Introduction: index.html
  Editors: editors.html
  Terminal and Git: git.html
  Emmet: emmet.html
  Selectors: selectors.html
  Comments: comments.html
  Homework: homework.html
---

Emmet is a plugin that allows your to write short hand to produce HTML tags.  

## Installation

The installation of emmet depends on the editor you are using, in class we will use Atom.

1. open Atom
2. Click on `Atom > preferences`
3. Select `install` tab on the left side
4. Search for `emmet` in the search box and click `Packages`.
5. Click the `install` button.
6. Open an `.html` file and enjoy Emmet.

## Uses

Emmet is a short hand for writing HTML.  Use the `tab` key to transform the emmet short hand to HTML code.

Lets say you want to create a headline.  In the past you would `<h1></h1>` and then fill the element with the text you wanted.  With emmet you would just need to write `h1` then hit the `tab` key.  Emmet will convert the emmet shorthand to the correct html element.  Emmet will also put the curser right where the text you need to add for quick editing.

```emmet
h1
```
becomes
```html
<h1></h1>
```
OR
```emmet
p
```
becomes
```html
<p></p>
```

## Adding a child

But let say you want to create more complex markup like a list.  Since a list need both the OL and LI you would need do `ol` then `tab` then `li` then `tab`.  Still faster than writing standard HTML but a little slow.   Emmet takes advantage of the CSS direct child selector to allow write both a parent and child at the same time.  

```emmet
ol>li
```
becomes
```html
<ol>
	<li></li>
</ol>
```
OR
```
section>article>h1>a
```
becomes
```html
<section>
	<article>
		<h1><a href=""></a></h1>
	</article>
</section>
```

## Adding a sibling

Like the direct child selector Emmet and use the sibling selector to create two elements that are siblings of each other.  
```
h1+p
```
becomes
```html
<h1></h1>
<p></p>
```
Adding a direct child selector
```
article>h2+p
```
becomes
```html
<article>
	<h2></h2>
	<p></p>
</article>
```

## Adding Multiple element

Sometimes you need to add more than one of an element like when creating a list.  You will need to have many `<li>`.  Emmet makes this easy by using the `*` multiplier.  If you need to create more than one of an element you can add `*` and the number that you need.  

```
ul>li*4
```  
becomes

```html
<ul>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

## HTML template

Make the HTML template is easy with emmet.  There is a build in shortcut.  Just type `!` and hit `tab`.  It will create the template.  Emmet will also select the word "Document" so you can update it your title.

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

</body>
</html>
```

## Adding a class or ID name

If you need to add a class or id name to an element you can do it by adding the "selector" to the element.

```
header.global-header>h1.main-title
```
becomes
```html
<header class="global-header">
  <h1 class="main-title"></h1>
</header>
```

## More Information

If you want more examples of what emmet can do [checkout out this site](http://docs.emmet.io/cheat-sheet/).
