---
title: CSS2 Reference
author: Dan Hahn
date: 2013-06-08 18:00
template: single.jade
---

##  Selectors

Pattern|Matches
-|-
*|any element
E|any E element
E F|any E element that is a descendant of an F element
F ** E|any E element that is a child of an F element
F + E|any E element that immediately follows an F element
x, y|grouping: any element that matches x or y

## Font
Property|Values
-|-
font:* <br>required|style variant weight size */line-height  family *<br>example: font:bold 10px/12px verdana,"Lithos Regular",sans-serif;
font-style:|normal, italic, oblique
font-variant:|normal, small-caps
font-weight:|normal, bold
font-size: *|length, percent
line-height:|normal, **number**, **length**, **percent**
font-family: *|**family-name**, serif (Times), sans-serif (Helvetica), cursive (Zapf-Chancery), fantasy (Western), monospace (Courier)

## Text
Property|Possible Values
-|-
color:|color
direction:|ltr, rtl
letter-spacing:|normal, length
line-height:|normal, number, length, percent
text-align:|left, right, center, justify
text-decoration:|none, underline,  overline, line-through, blink
text-indent:|length, percent
text-transform:|none, capitalize, uppercase, lowercase
white-space:|normal, pre, nowrap
word-spacing:|normal, length

## Background
Property|Values
-|-
background:|**color**   **image**   **repeat**   **attachment**   **position**<br>example: background:transparent url(dot.gif) left top;
background-color:|transparent, **color**
background-image:|none, **url(image.gif)**
background-repeat:|repeat, repeat-x, repeat-y, no-repeat
background-attachment:|scroll, fixed
background-position:|[0% 0%], [**length** **length**], [top, center, bottom] + [left, center, right]

## Border
Property|Values
-|-
border:|**border-width**  **border-style**   **border-color**<br>example: border:1px solid #000066;
border-width:|Top   Right   Bottom   Left<br>thin, medium, thick, **length**, **percent**
border-style:|Top   Right   Bottom   Left<br>none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
border-color:|Top   Right   Bottom   Left<br>**color**
border-top:|**border-top-width**   **border-top-style**   **border-top-color**
border-top-width:|border-width
border-top-style: |border-style
border-top-color:  |border-color
border-right:|**border-right-width**   **border-right-style**   **border-right-color**
border-right-width:|border-width
border-right-style:|border-style
border-right-color:|border-color
border-bottom:|**border-bottom-width**   **border-bottom-style**   **border-bottom-color**
border-bottom-width:|border-width
border-bottom-style:| border-style
border-bottom-color: |border-color
border-left:|**border-left-width**   **border-left-style**   **border-left-color**
border-left-width:|border-width
border-left-style: |border-style
border-left-color: |border-color

## List and Marker
Property|Values
-|-
list-style:|**list-style-type**   **list-style-position**   **list-style-image**
list-style-type:|disc, none, circle, square, decimal,  decimal-leading-zero, lower-roman, upper-roman, lower-alpha, upper-alpha, lower-greek, lower-latin, upper-latin, hebrew, armenian, georgian ...et al.
list-style-position:|outside, inside
list-style-image:|none, **url**

## Margin
Property|Values
-|-
margin:|Top   Right   Bottom   Left
margin-top:|auto, **length**, **percent**
margin-right:|auto, **length**, **percent**
margin-bottom:|auto, **length**, **percent**
margin-left:|auto, **length**, **percent**

## Padding
Property|Values
-|-
padding:|Top   Right   Bottom   Left
padding-top:|**length**, **percent**
padding-right:|**length**, **percent**
padding-bottom:|**length**, **percent**
padding-left:|**length**, **percent**

## Positioning
Property|Values
-|-
position:|static, relative, absolute, fixed
top:|auto, **length**, **percent**
left:|auto, **length**, **percent**
bottom:|auto, **length**, **percent**
right:|auto, **length**, **percent**
float:|none, left, right
clear:|none, left, right, both
display:|inline, block, none list-item, run-in, compact, marker, table, inline-table,table-row-group, table-header-group,table-footer-group, table-row, table-column-group, table-column,table-cell, table-caption
visibility:|visible, hidden, collapse, *inherit
overflow:|visible, hidden, scroll, auto
vertical-align:|baseline, sub, super, top, text-top, middle, bottom, text-bottom, **length** **percent**
z-index:|auto, number


## Dimension
Property|Values
-|-
width:|auto, **length**, **percent**
height:|auto, **length**, **percent**
line-height:|normal, **number**, **length**,**percent**
max-height:|none, **length**, **percent**
max-width:|none, **length**, **percent**
min-height:|**length**, **percent**
min-width:|**length**, **percent**

## Classification
Property|Values
-|-
cursor:|auto, url, crosshair, default, pointer, move, e-resize, ne-resize, nw-resize, n-resize, se-resize, sw-resize, s-resize, w-resize, text,wait, help

## Table
Property|Values
-|-
border-collapse:|collapse,separate

## Pseudo-Classes
Name|Applies to|Example
-|-|-
a:link|anchor|A:link, A.classname:link
a:active|anchor|A:active, A.classname:active
a:visited|anchor|A:visited, A.classname:visited
e:hover|all|P:hover, P.classname:hover

## Pseudo Elements
Pseudo-elements|Applies to
-|-|-
E:before|block
E:after|block
E:first-letter|block
E:first-line|block


## CSS Units
Unit|Description
-|-
%|a percentage of something
in|inch
cm|centimeter
mm|millimeter
em|one em is equal to the font size of the current element
ex|one ex is the x-height of a font, the x-height is usually about half the font-size
pt|point (1 pt is the same as 1/72 inch)
pc|pica (1 pc is the same as 12 points)
px|pixels (a dot on the computer screen)

## Colors
Unit|Description
-|-
color_name|A color name (red)
rgb(x,x,x)|A rgb value (rgb(255,0,0))
rgb(y%, y%, y%)|A rgb percentage value (rgb(100%,0%,0%))
`` #rrggbb|A hex number (`` #ff0000).

<style>
table tr td:nth-child(1){width:20%}
</style>

