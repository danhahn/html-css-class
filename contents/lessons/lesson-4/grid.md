---
title: Lesson 4
lesson: Grid System
author: Dan Hahn
date: 10/16/2017 18:00
template: article.jade
nav:
  Basic Layouts: index.html
  Setting up preprocessor: less.html
  Using Less: using-less.html
  Flex Box: flex.html
  Position: position.html
  Homework: homework.html
---

The idea behind a grid system is, well, a grid. With a grid system and there are many pre built ones out there is you are able to build a flexible layout fast.

Since we are using a grid we need to understand what the grid is. In most cases a grid is based on 12 columns that are divided evenly across the width of the page. Most grids are based on a width that is 960, since that is the standard width of a page today.

Grids are broken in to 12 columns and often have a gutter between them. If we assume that the gutter is 10px and our page is `960px` this is what it would look like.

    (960 - (12*10)) / 12 = 70

This will create an element element that `70px` wide with a margin on on side that is `10px`.

### grid1

    <div class="grid1"></div>

<div style="width:70px;border-right:10px solid red; background-color:blue; height: 100px"></div>

That would be a `grid1` or whatever you want to name it.

### grid2 etc...

To build the next 11 grids in the system you need to take the grid and multiply it by the number of columns you. Then add the number of margins for that column.

    <div class="grid2"></div>

<div style="width:150px;border-right:10px solid red; background-color:blue; height: 100px"></div>

### Using your grid

Once you have the grid build out all 12 grid elements you need to apply them.

Each row needs to always add up to 12 columns but it doesn't matter how you get to that number. It could be 12 `grid1` or 1 `grid12`

    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>
    <div class="grid1"></div>

OR

    <div class="grid4"></div>
    <div class="grid4"></div>
    <div class="grid4"></div>

OR

    <div class="grid12"></div>

All the rows have a column count that is 12.

### Adding the row.

Each row must be wrapped with a `<div>` that has a clear fix on it. Since all the elements are floated to the left the parent element will not have a height. The easy fix is to add a [clear-fix](../lesson-3/clear-fix.html).

    <div class"row clear-fix">
        <div class="grid12"></div>
    </div>

A better way would be to just add the clear fix to the `.row` this way you do not need to add more than one class.

    <style>
        .row:after {
             content: "";
             clear: both;
             display: block;
        }
    </style>

**Note:** The grid system is not new and you it is ok to use a pre build system like [grid960](http://www.960.gs) or any other. This will ensure that you grid works and has been fully tested..
