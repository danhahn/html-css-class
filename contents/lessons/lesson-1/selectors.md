---
title: Lesson
lesson: CSS Selectors
author: Dan Hahn
date: 9/18/2017 18:00
template: article.jade

nav:
  Introduction: index.html
  Editors: editors.html
  Terminal and Git: git.html
  Emmet: emmet.html
  Selectors: selectors.html
  Comments: comments.html
  Homework: homework.html
---

# CSS Selectors

* [Introduction]()
* [Editors](editors.html)
* [Terminal and Git](git.html)
* [Emmet](emmet.html)
* [Selectors](selectors.html)
* [Comments](comments.html)
* [Homework](homework.html)

Selectors are the way that the HTML and CSS connect to each other.   There are 3 basic types of selectors, tag, class and id.

<table>
  <tbody><tr>
    <th>Selector</th>
    <th>Example</th>
    <th>Example description</th>

  </tr>
    <tr>
    <td>.class</td>
    <td>.intro</td>
    <td>Selects all elements with class="intro"</td>

  </tr>
    <tr>
    <td>#id</td>
    <td>#firstname</td>
    <td>Selects the element with id="firstname"</td>

  </tr>  <tr>
    <td>\*</td>
    <td>\*</td>
    <td>Selects all elements</td>

  </tr>
  <tr>
    <td><i>element</i></td>
    <td>p</td>
    <td>Selects all &lt;p&gt; elements</td>

  </tr>
  <tr>
    <td><i>element,element</i></td>
    <td>div, p</td>
    <td>Selects all &lt;div&gt; elements and all &lt;p&gt; elements</td>

  </tr>
  <tr>
    <td>element element</td>
    <td>div p</td>
    <td>Selects all &lt;p&gt; elements inside &lt;div&gt; elements</td>

  </tr>
  <tr>
    <td>element&gt;element</td>
    <td>div &gt; p</td>
    <td>Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element</td>

  </tr>
  <tr>
    <td>element+element</td>
    <td>div + p</td>
    <td>Selects all &lt;p&gt; elements that are placed immediately after &lt;div&gt; elements</td>

  </tr>
    <tr>
    <td>element1~element2</td>
    <td>p ~ ul</td>
    <td>Selects every &lt;ul&gt; element that are preceded by a &lt;p&gt; element</td>

  </tr>
    <tr>
    <td>[attribute]</td>
    <td>[target]</td>
    <td>Selects all elements with a target attribute</td>

  </tr>
    <tr>
    <td>[attribute=value]</td>
    <td>[target=&#95;blank]</td>
    <td>Selects all elements with target="&#95;blank"</td>

  </tr>
    <tr>
    <td>[attribute~=value]</td>
    <td>[title~=flower]</td>
    <td>Selects all elements with a title attribute containing the word "flower"</td>

  </tr>
    <tr>
    <td>[attribute|=value]</td>
    <td>[lang|=en]</td>
    <td>Selects all elements with a lang attribute value starting with "en"</td>

  </tr>
    <tr>
    <td>[attribute^=value]</td>
    <td>a[href^="https"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value begins with "https"</td>

  </tr>
    <tr>
    <td>[attribute$=value]</td>
    <td>a[href$=".pdf"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value ends with ".pdf"</td>

  </tr>
    <tr>
    <td>[attribute*=value]</td>
    <td>a[href*="w3schools"]</td>
    <td>Selects every &lt;a&gt; element whose href attribute value contains the substring
    "w3schools"</td>

  </tr>
    <tr>
    <td>:active</td>
    <td>a:active</td>
    <td>Selects the active link</td>

  </tr>
    <tr>
    <td>::after</td>
    <td>p::after</td>
    <td>Insert content after every &lt;p&gt; element</td>

  </tr>
    <tr>
    <td>::before</td>
    <td>p::before</td>
    <td>Insert content before&nbsp;the content of every &lt;p&gt; element</td>

  </tr>
    <tr>
    <td>:checked</td>
    <td>input:checked</td>
    <td>Selects every checked &lt;input&gt; element</td>

  </tr>
    <tr>
    <td>:disabled</td>
    <td>input:disabled</td>
    <td>Selects every disabled &lt;input&gt; element</td>

  </tr>
    <tr>
    <td>:empty</td>
    <td>p:empty</td>
    <td>Selects every &lt;p&gt; element that has no children (including text nodes)</td>

  </tr>
    <tr>
    <td>:enabled</td>
    <td>input:enabled</td>
    <td>Selects every enabled &lt;input&gt; element</td>

  </tr>
  <tr>
    <td>:first-child</td>
    <td>p:first-child</td>
    <td>Selects every &lt;p&gt; element that is the first child of its parent</td>

  </tr>
    <tr>
    <td>::first-letter</td>
    <td>p::first-letter</td>
    <td>Selects the first letter of every &lt;p&gt; element</td>

  </tr>
    <tr>
    <td>::first-line</td>
    <td>p::first-line</td>
    <td>Selects the first line of every &lt;p&gt; element</td>

  </tr>
    <tr>
    <td>:first-of-type</td>
    <td>p:first-of-type</td>
    <td>Selects every &lt;p&gt; element that is the first &lt;p&gt; element of its parent</td>

  </tr>
    <tr>
    <td>:focus</td>
    <td>input:focus</td>
    <td>Selects the input element which has focus</td>

  </tr>
    <tr>
    <td>:hover</td>
    <td>a:hover</td>
    <td>Selects links on mouse over</td>

  </tr>
    <tr>
    <td>:in-range</td>
    <td>input:in-range</td>
    <td>Selects input elements with a value within a specified range</td>

  </tr>
    <tr>
    <td>:invalid</td>
    <td>input:invalid</td>
    <td>Selects all input elements with an invalid value</td>

  </tr>
    <tr>
    <td>:lang(language)</td>
    <td>p:lang(it)</td>
    <td>Selects every &lt;p&gt; element with a lang attribute equal to "it"
    (Italian)</td>

  </tr>
    <tr>
    <td>:last-child</td>
    <td>p:last-child</td>
    <td>Selects every &lt;p&gt; element that is the last child of its parent</td>

  </tr>
    <tr>
    <td>:last-of-type</td>
    <td>p:last-of-type</td>
    <td>Selects every &lt;p&gt; element that is the last &lt;p&gt; element of its parent</td>

  </tr>
  <tr>
    <td>:link</td>
    <td>a:link</td>
    <td>Selects all unvisited links</td>

  </tr>
    <tr>
    <td>:not(selector)</td>
    <td>:not(p)</td>
    <td>Selects every element that is not a &lt;p&gt; element</td>

  </tr>
    <tr>
    <td>:nth-child(n)</td>
    <td>p:nth-child(2)</td>
    <td>Selects every &lt;p&gt; element that is the second child of its parent</td>

  </tr>
    <tr>
    <td>:nth-last-child(n)</td>
    <td>p:nth-last-child(2)</td>
    <td>Selects every &lt;p&gt; element that is the second child of its parent, counting
    from the last child</td>

  </tr>
    <tr>
    <td>:nth-last-of-type(n)</td>
    <td>p:nth-last-of-type(2)</td>
    <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent, counting
    from the last child</td>

  </tr>
    <tr>
    <td>:nth-of-type(n)</td>
    <td>p:nth-of-type(2)</td>
    <td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent</td>

  </tr>
    <tr>
    <td>:only-of-type</td>
    <td>p:only-of-type</td>
    <td>Selects every &lt;p&gt; element that is the only &lt;p&gt; element of its
    parent</td>

  </tr>
    <tr>
    <td>:only-child</td>
    <td>p:only-child</td>
    <td>Selects every &lt;p&gt; element that is the only child of its parent</td>

  </tr>
    <tr>
    <td>:optional</td>
    <td>input:optional</td>
    <td>Selects input elements with no "required" attribute</td>

  </tr>
    <tr>
    <td>:out-of-range</td>
    <td>input:out-of-range</td>
    <td>Selects input elements with a value outside a specified range</td>

  </tr>
    <tr>
    <td>:read-only</td>
    <td>input:read-only</td>
    <td>Selects input elements with the "readonly" attribute specified</td>

  </tr>
    <tr>
    <td>:read-write</td>
    <td>input:read-write</td>
    <td>Selects input elements with the "readonly" attribute NOT specified</td>

  </tr>
    <tr>
    <td>:required</td>
    <td>input:required</td>
    <td>Selects input elements with the "required" attribute specified</td>

  </tr>
    <tr>
    <td>:root</td>
    <td>:root</td>
    <td>Selects the document's root element</td>

  </tr>
    <tr>
    <td>::selection</td>
    <td>::selection</td>
    <td>Selects the portion of an element that is selected by a user</td>

  </tr>
    <tr>
    <td>:target</td>
    <td>#news:target </td>
    <td>Selects the current active #news element (clicked on a URL containing that anchor name)</td>

  </tr>
    <tr>
    <td>:valid</td>
    <td>input:valid</td>
    <td>Selects all input elements with a valid value</td>

  </tr>
    <tr>
    <td>:visited</td>
    <td>a:visited</td>
    <td>Selects all visited links</td>

  </tr>
</tbody></table>

<table><tr class="active"><td>\* rows with this color have an example on this page</td></tr></table>

## Tag Name Selector

Tag name selectors use HTML tags as the connection.  Any HTML element can be used as a selector. Although not all HTML elements can be styled.

#### CSS
```css
h1 {
    color: red;
}
```
#### HTML
```
<h1>Example Text</h1>
```
## Class Name selector

Class name selectors require an attribute of `class=""` to be added to an HTML element.  A class name must be given and that name will be used to connect the HTML and CSS.  Many elements on a page may use the same class name.

### Example

#### CSS
```
.className {
    color: red;
}
```

#### HTML
```
<h1 class="className">Example Text</h1>
```
## ID Name selector
An ID name selectors require an attribute of `id=""` to be added to an HTML element.  An ID name must be given and that name will be used to connect the HTML and CSS.  Only one element per page can use an ID name although there can be many different ID names on the same page.

### Example

#### CSS
```
#idName {
    color: red;
}
```
#### HTML
```
<h1 id="idName">Example Text</h1>
```
## Limiting the scope

Because classes can be applied to many elements on a page there could be a case where the same class name is used on two or more different elements.  One way to ensure that styles are applied only to the elements intended is limit the scope.  For example you may have a class name of "firstLine" that is applied to both a P tag and an LI tag.  The style you create would apply to both at the same time.

Since they are not the same it may be the case that you want to style each differently.  By combining two of the basic selectors you can ensure that only the intended element is styled. `tag.className` or `p.intro`

When two selectors are combined without a space, as with the example above, the class will only applied to the HTML tag that has the class name.

### Example
#### CSS
```
p.firstLine {
    color: red;
}
```
#### HTML

```
<p class="firstLine">Example Text</p>
<ul>
    <li class="firstLine">List Text</li>
</ul>
```

In this example you can see there are two elements that have the class name of "firstLine".  To limit the class "firstLine" only to P tags, we start with a tag name selector and append the class name.

This idea will work with any combination of the three basic selectors

* `tag.className`
* `tag#idName`
* `#id.className`
* `.className.className2`

## Grouping selectors

There are cases where you may want to apply the same styles to two or more selector.  In that case you can group them together.  This is very useful so you dont have to repeat the same properties to two selectors.  

#### CSS
```
h1, .className, div p {
    color: pink;
}
```

In this case we are applying the same property to three different selectors at the same time.  `<h1>`, `.className` and `<div> <p>`.  Each selector is independent of the others and are sperated by comma.  

## Context Selectors

You can use the context of the HTML to limit the css selectors.  You may want select all `<li>` tags but only if they are a child of `<ol>`.

#### CSS
```
ol li {
    color: blue;
}
```

#### HTML
```
<ol>
    <li>List Item</li>
</ol>
```

## Direct Descendent

In the last example we used context to select an element.  This is very useful but sometimes can select too many elements.  For example when you use this selector you will get all `<p>` that are descendents of `<div>`.  

#### CSS
```
div p {
    color: red;
}
```
This will select any `<p>` as along as it a descendent of `<div>` that might be one level or 100 levels.  

There are times that we might want only select the top level `<p>` this is were the direct descendent select comes in.

#### CSS
```
div > p {
    color: oranage;
}
```

#### HTML
```
<div>
    <p>Direct descendent</p>
</div>

<div>
    <header>
        <p>descendent of the header tag</p>
    </header>
</div>
```
Here we will only select the first `<p>`  because it is a direct descendent of the `<div>`.  The second example the `<p>` is a descendent of `<header>`.

## Sibling Selector

If you want to select and element only when it follows an other tag you can use the sibling selector.  

#### CSS
```
h2 + p {
    color: green;
}
```
#### HTML
```
<h2>Header Text</h2>
<p>Intro Text</p>
<p>Second paragraph</p>
```
In this example only the first `<p>` will be selected because it comes right after the `<h2>`.  All other `<p>` would not be selected.

## First and Last child selector

Many times you may want to select the first or last child and apply a style to that element only.   In this case you need to use the psudo selector `:first-child` and `:last-child`.

#### CSS
```
ul li:first-child {
    color: orange;
}

ul li:last-child {
    color: tan;
}
```
#### HTML
```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```
In this example the first `<li>` will be orange and the last `<li>` will be tan.

## Select all

If you need to select all elements you can use the `*` selector.

#### css

```
* {
    font-weight: bold;
}
```
This will select all elements and make the font weight bold.

**Note:** you can combined any of these selectors to target a element.
