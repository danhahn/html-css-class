---
title: Lesson 2
author: Dan Hahn
date: 9/28/2015 18:00
template: article.jade
---

This week we will talk about font, text, border, padding and margins.  We will also talk about colors.


<span class="more"></span>

# Font Properties

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

[Download Notes  <i class="icon-download-alt icon-white"></i>](week2-notes.zip)
[Download Starter File  <i class="icon-download-alt icon-white"></i>](week2.zip)


Property            | Values                                                                                                                 
--------------------|------------------------------------------------------------------------------------------------------------------------
font:* <br>required | style variant weight size */line-height  family *<br>example: font:bold 10px/12px verdana,"Lithos Regular",sans-serif;*
font-style:         | normal, italic                                                                                                         
font-variant:       | normal, small-caps                                                                                                     
font-weight:        | normal, bold                                                                                                           
font-size: *        | length, percent                                                                                                        
line-height:        | normal, **number**, **length**, **percent**                                                                            
font-family: *      | **family-name**, serif (Times), sans-serif (Helvetica), cursive (Zapf-Chancery), fantasy (Western), monospace (Courier)

When styling fonts with CSS they are broken into two types.  **Font** properties and **Text** properties. The two are very similar, the **Font** deals more with the character set and the **Text** is more about changing the way the font looks.

---

`font` - is a shorthand way to express any font propertiesx on one line.  When using the shorthand the order matters.  There are two required properties, font-size and font-family.

    font: italic small-caps bold 12px arial, verdana;

If you do not define a property within the shorthand it will be set to the default state often normal. It could be the case that in the case of `h1` where the default is for the text to be bold that when using the shorthand and not setting the `font-weight` it will be sent to `normal` and the `h1` will no longer be bold even though we did not set it.

---

`font-style` will define if something will be italic.  If something is italic by default like the `em` you can also set the `font-style` to be `normal` and it will remove the italics.

    font-style: italic;

---

`font-variant` will set the text to be `small-caps` where the “lowercase” letters will be displayed as small uppercase letters.

    font-variant: small-caps;

---

`font-weight`will define text that is bold.  If something is bold by default like `h2` you can remove the bold by setting the value to `normal`.

    font-weight: bold;

---

`font-size` - set the size of the font.

While there are a number of options to define what the size can be we use only three options.  We will use **percent**, **em**, or **pixel**.

Both percent and em calculate the size of the font off of another font size. For example if a font size set to `10px` and wanted to have the text be **twice as large** you could set the size to be `2em` or `200%`,  This will calculate size to be `20px` but if the font size where to change to `12px` it would then calculate the size to `24px`.  The advantage of this is you only need to **change the one font** and all the other fonts will change in relation to that size.

Since we **can’t** measure what an inch is on a computer screen we can’t use it. That also means that we **can’t** use point because `1 points` is defined as `1/72 inch`.  The fact that we do not know what an inch is it we can not calculate what a point is.  Instead you should always define **font sizes in pixels, percent or em**.

    font-size: 12px;
    font-size: 2em;
    font-size: 200%;

### CSS Units

[View CSS Units](sizes.html)

---

`font-family` - defines what font is displayed when the page is rendered.  The `font-family` can only load a font that is installed on the **local computer** viewing the page.   This means we are limited in the fonts that installed on both the Mac and Windows computers by default.

    font-family: helvetica, arial, “time new roman”

**Note:** any font name that has a *space* in needs to be quoted(“).

If you want to use a font that may not be fully supported but have a fall back you can put them in a comma separated list.  If the first item in the list is not available it will try the next font in the list.  If no font is available it will display the browser default.

Type             | Name
-----------------|-----------------------------------------------------------------
Serif Fonts      | Georgia, serif<br>"Palatino Linotype", "Book Antiqua", Palatino, serif<br>"Times New Roman", Times, serif
Sans-Serif Fonts | Arial, Helvetica, sans-serif	<br>"Arial Black", Gadget, sans-serif<br>"Comic Sans MS", cursive, sans-serif<br>Impact, Charcoal, sans-serif<br>"Lucida Sans Unicode", "Lucida Grande", sans-serif<br>Tahoma, Geneva, sans-serif<br>"Trebuchet MS", Helvetica, sans-serif<br>Verdana, Geneva, sans-serif
Monospace Fonts  | "Courier New", Courier, monospace<br>"Lucida Console", Monaco, monospace                                                                                                                                                                                                                             


<style>
table tr td:nth-child(1){width:20%}
</style>
