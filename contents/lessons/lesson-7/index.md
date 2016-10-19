---
title: Lesson 7
author: Dan Hahn
date: 8/1/2016 18:00
template: article.jade
---

This week we will talk about CSS Animation

<span class="more"></span>

# Transitions

* [CSS3 Transitions]()
* [CSS3 Animations](animations.html)

[Download Notes  <i class="icon-download-alt icon-white"></i>](week7-notes.zip)
[Download Starter File  <i class="icon-download-alt icon-white"></i>](week7.zip)

CSS transitions, which are part of the CSS3 set of specifications, provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.

A CSS transition tells the browser to draw the intermediate states between the initial and final states, showing the user a smooth transitions.

CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining a timing function, e.g. linearly or quick at the beginning, slow at the end).

**Note:** CSS transition properties can be used without any prefix provider, but since the specification has only recently achieved stability, the vendor prefixes can still be necessary for browsers based on WebKit. They are also necessary for compatibility with older browser versions (e.g.: Firefox 15 and earlier, Opera 12 and earlier). A compatibility table is available at the bottom of this page with more information.

## Which CSS properties are animatable?
The Web author can define which property has to be animated and in which way. This allows the creation of complex transitions. As it doesn't make sense to animate some properties, the list of animatable properties is limited to a finite set.

Note: The set of properties that can be animated is subject to change. Developers should proceed with caution.
Also the auto value is often a very complex case. The specification asks not to animate from and to such a value. Some user agents, like those based on Gecko, implement this requirement and others, like those based on WebKit, are less strict. Using animations with auto may lead to unpredictable results, depending of the browser and its version, and should be avoided.

Care should also be taken when using a transition immediately after adding the element to the DOM using .appendChild() or removing its display: none; property. This is seen as if the initial state had never occured and the element was always in its final state. The easy way to overcome this limitation is to apply a window.setTimeout() of a handful of milliseconds before changing the CSS property you intend to transition to.

## Multiple animated properties example

HTML Content

	<body>
	    <p>The box below combines transitions for: width, height, background-color, transform. Hover over the box to see these properties animated.</p>
	    <div class="box"></div>
	</body>

CSS Content

	.box {
	    border-style: solid;
	    border-width: 1px;
	    display: block;
	    width: 100px;
	    height: 100px;
	    background-color: #0000FF;
	    -webkit-transition:width 2s, height 2s, background-color 2s, -webkit-transform 2s;
	    transition:width 2s, height 2s, background-color 2s, transform 2s;
	}
	.box:hover {
	    background-color: #FFCCCC;
	    width:200px;
	    height:200px;
	    -webkit-transform:rotate(180deg);
	    transform:rotate(180deg);
	}



## CSS properties used to define transitions

CSS Transitions are controlled using the shorthand transition property. This is the best way to configure transitions, as it makes it easier to avoid that the lengths of the parameter list are out of sync, which can be very frustrating to have to spend lots of time debugging the CSS.

You can control the individual components of the transition with the following sub-properties:

**Note:** that these transitions loop infinitely only for the purpose of our examples; CSS transitions only visualize a property change from start to finish. If you need visualizations that loop, look into the CSS animation property.

### transition-property

Specifies the name or names of the CSS properties to which transitions should be applied. Only properties listed here are animated during transitions; changes to all other properties occur instantaneously as usual.

### transition-duration

Specifies the duration over which transitions should occur. You can specify a single duration that applies to all properties during the transition, or multiple values to allow each property to transition over a different period of time.

	transition-duration: 0.5s
	transition-duration: 1s
	transition-duration: 2s
	transition-duration: 4s


### transition-timing-function

Specifies a function to define how intermediate values for properties are computed. Timing functions determine how intermediate values of the transition are calculated. Most timing functions can be specified by providing the graph of the corresponding function, as defined by four points defining a cubic bezier. You can also choose easing from Easing Functions Cheat Sheet.

	transition-timing-function: ease
	transition-timing-function: linear
	transition-timing-function: step-end
	transition-timing-function: steps(4, end)


### transition-delay

Defines how long to wait between the time a property is changed and the transition actually begins.

	transition-delay: 0.5s
	transition-delay: 1s
	transition-delay: 2s
	transition-delay: 4s

The shorthand CSS syntax is written as follows:

	div {
	    transition: <property> <duration> <timing-function> <delay>;
	}

## Detecting the completion of a transition

