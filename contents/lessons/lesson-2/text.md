---
title: Lesson 2
author: Dan Hahn
date: 6/20/2016 18:00
template: article.jade
---

# Text Properties

* [Font Properites]()
* [Text Properties](text.html)
* [Include Files](include.html)
* [CSS Units](sizes.html)
* [Borders](borders.html)
* [Padding](padding.html)
* [Margin](margin.html)
* [Pseudo](pseudo.html)
* [overflow](overflow.html)
* [Homework](homework.html)

Text Properties like font properties alter the way fonts display but have more to do with spacing or alignment than the way the font itself displays.

## Text Properties

Property         | Possible Values
-----------------|-----------------------------------------
color:           | color
letter-spacing:  | normal, length
line-height:     | normal, length, percent
text-align:      | left, right, center, justify
text-decoration: | none, underline,  overline, line-through
text-indent:     | length, percent
text-transform:  | none, capitalize, uppercase, lowercase
white-space:     | normal, pre, nowrap
word-spacing:    | normal, length
text-shaow:      | offset, offset, spread, color

---

`color` - defines the color of any element that can take a color like text, bullets or borders.

### Colors

Unit            | Description
----------------|-----------------------------------------
color_name      | A color name (red)
rgb(x,x,x)      | A rgb value (rgb(255,0,0))
rgb(y%, y%, y%) | A rgb percentage value (rgb(100%,0%,0%))
#rrggbb         | A hex number ( #c0c0c0).

---

`letter-spacing` - this is the space between letters in a word.  The default value is `0`.  To move the letters apart you would add value of `1px` or greater.  If you want to bring the letters closer together you can add negative number `-1px`

    letter-spacing: 1px;
    letter-spacing: -1px;

---

`line-height` - defines the space from the top of one line to the top of the next line within the same element.   By default the line height is 1.2 so if the text is 10px the line height would be 12px.

    line-height: 1.5em

---

`text-decoration` - defines whether or not a text element has an underline.  It can also remove an underlying form a link by setting the value to `none`.  

    text-decoration: underline;
    text-decoration: none;

---

`text-align` - defines how the text within an element displays. By default text is aligned to the left.  

    text-align: right;
    text-align: center;
    text-align: justify;

---

`text-indent` - within a paragraph you are able to indent just the first line.  Values can be both positive and negative.

    text-indent: 10px;

---

`text-transform` - defines whether the text should be uppercase, lowercase or the first letter of each word should be capital.  

    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: capitalize;

---

`white-space` - when the value is `nowrap` it will prevent that element from wrapping.  This is useful when you have a two word branding that needs to be treated as one work.  

    white-space: nowrap;

---

`word-spacing` - like `letter-spacing` but adds space between the word.  The value can be both positive or negative.  

    word-spacing: 10px;

---

`text-shadow` - allows you to define a shadow on text.  There are four parts to the shadow.

1. offset left/right
2. offset top/bottom
3. spread of the shadow
4. color of shadow


    text-shadow: 1px 5px 10px blue;

**Note:** you can apply more than one shadow to an element just sperated each shadow with a comma.

<style>
table tr td:nth-child(1){width:40%}
td .label {margin-right: 4px;cursor: pointer;}
</style>
