---
title: Lesson 2
author: Dan Hahn
date: 9/28/2015 18:00
template: article.jade
---

#Font Properties

##font-style

Sets the font to be italic.

	font-style: italic;

Property|Values
-|-
font-style:|normal, <span style="font-style:italic">italic</span>, <span style="font-style:oblique">oblique</span>

##font-variant

Sets the font to be small-caps.

	font-variant: small-caps;

Property|Values
-|-
font-variant:|normal, <span style="font-variant:small-caps">small-caps</span>

##font-weight

Set the font to be bold

	font-weight: bold;

Property|Values
-|-
font-weight:|normal, <span style="font-weight:bold">bold</span>

##font-size

Sets the size of the font.

	font-size: 12px;

Property|Values
-|-
font-size: *|length, percent

##font-family

Defines what font is displied

	font-family: "New Century Schoolbook", arial, times;

Property|Values
-|-
font-family: *|**family-name**, serif (Times), sans-serif (Helvetica), cursive (Zapf-Chancery), fantasy (Western), monospace (Courier)

**Note:** With CSS2 the font-fmaily the font must be intalled on the local computer viewing the page.

##font

	font: italic small-caps bold 15px arial, times;

Property|Values
-|-
font:* <br>required|style variant weight size */line-height  family *<br>example: font:bold 10px/12px verdana,"Lithos Regular",sans-serif;

**Note:** when using the short hand `font` both `font-size` and `font-size` are required