There is a single event that is fired when transitions complete. In all standard-compliant browser, the event is transitionend, in WebKit it is webkitTransitionEnd. See the compatibility table at the bottom for more. The transitionend event offers two properties:

propertyName

A string indicating the name of the CSS property whose transition completed.

### elapsedTime
A float indicating the number of seconds the transition had been running at the time the event fired. This value isn't affected by the value of transition-delay.
As usual, you can use the element.addEventListener() method to monitor for this event:

	el.addEventListener("transitionend", updateTransition, true);

**Note:** The transitionend event doesn't fire if the transition is aborted because the animating property's value is changed before the transition is completed.

When property value lists are of different lengths

If any property's list of values is shorter than the others, its values are repeated to make them match. For example:

	div {
	  transition-property: opacity, left, top, height;
	  transition-duration: 3s, 5s;
	}

This is treated as if it were:

	div {
	  transition-property: opacity, left, top, height;
	  transition-duration: 3s, 5s, 3s, 5s;
	}

Similarly, if any property's value list is longer than that for transition-property, it's truncated, so if you have the following CSS:

	div {
	  transition-property: opacity, left;
	  transition-duration: 3s, 5s, 2s, 1s;
	}

This gets interpreted as:

	div {
	  transition-property: opacity, left;
	  transition-duration: 3s, 5s;
	}

## A simple example

This example performs a four-second font size transition with a two-second delay between the time the user mouses over the element and the beginning of the animation effect:

	#delay1 {
	  position: relative;
	  transition-property: font-size;
	  transition-duration: 4s;
	  transition-delay: 2s;
	  font-size: 14px;
	}

	#delay1:hover {
	  transition-property: font-size;
	  transition-duration: 4s;
	  transition-delay: 2s;
	  font-size: 36px;
	}

Using transitions when highlighting menus

A common use of CSS is to highlight items in a menu as the user hovers the mouse cursor over them. It's easy to use transitions to make the effect even more attractive.

Before we look at code snippets, you might want to take a look at the live demo (assuming your browser supports transitions). You can also take a look directly at the CSS it uses.

First we set up the menu using HTML:

	<div class="sidebar">
	  <p><a class="menuButton" href="home">Home</a></p>
	  <p><a class="menuButton" href="about">About</a></p>
	  <p><a class="menuButton" href="contact">Contact Us</a></p>
	  <p><a class="menuButton" href="links">Links</a></p>
	</div>

Then we build the CSS to implement the look and feel of our menu. The relevant portions are shown here:

	.menuButton {
	  position: relative;
	  transition-property: background-color, color;
	  transition-duration: 1s;
	  transition-timing-function: ease-out;
	  text-align: left;
	  background-color: grey;
	  left: 5px;
	  top: 5px;
	  height: 26px;
	  color: white;
	  border-color: black;
	  font-family: sans-serif;
	  font-size: 20px;
	  text-decoration: none;
	  box-shadow: 2px 2px 1px black;
	  padding: 2px 4px;
	  border: solid 1px black;
	}

	.menuButton:hover {
	  position: relative;
	  transition-property: background-color, color;
	  transition-duration: 1s;
	  transition-timing-function: ease-out;
	  background-color:white;
	  color:black;
	  box-shadow: 2px 2px 1px black;
	}

This CSS establishes the look of the menu, with the background and text colors both changing when the element is in its :hover state.

Instead of describing the effect at length, you can take a look at the live sample if your browser has transitions support.

Using transitions to make JavaScript functionality smooth
Transitions are a great tool to make things look much smoother without having to do anything to your JavaScript functionality. Take the following example.

	<p>Click anywhere to move the ball</p>
	<div id="foo"></div>

Using JavaScript you can make the effect of moving the ball to a certain position happen:

	var f = document.getElementById('foo');
	document.addEventListener('click', function(ev){
	    f.style.left = (ev.clientX-25)+'px';
	    f.style.top = (ev.clientY-25)+'px';
	},false);

With CSS you can make it smooth without any extra effort. Simply add a transition to the element and any change will happen smoothly:

	p {
	  padding-left: 60px;
	}

	#foo {
	  border-radius: 50px;
	  width: 50px;
	  height: 50px;
	  background: #c00;
	  position: absolute;
	  top: 0;
	  left: 0;
	  transition:  all 1s;
	}

You can play with this here: http://jsfiddle.net/RwtHn/5/
