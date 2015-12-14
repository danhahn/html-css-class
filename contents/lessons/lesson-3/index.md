---
title: Lesson 3
author: Dan Hahn
date: 10/5/2015 18:00
template: article.jade
---

This week we will talk about the **CSS Box Model** and how to float elements.

<span class="more"></span>

# How to center elements

* [Center thing]()
* [Using Emmet](emmet.html)
* [Box Model](box-model.html)
* [Floats](floats.html)
* [Clear Fix](clear-fix.html)
* [Homework](homework.html)

[Download Notes  <i class="icon-download-alt icon-white"></i>](week3-notes.zip)
[Download Starter File  <i class="icon-download-alt icon-white"></i>](week3.zip)

It can be a little hard to center elements on a page using CSS.  The issue is that CSS do not have a *center* this property.  

While there is is `text-align: center;` this will only center the **text** within an element but not the element its self.  

Even if you do this.

    body {
        text-align: center;
    }

It will center all the text on the page but not the elements them selfs.

<p data-height="266" data-theme-id="16874" data-slug-hash="jbmPNN" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/jbmPNN/'>Center Text</a> by danhahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Using Margin to Center

Remember that **margin** is the amount of space from the border out to the next element.  If that is the case we can use set the space on the side of an element.  Keep in mind that we need to have a `width` set on the element.

### HTML

    <div class="wrapper">
        <section>
            Item to be centered.
        </section>
    </div>

When you have a fixed width wrapper the math is easy.  The wrapper is 300px and the section should be 100px.  That leaves 100px on the left and 100px right.

### CSS

    .wrapper {
        width: 600px;
    }

    section {
        width: 200px;
        margin: 0 200px;
    }

What happens when the wrapper width changes the math is all off.  To get around this we need a new value we can add to `margin` to allow for the flexibility to display same size on the left and right even if we don't know what that value is.

<p data-height="266" data-theme-id="16874" data-slug-hash="OymPda" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/OymPda/'>Simple Center</a> by danhahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Using auto value

CSS allows for a variable size to be set on some properties.  `auto` is used in place of fixed value and in the case of setting the margin on the left and right if they are both set to `auto` it will take the remaining space and divide it by two and set left and right margin to that value.  

This value is flexible so as the browser resizes the sizes are recalculated and updated.  Since they are the same the elements will be center on within the element.  What is cool about this is it will work for both the page level or at the child elements level.

### HTML

    <div class="wrapper">
        <section>
            Item to be centered.
        </section>
    </div>

### CSS

    .wrapper {
        width: 600px;
        margin: 0 auto;
    }

    section {
        width: 60%;
        margin: 0 auto;
    }

<p data-height="266" data-theme-id="16874" data-slug-hash="JYNoQJ" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/JYNoQJ/'>Complex Center</a> by danhahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Note:** This should not be used on the `body` tag.
