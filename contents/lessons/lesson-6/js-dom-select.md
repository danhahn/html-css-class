---
title: Lesson 6
lesson: Javascript DOM Select
author: Dan Hahn
date: 10/30/2017
template: article.jade

nav:
  Javascript: index.html
  JS Data Type: js-examples.html
  JS DOM Select: js-dom-select.html
  Jquery: jquery.html
---

## Selecting HTML elements

The DOM is a W3C (World Wide Web Consortium) standard. The DOM defines a standard for accessing documents: "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

We can use the DOM to select, update or create new HTML elements.

## document.getElementById

If the element you want to select has an `id` as an element you can use that to select the element;

### html
```html
<div id="header">This is a header</header>
```
### js
```javascript
var pageHeader = document.getElementById('header'); // <div id="header">This is a header</header>
```

In most cases you will start to your search of the element at the top level so you will start with `document` and the `.` chains the method to the document.  `document.getElementById('header')` will find the first element that has an `id="header"` and store it in variable `pageHeader`.

## document.querySelector

`document.querySelector` is like `getElementById` where it will select the first element it uses a css like selector to select the element.  

### html
```html
<p>Lorem, ipsum dolor.</p>
<p>Alias, labore molestiae.</p>
<p>Amet, odit maxime.</p>
```
### js
```javascript
var p = document.querySelector('p'); //<p>Lorem, ipsum dolor.</p>

```

Even if there are more than one paragraph tag this selector will only return the first element that matches.  Unlike `getElementById` you can use any css selector. 

```javascript
document.querySelector('p.intro span');
document.querySelector('ul > li a.active');
document.querySelector('.selected.rounded');
```

## document.querySelectorAll

You can use the same css selectors to return an array like list of all elements that match the selector.  

### html
```html
<p>Lorem, ipsum dolor.</p>
<p>Alias, labore molestiae.</p>
<p>Amet, odit maxime.</p>
```
### js
```javascript
var pList = document.querySelectorAll('p'); // NodeList(3)
```

Now that we have this `NodeList` we can loop over the items and do something to them.  Lets change the text color.

```javascript
var pList = document.querySelectorAll('p'); // NodeList(3)

pList.forEach(function(item, index) {
  if(index === 0) {
    item.style.color = "blue";
  } else {
    item.style.color = "red";
  }
})

```

Since our `pList` is a NodeList we can use the built in function of `forEach` to loop over each item in the list.  We need to pass in a function that takes an `item` which is the current item in the list and an `index` which is number of the item we are on starting with `0` like an array.  

Next we look at the index and see if it's `0`, if it's we change the `style.color` to blue otherwise we set the `style.color` to red.  This will change the first `p` to have a color of blue while all others will have a color red.

## Create a new element

We can use JavaScript to create new HTML elements.  This is a little more complex so lets break it down.

1. create a element using `document.createElement(tagName)`
2. add content to that element the basic way is `document.createTextNode()`
3. append the content to the new element with `appendChild`
4. add the content to the page.  Select an element and use `insertBefore` to insert before that element.

```javascript
// create a new div element 
// and give it some content 
var newDiv = document.createElement("div"); 
var newContent = document.createTextNode("Hi there and greetings!"); 
newDiv.appendChild(newContent); //add the text node to the newly created div. 

// add the newly created element and its content into the DOM 
var currentDiv = document.getElementById("div1"); 
document.body.insertBefore(newDiv, currentDiv); 
```