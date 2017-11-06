---
title: Lesson 4
lesson: Table Layout
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

Long before CSS became mainstream developers have been looking for ways to enhance page layouts.  One of the earliest was to do this was to build a `<table>`.  Tables have a natural way to build rows and columns.  If you could go back and look at webpages from the late 1990's and early 2000's they would all have page layouts that are built by tables.

<p data-height="600" data-theme-id="light" data-slug-hash="rwGXGX" data-default-tab="result" data-user="danhahn" data-embed-version="2" data-pen-title="Table Layout" class="codepen">See the Pen <a href="https://codepen.io/danhahn/pen/rwGXGX/">Table Layout</a> by Dan Hahn (<a href="https://codepen.io/danhahn">@danhahn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Drawbacks to table layouts

1. Lots of markup
2. Hard to style
3. Not responsive
4. Slow to load

Here is wha the HTML and CSS would look like in this example. 

## HTML

```html
<table>
  <tbody>
    <tr>
      <td colspan="3" class="header">
        <h1>Page Title</h1>
      </td>
    </tr>
    <tr>
      <td class="nav">
        <ul>
          <li><a href="">Nav Item 1</a></li>
          <li><a href="">Nav Item 2</a></li>
          <li><a href="">Nav Item 3</a></li>
          <li><a href="">Nav Item 4</a></li>
        </ul>
      </td>
      <td class="main">
        <h2>Lorem ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat amet neque, modi sed doloribus dolor impedit ex, cumque optio deserunt!</p>
        <p>Labore alias reiciendis dolorum expedita illum repellat praesentium neque voluptatibus nesciunt, quos, hic repudiandae suscipit. Rerum aliquid alias quae corporis!</p>
        <p>Facilis, neque! Rem minima voluptatibus ab veniam, debitis labore quo sint pariatur delectus, possimus iste dolore, enim molestiae tempore a!</p>
      </td>
      <td class="sidebar">
        <h3>Lorem ipsum.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae rerum, minima reprehenderit pariatur omnis aliquid. Laboriosam corporis ducimus aperiam laborum fuga aliquam voluptate excepturi, facere minus hic, officiis ad?</p>
      </td>
    </tr>
    <tr>
      <td colspan="3" class="footer">
        &copy; 1999 
      </td>
    </tr>
  </tbody>
</table>
```

## CSS

```css
body {
  font-family: arial;
  background-color: lightgray;
}

h1, h2, h3 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

table {
  border-collapse: collapse;
  border: 1px solid black;
  width: 800px;
  margin: 0 auto;
}

td {
  border: 1px solid black;
  vertical-align: top;
}

.header {
  background-color: lightpink;
  padding: 1em;
}

.nav {
  width: 20%;
  padding: 1em;
  background-color: lightgreen;
}

.main {
  width: 60%;
  padding: 1em;
  background-color: white;
}

.sidebar {
  width: 20%;
  padding: 1em;
  background-color: lightblue;
}

.footer {
  padding: 1em;
  background-color: lightyellow;
}
```