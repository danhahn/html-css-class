---
title: Lesson 7
author: Dan Hahn
date: 11/9/2015 18:00
template: article.jade
---

# CSS3 Animation

* [CSS3 Transitions]()
* [CSS3 Animations](animations.html)


**CSS animations** make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation's style, as well as possible intermediate waypoints along the way.

There are three key advantages to CSS animations over traditional script-driven animation techniques:

1. They're easy to use for simple animations; you can create them without even having to know JavaScript.
2. The animations run well, even under moderate system load. Simple animations can often perform poorly in JavaScript (unless they're well made). The rendering engine can use frame-skipping and other techniques to keep the performance as smooth as possible.
3. Letting the browser control the animation sequence lets the browser optimize performance and efficiency by, for example, reducing the update frequency of animations running in tabs that aren't currently visible.

## Configuring the animation

To create a CSS animation sequence, you style the element you want to animate with the animation property or its sub-properties. This lets you configure the timing and duration of the animation, as well as other details of how the animation sequence should progress. This does not configure the actual appearance of the animation, which is done using the `@keyframes` at-rule as described in Defining the animation sequence using keyframes below.

The sub-properties of the animation property are:


Prop                                           | Value
-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------
[animation-delay](notes/delay.html)            | Configures the delay between the time the element is loaded and the beginning of the animation sequence.
[animation-direction](notes/direction.html)    | Configures whether or not the animation should alternate direction on each run through the sequence or reset to the start point and repeat itself.
[animation-duration](notes/duration.html)      | Configures the length of time that an animation should take to complete one cycle.
[animation-iteration-count](notes/count.html)  | Configures the number of times the animation should repeat; you can specify infinite to repeat the animation indefinitely.
[animation-name](notes/name.html)              | Specifies the name of the `@keyframes` at-rule describing the animation's keyframes.
[animation-play-state](notes/play.html)        | Lets you pause and resume the animation sequence.
[animation-timing-function](notes/timing.html) | Configures the timing of the animation; that is, how the animation transitions through keyframes, by establishing acceleration curves.
[animation-fill-mode](notes/fill.html)         | Configures what values are applied by the animation before and after it is executing.

## Defining the animation sequence using keyframes

Once you've configured the animation's timing, you need to define the appearance of the animation. This is done by establishing two or more keyframes using the `@keyframes` at-rule. Each keyframe describes how the animated element should render at a given time during the animation sequence.

Since the timing of the animation is defined in the CSS style that configures the animation, keyframes use a percentage to indicate the time during the animation sequence at which they take place. 0% indicates the first moment of the animation sequence, while 100% indicates the final state of the animation. Because these two times are so important, they have special aliases: from and to. Both are optional. If from/0% or to/100% is not specified, the browser starts or finishes the animation using the computed values of all attributes.

You can optionally include additional keyframes that describe intermediate steps along the way from the starting point to the ending point of the animation.

## Examples

**Note:** The examples here don't use any prefix on the animation CSS properties. WebKit-based browsers and older version of the other browsers may need prefixes; the live examples you can click to see in your browser also include the -webkit prefixed versions.

Making text slide across the browser window

This simple example styles the `<h1>` element so that the text slides in from off the right edge of the browser window.

	h1 {
	  animation-duration: 3s;
	  animation-name: slidein;
	}

	@keyframes slidein {
	  from {
	    margin-left: 100%;
	    width: 300%
	  }

	  to {
	    margin-left: 0%;
	    width: 100%;
	  }
	}

The style for the `<h1>` element here specifies that the animation should take 3 seconds to execute from start to finish, using the animation-duration property, and that the name of the `@keyframes` at-rule defining the keyframes for the animation sequence is named "slidein".

If we wanted any custom styling on the `<h1>` element to appear in browsers that don't support CSS animations, we would include it here as well; however, in this case we don't want any custom styling other than the animation effect.

The keyframes are defined using the `@keyframes` at-rule. In this case, we have just two keyframes. The first occurs at 0% (using the alias from). Here, we configure the left margin of the element to be at 100% (that is, at the far right edge of the containing element), and the width of the element to be 300% (or three times the width of the containing element). This causes the first frame of the animation to have the header drawn off the right edge of the browser window.

The second (and final) keyframe occurs at 100% (using the alias to). The left margin is set to 0% and the width of the element is set to 100%. This causes the header to finish its animation flush against the left edge of the content area.



## Adding another keyframe

Let's add another keyframe to the previous example's animation. Let's say we want the header's font size to increase as it moves from right to left for a while, then to decrease back to its original size. That's as simple as adding this keyframe:

	75% {
	  font-size: 300%;
	  margin-left: 25%;
	  width: 150%;
	}

This tells the browser that 75% of the way through the animation sequence, the header should have its left margin at 25% and the width should be 150%.



## Making it repeat

To make the animation repeat itself, simply use the animation-iteration-count property to indicate how many times to repeat the animation. In this case, let's use infinite to have the animation repeat indefinitely:

	h1 {
	  animation-duration: 3s;
	  animation-name: slidein;
	  animation-iteration-count: infinite;
	}



## Making it move back and forth

That made it repeat, but it's very odd having it jump back to the start each time it begins animating. What we really want is for it to move back and forth across the screen. That's easily accomplished by setting animation-direction to alternate:

	h1 {
	  animation-duration: 3s;
	  animation-name: slidein;
	  animation-iteration-count: infinite;
	  animation-direction: alternate;
	}



## Using animation events

You can get additional control over animations -- as well as useful information about them -- by making use of animation events. These events, represented by the AnimationEvent object, can be used to detect when animations start, finish, and begin a new iteration. Each event includes the time at which it occurred as well as the name of the animation that triggered the event.

We'll modify the sliding text example to output some information about each animation event when it occurs, so we can get a look at how they work.

## Adding the animation event listeners

We'll use JavaScript code to listen for all three possible animation events. The setup() function configures our event listeners; we call it when the document is first loaded in order to set things up.

	function setup() {
	  var e = document.getElementById("watchme");
	  e.addEventListener("animationstart", listener, false);
	  e.addEventListener("animationend", listener, false);
	  e.addEventListener("animationiteration", listener, false);

	  var e = document.getElementById("watchme");
	  e.className = "slidein";
	}

This is pretty standard code; you can get details on how it works in the documentation for element.addEventListener(). The last thing the setup() function here does is set the class on the element we'll be animating to "slidein"; we do this to start the animation.

Why? Because the animationstart event fires as soon as the animation starts, and in our case, that happens before our code runs. So we'll start the animation ourselves by setting the class of the element to the style that gets animated after the fact.

Receiving the events

The events get delivered to the listener() function, which is shown below.

	function listener(e) {
	  var l = document.createElement("li");
	  switch(e.type) {
	    case "animationstart":
	      l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
	      break;
	    case "animationend":
	      l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
	      break;
	    case "animationiteration":
	      l.innerHTML = "New loop started at time " + e.elapsedTime;
	      break;
	  }
	  document.getElementById("output").appendChild(l);
	}

This code, too, is very simple. It simply looks at the event.type to determine which kind of animation event occurred, then adds an appropriate note the `<ul>` (unordered list) we're using to log these events.

The output, when all is said and done, looks something like this:

Started: elapsed time is 0
New loop started at time 3.01200008392334
New loop started at time 6.00600004196167
Ended: elapsed time is 9.234000205993652

**Note** that the times are very close to, but not exactly, those expected given the timing established when the animation was configured. Note also that after the final iteration of the animation, the animationiteration event isn't sent; instead, the animationend event is sent.

## The HTML

Just for the sake of completeness, here's the HTML that displays the page content, including the list into which the script inserts information about the received events:

	<body onload="setup()">
	  <h1 id="watchme">Watch me move</h1>
	  <p>This example shows how to use CSS animations to make <code>H1</code> elements
	  move across the page.</p>
	  <p>In addition, we output some text each time an animation event fires, so you can see them in action.</p>
	  <ul id="output">
	  </ul>
	</body>




&copy; 2005 - 2013 Mozilla Developer Network and individual contributors
Content is available under these licenses • About MDN • Contribute to the code • Privacy Policy

<style>td{width:50%;}</style>
