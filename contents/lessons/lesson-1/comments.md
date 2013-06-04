---
title: Comments
author: Dan Hahn
date: 2013-06-05 18:00
template: article.jade
subject: TEST
---

* [Introductin](index.html)
* [Selectors](selectors.html)
* [Comments](#)

Comments are a way to give notes within the code that is not rendered by the broswer at thet time of load. Both HTML and CSS Have commetns.

## Usess

* add notes to yourself or other developers
* "turn off" code that you do not want to display but may need laters
* Do not display code that may be in development.

## HTML comments

An HTML comment will make anything within the HTML block that is wrapped with the comments not display.   HTML comments will only work with the HTML blcok.

### Parts of the HTML comments

* `<!--` - opening comments or the start of the code that will not display.
* `-->` - ending comment or the point where after code will display again.

**Note:** if you do not close the comement everything acter the comment will not display.

### Example
```html
<!-- Note to self update Header with new text when client sends it.-->
<h1>Place Holder Tedt</h1>

<!--
    Hiding code until finished working on it.
    <ul>
        <li>--Need Link</li>
        <li><a href="">Next Page</a<</li>
    </ul>
-->
```

 ## CSS Comment

 Like the HTML comment will make CSS not display.  A CSS comment will only work within a CSS block, internal or external.  CSS comments will not work within HTML blocks of code.

 ### Parts of the CSS Comments

 * `/*` - Start of the CSS Comment
 * `*/` - End of the CSS comment.

###Example
```html
/* CSS Comment */

h1.class {
    border-top: 1px solid black;
    /* border-bottom: 2px solid green; */
}

/*
h2 {
	color: orange;
}
*/
```