---
title: Lesson 9
lesson: CSS Grid
author: Dan Hahn
date: 11/20/2017 18:00
template: article.jade
localcss: css/index.css

downloads:
  Download Stater File:
    file: week9.zip
    btn: primary

nav:
  CSS Grid: index.html
  Grid Layout: grid-layout.html
---

This week we will talk about new CSS Grid Layout.

<span class="more"></span>

<a href="https://css-tricks.com/snippets/css/complete-guide-grid/" class="btn">CSS Grid Guild</a>
<a href="https://gridbyexample.com/" class="btn">Grids by example</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout" class="btn">MDN - grid</a>

## What is grid layout

# Grid Basics

## Simple Grid

Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.


* `grid-template-columns`
* `grid-template-rows`

Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.

```css
grid-template-columns: 100px 100px 100px;
grid-template-rows: 100px 100px 100px;
```

<div class="grid">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>

## grid-column-gap, grid-row-gap

* `grid-column-gap`
* `grid-row-gap`

Specifies the size of the grid lines. You can think of it like setting the width of the gutters between the columns/rows.

### Values:

* `<line-size>` - a length value

```css
grid-column-gap: 1em;
grid-row-gap: 2em;
```

<div class="grid grid-gap-x">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>

# grid-gap

A shorthand for grid-row-gap and grid-column-gap

Values:

* `<grid-row-gap>` `<grid-column-gap>` - length values

```css
grid-gap: 1em;
```

<div class="grid grid-gap">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>

## fr - fractal remains

The `fr` unit is the like `flex-grow` in flexbox.  It takes the remainder fo the space and devides it cross all tracks that has a unit.  

```css
grid-template-columns: 100px 1fr 100px;
```

<div class="grid grid-gap grid-fr">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>

## repeat

`repeat()` allows your to defind a tack that repeat in one simple function.  It takes two parts first the number of repeats.  Second the width.

```css
grid-template-columns: repeat(3, 1fr);
```

<div class="grid grid-gap grid-repeat">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>

## minmax()

The `minmax()` CSS function defines a size range greater than or equal to min and less than or equal to max. It is used with CSS Grids.

```css
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)
```

```css
grid-template-columns: minmax(200px, 300px) minmax(100px, 1fr) minmax(200px, 300px);
```

<div class="grid grid-gap grid-minmax">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>

## justify-content

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the row axis (as opposed to align-content which aligns the grid along the column axis).

Values:

* start - aligns the grid to the left end of the grid container
* end - aligns the grid to the right end of the grid container
* center - aligns the grid in the center of the grid container
* stretch - resizes the grid items to allow the grid to fill the full width of the grid container
* space-around - places an even amount of space between each grid item, with half-sized spaces on the far ends
* space-between - places an even amount of space between each grid item, with no space at the far ends
* space-evenly - places an even amount of space between each grid item, including the far ends

<div class="grid grid-gap grid-justify">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>
