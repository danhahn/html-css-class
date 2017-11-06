---
title: Lesson 4
lesson: Float Layout
author: Dan Hahn
date: 10/16/2017 18:00
template: article.jade

nav:
  Layout Types: index.html
  Table Layout: table.html
  Position: position.html
  Float Layout: float.html
  Homework: homework.html
---

CSS layouts have changed the way that we are able to design websites. At one time all layouts were done with the `<table>`. This was both slow and hard to manage.

<p data-height="588" data-theme-id="light" data-slug-hash="owGKdY" data-default-tab="result" data-user="danhahn" data-embed-version="2" data-pen-title="Float Layout" class="codepen">See the Pen <a href="https://codepen.io/danhahn/pen/owGKdY/">Float Layout</a> by Dan Hahn (<a href="https://codepen.io/danhahn">@danhahn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Structure

In this example we are looking the the most basic layout. Assume that this page is a standard content page that has a `header`, `navigation`, `content` area and `footer`.
```html
<header></header>
<nav></nav>
<article></article>
<footer></footer>
```
The issue now is that we have no way to limit the width of the elements. One option would be with set the width on each element there are some issue that come along with that. The box model kicks in when a width is set.

---

## Add Wrapper

The other option is to wrap all the element with an other element like a `<div>`. This will allow you to define a `width` on it.
```html
<main>
  <header></header>
  <section>
    <nav></nav>
    <article></article>  
  </section>
  <footer></footer>
</main>
```
---

## Adding Classes

While the structure is correct at this point we want to add a class to help identify this `<header>` from any other `<header>` that may be on the page.

```html
<main class="container">
  <header class="global-header"></header>
  <section class="row">
    <nav class="global-nav"></nav>
    <article class="content-area"></article>
  </section>
  <footer class="gloabl-footer"></footer>
</main>
```
---

## Styles

Now that we have the structure in place we need to write the `css` to support the markup.

### Fixed width

In this example we are setting up a page that is a fixed width of `800px`.
```css
.container {
  width: 800px;
}

.gloabl-nav, .content-area {
  float: left;
}

.gloabl-nav {
  width: 200px;
}

.content-area {
  width: 600px;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}
```
This will create a fixed two column layout. The width can be adjusted any value just note that the `.global-nav` and `.content-area` must add up to the width of the `.container`.
