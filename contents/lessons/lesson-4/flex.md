---
title: Lesson 4
author: Dan Hahn
date: 10/12/2015 18:00
template: article.jade
---
# Flex Box

* [Basic Layouts]()
* [Flexible Width](flexable.html)
* [Variable Width](varable.html)
* [Flex Box](flex.html)
* [Position](position.html)
* [Homework](homework.html)



The **Flexbox Layout** (Flexible Box) module (currently a W3C Candidate Recommendation) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

**Note:**: Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.

##Properties for the Parent (flex container)

###display

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

    .container {
      display: flex; /* or inline-flex */
    }

**Note:** that CSS columns have no effect on a flex container.

<p data-height="266" data-theme-id="16874" data-slug-hash="VvzQwP" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/VvzQwP/'>Flex Intro</a> by Dan Hahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###flex-direction

This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

    .container {
      flex-direction: row | row-reverse | column | column-reverse;
    }

* `row (default)`: left to right in `ltr;` right to left in `rtl`
* `row-reverse`: right to left in `ltr;` left to right in `rtl`
* `column`: same as row but top to bottom
* `column-reverse`: same as row-reverse but bottom to top

<p data-height="266" data-theme-id="16874" data-slug-hash="rOzJNX" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/rOzJNX/'>Flex Intro</a> by Dan Hahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### flex-wrap

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.

    .container{
      flex-wrap: nowrap | wrap | wrap-reverse;
    }

* `nowrap` (default): single-line / left to right in ltr; right to left in rtl
* `wrap`: multi-line / left to right in ltr; right to left in rtl
* `wrap-reverse`: multi-line / right to left in ltr; left to right in rtl

<p data-height="266" data-theme-id="16874" data-slug-hash="YyxePZ" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/YyxePZ/'>Flex Intro</a> by Dan Hahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###flex-flow (Applies to: parent flex container element)

This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. Default is row nowrap.

    flex-flow: <‘flex-direction’> || <‘flex-wrap’>

###justify-content

This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

    .container {
      justify-content: flex-start | flex-end | center | space-between | space-around;
    }

* `flex-start` (default): items are packed toward the start line
* `flex-end`: items are packed toward to end line
* `center`: items are centered along the line
* `space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line
* `space-around`: items are evenly distributed in the line with equal space around them.

**Note:** that visually the spaces aren't equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has it's own spacing that applies.

<p data-height="266" data-theme-id="16874" data-slug-hash="vNJdOZ" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/vNJdOZ/'>Flex Intro</a> by Dan Hahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###align-items

This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

    .container {
        align-items: flex-start | flex-end | center | baseline | stretch;
    }

* `flex-start`: cross-start margin edge of the items is placed on the cross-start line
* `flex-end`: cross-end margin edge of the items is placed on the cross-end line
* `center`: items are centered in the cross-axis
* `baseline`: items are aligned such as their baselines align
* `stretch` (default): stretch to fill the container (still respect min-width/max-width)

<p data-height="266" data-theme-id="16874" data-slug-hash="MavQwd" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/MavQwd/'>Flex Intro</a> by Dan Hahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

##Properties for the Children (flex items)

###order

By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

    .item {
      order: <integer>;
    }

###flex-grow

This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have flex-grow set to 1, every child will set to an equal size inside the container. If you were to give one of the children a value of 2, that child would take up twice as much space as the others.

    .item {
      flex-grow: <number>; /* default 0 */
    }

**Note:** Negative numbers are invalid.

<p data-height="266" data-theme-id="16874" data-slug-hash="gaxvge" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/gaxvge/'>Flex Intro</a> by Dan Hahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###flex-shrink

This defines the ability for a flex item to shrink if necessary.

    .item {
      flex-shrink: <number>; /* default 1 */
    }

**Note:** Negative numbers are invalid.

###flex-basis
This defines the default size of an element before the remaining space is distributed.

    .item {
      flex-basis: <length> | auto; /* default auto */
    }

<p data-height="266" data-theme-id="16874" data-slug-hash="NGvydE" data-default-tab="result" data-user="danhahn" class='codepen'>See the Pen <a href='http://codepen.io/danhahn/pen/NGvydE/'>Flex Intro</a> by Dan Hahn (<a href='http://codepen.io/danhahn'>@danhahn</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###flex

This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.

    .item {
      flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }

###align-self

This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

Please see the align-items explanation to understand the available values.

    .item {
      align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }

**Note:** that float, clear and vertical-align have no effect on a flex item.
