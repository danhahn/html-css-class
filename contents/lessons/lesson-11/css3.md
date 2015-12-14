---
title: Lesson 6
author: Dan Hahn
date: 12/7/2015 18:00
template: article.jade
---

# CSS3 Properties

* [Selectors]()
* [CSS3](css3.html)
* [Sprites](sprites.html)

## border-radius:

border-radius will add a rounded corner to any element.

### Example

    border-radius: 10px;

* 1 value - all corners the same.
* 2 values - top/right and bottom/left the same and top/left and bottom/right the same
* 4 values - define each corner starting with the top/right.

## box-shadow:

box-shadow add a drop shadow on an element.

### Example

Standard

    box-shadow: 1px 2px 10px black;

### Inside shadow

    box-shadow: 1px 2px 10px black inset;

### Multiple shadows

    box-shadow: 1px 1px 5px black, -1px -1px 5px red;

Notice the comma and negative numbers.

#### Values

* 1st value - offset left/right
* 2nd value - offset top/bottom
* 3rd value - shadow spread
* 4th value - color.  Note: any color can be defined include but not limited to rgba().
* 5th value - inset - set the drop shadow inside the box.

Browser support: FF3.5+, Chrome 8+, Safari 5+, IE9+

## text-shadow:

text-shadow add a drop shadow to text elements.

### Example

### Standard

    text-shadow: 1px 2px 10px blue;

### Multiple shadows

    text-shadow: 1px 1px 10px red, -2px -2px 3px green;

Notice the comma and negative numbers.

#### Values

* 1st value - offset left/right
* 2nd value - offset top/bottom
* 3rd value - shadow spread
* 4th value - color.

*Note:* any color can be defined include but not limited to rgba().

*Note:* text-shadow does not support inset like box-shadow.

Browser support: FF3.5+, Chrome 8+, Safari 5+, IE9+

## opacity:

Opacity defines opacity of an element.  Opacity is defined for all content within the element

### Example

    opacity: .5;

*Note:* the value range is 0 to 1.  0 is invisible, 1 is visible.  .5 is 50% opacity.

Browser support: FF2.0+, Chrome 2+, Safari 3+, IE7+


## Rotate
CSS3 can rotate elements.

Saf3.1+, Chrome

    -webkit-transform: rotate(7.5deg);

FF3.5+

    -moz-transform: rotate(7.5deg);

IE9

    -ms-transform: rotate(7.5deg);


Final Spec

    transform: rotate(7.5deg);

## Background Size
Background size will stretch the background to fit the container

-webkit-background-size: 100% 100%; /* Saf3-4 */
-moz-background-size: 100% 100%; /* FF3.6 */
background-size: 100% 100%; /* Opera, IE9, Saf5, Chrome, FF4 */

##@font-face
The basics are pretty simple to implement the @font-face rule, but it is possible to add lots of options to extend its features.

Initially you define the rule, "font-family" is what you want to call the font, "src" is where it can be found, include a "font-weight" (not needed for normal, but required by everything else, bold, thin etc).

    @font-face {
       font-family: DeliciousRoman;
       src: url(fonts/delicious-Roman.otf);
       font-weight:400;
    }


Then just use it like any other font in any other style rule.

    p {
       font-family: DeliciousRoman, Helvetica, Arial, sans-serif;
    }

That's pretty much it for basic implementation.


Google has many free open source that you can use.  http://www.google.com/webfonts
Columns
CSS can dynamically create columns with the content.  There are two parts define, how many columns and the space between columns.

-webkit-column-count: 2;  -webkit-column-gap: 15px; /* Saf3, Chrome
-moz-column-count: 2;     -moz-column-gap: 15px; /* FF3.5+
column-count: 2;          column-gap: 15px; /* Opera 11+
Transitions
-webkit-transition: all 0.3s ease-out;  /* Saf3.2+, Chrome */
-moz-transition: all 0.3s ease-out;  /* FF4+ */
-ms-transition: all 0.3s ease-out;  /* IE10? */
transition: all 0.3s ease-out;


1st value - transition-property
2nd value - transition-duration
3rd value - transition-timing-function
4th value - transition-delay
    Transition timing functions
Timing functions determine how intermediate values of the transition are calculated. The timing function can be specified by providing the graph of the corresponding function, as defined by four points defining a cubic bezier:

This CSS transition function manipulator is a convenient tool to visually generate CSS transition timing functions.


Instead of specifying a bezier directly, there are pre-defined timing values:
1. ease, equivalent to cubic-bezier(0.25, 0.1, 0.25, 1.0)
2. linear, equivalent to cubic-bezier(0.0, 0.0, 1.0, 1.0)
3. ease-in, equivalent to cubic-bezier(0.42, 0, 1.0, 1.0)
4. ease-out, equivalent to cubic-bezier(0, 0, 0.58, 1.0)
5. ease-in-out, equivalent to cubic-bezier(0.42, 0, 0.58, 1.0)
Multiple Backgrounds
CSS3 allows web designers to specify multiple background images for box elements, using nothing more than a simple comma-separated list.
How it Works
Multiple background images can be specified using either the individual background properties or the background shorthand property.


The Syntax:
background: [ <bg-layer> , ]* <final-bg-layer>


<bg-layer> = <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> ||<attachment> || <box>{1,2}


<final-bg-layer> = <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box>{1,2} || <background-color>


Note: background-color is only permitted in the final background layer.
Example:
background: url(sheep.png) center bottom no-repeat, url(betweengrassandsky.png) left top no-repeat;
Box Center
Box center is new property that lets you center content within a box vertically.  To this point there was no easy way to do this.  At this point the only browsers that support this are Firefox and Chrome.


/* Firefox */
display:-moz-box;
-moz-box-orient:horizontal;
-moz-box-pack:center;
-moz-box-align:center;


/* Safari and Chrome */
display:-webkit-box;
-webkit-box-orient:horizontal;
-webkit-box-pack:center;
-webkit-box-align:center;

## Box Sizing
The box-sizing property allows you to define certain elements to fit an area in a certain way.

For example, if you’d like two bordered boxes side by side, it can be achieved through setting box-sizing to "border-box". This forces the browser to render the box with the specified width and height, and place the border and padding inside the box.

box-sizing:border-box;

    -moz-box-sizing:border-box; /* Firefox */
    box-sizing:border-box;

Syntax

    box-sizing: content-box|border-box|inherit:

Value | Description
---|---
content-box | This is the behavior of width and height as specified by CSS2.1. The specified width and height (and min/max properties) apply to the width and height respectively of the content box of the element. The padding and border of the element are laid out and drawn outside the specified width and height
border-box | The specified width and height (and min/max properties) on this element determine the border box of the element. That is, any padding or border specified on the element is laid out and drawn inside this specified width and height. The content width and height are calculated by subtracting the border and padding widths of the respective sides from the specified 'width' and 'height' properties
inherit | Specifies that the value of the box-sizing property should be inherited from the parent element
