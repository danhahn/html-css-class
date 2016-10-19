---
title: Lesson 2
author: Dan Hahn
date: 6/20/2016 18:00
template: article.jade
---

# CSS Colors

* [Font Properites]()
* [Text Properties](text.html)
* [Include File](include.html)
* [Define a color](color.html)
* [CSS Units](sizes.html)
* [Borders](borders.html)
* [Padding](padding.html)
* [Margin](margin.html)
* [Pseudo](pseudo.html)
* [overflow](overflow.html)
* [Homework](homework.html)

## Hexadecimal Colors

Hexadecimal color values are supported in all major browsers.

A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color. All values must be between 00 and FF.

For example, the #0000ff value is rendered as blue, because the blue component is set to its highest value (ff) and the others are set to 00.

### Example

Define different HEX colors:

    #p1 {background-color: #ff0000;}   
    #p2 {background-color: #00ff00;}   
    #p3 {background-color: #0000ff;}   


More about [Hex Color here](http://www.smashingmagazine.com/2012/10/the-code-side-of-color/).


## RGB Colors

RGB color values are supported in all major browsers.

An RGB color value is specified with: rgb(red, green, blue). Each parameter (red, green, and blue) defines the intensity of the color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%).

For example, the rgb(0,0,255) value is rendered as blue, because the blue parameter is set to its highest value (255) and the others are set to 0.

Also, the following values define equal color: rgb(0,0,255) and rgb(0%,0%,100%).

### Example

Define different RGB colors:

    #p1 {background-color: rgb(255, 0, 0);}
    #p2 {background-color: rgb(0, 255, 0);}
    #p3 {background-color: rgb(0, 0, 255);}

## RGBA Colors

RGBA color values are supported in IE9+, Firefox 3+, Chrome, Safari, and in Opera 10+.

RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity of the object.

An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

### Example

Define different RGB colors with opacity:

    #p1 {background-color: rgba(255, 0, 0, 0.3);}   
    #p2 {background-color: rgba(0, 255, 0, 0.3);}
    #p3 {background-color: rgba(0, 0, 255, 0.3);}

## HSL Colors

HSL color values are supported in IE9+, Firefox, Chrome, Safari, and in Opera 10+.

HSL stands for hue, saturation, and lightness - and represents a cylindrical-coordinate representation of colors.

An HSL color value is specified with: hsl(hue, saturation, lightness).

Hue is a degree on the color wheel (from 0 to 360) - 0 (or 360) is red, 120 is green, 240 is blue. Saturation is a percentage value; 0% means a shade of gray and 100% is the full color. Lightness is also a percentage; 0% is black, 100% is white.

### Example

Define different HSL colors:

    #p1 {background-color: hsl(120, 100%, 50%);}
    #p2 {background-color: hsl(120, 100%, 75%);}
    #p3 {background-color: hsl(120, 100%, 25%);}
    #p4 {background-color: hsl(120, 60%, 70%);}

## HSLA Colors

HSLA color values are supported in IE9+, Firefox 3+, Chrome, Safari, and in Opera 10+.

HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity of the object.

An HSLA color value is specified with: hsla(hue, saturation, lightness, alpha), where the alpha parameter defines the opacity. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

<div class="w3-example">

### Example

Define different HSL colors with opacity:

    #p1 {background-color: hsla(120, 100%, 50%, 0.3);}
    #p2 {background-color: hsla(120, 100%, 75%, 0.3);}
    #p3 {background-color: hsla(120, 100%, 25%, 0.3);}
    #p4 {background-color: hsla(120, 60%, 70%, 0.3);}

## Predefined/Cross-browser Color Names

140 color names are predefined in the HTML and CSS color specification. Look at our table of [predefined color names](/notes/colors/index.html).
140 color names are predefined in the HTML and CSS color specification. Look at our table of [predefined color names](/notes/colors/index.html).

**Note:** This file was copied form http://www.w3schools.com/cssref/css_colors_legal.asp
