---
title: Lesson 11
author: Dan Hahn
date: 2013-12-02
template: article.jade
---

This week we will be talking about Javascritp and Jquery.

<span class="more"></span>


<h1>What is JavaScript?</h1>

* [Javascript]()

[Slide Show](lesson/index.html)

<blockquote class="fragment" cite="http://en.wikipedia.org/wiki/JavaScript#CITEREFFlanaganFerguson2006">
&ldquo;JavaScript (JS) is an interpreted computer programming language.  It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed. More recently, however, it has become common in both game development and the creation of desktop applications.&rdquo;
</blockquote>
<p class="fragment">(From Wikipedia)</p>
</section>

<h2>What does that mean?</h2>
<p class="fragment">JavaScript gives life to web pages by way of the interpreter in a web browser.  The JavaScript interpreter translates a given script in order to manipulate elements within the page. </p>
<p class="fragment">Without it web sites would be fairly static.</p>
</section>
</section>


<h1>History of JavaScript</h1>
<ol>
<li class="fragment">Created by Brendan Eich (Mozilla CTO) </li>
<li class="fragment">Shipped in Netscape Navigator 2.0 in 1995</li>
<li class="fragment">Originally Called <i>LiveScript</i></li>
<li class="fragment">Partially inspired by and shares superficial similarities to Java, but intended to appeal to non-programmers, similar to Microsoft's Visual Basic</li>
<li class="fragment">Microsoft quickly adopted to gain footing with IE 3 in 1996</li>
<li class="fragment">Netscape submitted it to to The European Computer Manufacturers Association (ECMA) in 1996 for standardization. The standardized spec for this language is ECMAscript</li>
<li class="fragment">Now the working language of the web, for better or worse</li>
</ol>
</section>



<h1>What is it used for?</h1>
<ol>
<li class="fragment">Adding dynamic behavior to web pages</li>
<li class="fragment">Manipulating and scripting elements on web pages</li>
<li class="fragment">Requesting data from a different source (we won't cover this)</li>
<li class="fragment">Processing data outside of the web with frameworks like Node.js (we won't cover this)</li>
</ol>
<h2 class="fragment" style="margin-top: 60px;">Examples: </h2>
</section>

<h3>Gmail</h3>
<div class="fragment">
<p>check out the sweet hover menu!</p>
<img src="img/gmail-menu.png"/>
</div>
</section>

<h3><b style="color: gray">color</b> a color matching game</h3>
<div class="fragment">
<p>Using a markup language called SVG, JavaScript brings interactive graphics to create a rich experience</p>
<img src="img/color-matching-game.png"/>
<a href="http://color.method.ac/">http://color.method.ac</a>
</div>
</section>

<h3>reveal.js</h3>
<p>This presentation is using a JavaScript library.  Requires no JS knowledge on my part,  but automagically adds razzle & dazzle.
</p>
<a href="http://lab.hakim.se/reveal-js/">http://lab.hakim.se/reveal-js/</a>
</section>
</section>



<h2>What does it look like?</h2>
<pre class="fragment"><code data-trim contenteditable>
&lt;head&gt;
&lt;script&gt;
function sayHello(name) {
alert("Hello " + name + "!");
}
&lt;/script&gt;
&lt;/head&gt;
</code></pre>
</section>

<p>Similar to stylesheets, to keep your code clean & organized, best practice is to include external script</p>
<pre class="fragment"><code data-trim contenteditable>
&lt;head&gt;
&lt;link href="path/to/mystylesheet.css" rel="stylesheet" type="text/css"&gt;&lt;/link&gt;
&lt;script src="path/to/myjavascript.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
<p class="fragment">In most cases stylesheets should precede script tags so that the browser can immediately render layout as intended, whereas scripts adding interactive behavior can take considerable time to load</p>
</section>
</section>


<h2>Lets dive in</h2>
<div class="fragment">
<p>Variable assignment: numbers, booleans, strings</p>
<pre><code data-trim contenteditable>
var myNumber = 5;
var myBoolean = true;
var myString = "Hello World!";
</code></pre>
</div>
<div class="fragment">
<p>Variable assignment: arrays, objects </p>
<pre><code data-trim contenteditable>
var myNumberArray = [1,2,3];
var myCircleObject = { color: "red", radius: 2};
</code></pre>
<p class="fragment">Take note how variable declarations begin with the <b>var</b> keyword</p>
</div>
</section>


<h2>Control Flow</h2>
<div class="fragment">
<p><b>if</b> statements are used to control the flow of logic in your script. The expression within the parenthesis following the <b>if</b> keyword must evaluate to a boolean value: <b>true</b> or <b>false</b> in order to evaluate
</p>
<pre><code data-trim contenteditable>
var myGrade = 92;

if (myGrade >= 85) {
alert('You are doing really well in this class!');
} else {
alert('You might want to study up.');
}
</code></pre>
<p class="fragment">The expression in the parenthesis is checking that <b>myGrade</b> is greater than or equal to 85.  &gt, &gt=, &lt, &lt=, == are all logical operators used to compare values.</p>
</div>
</section>


<h2>Arithmetic Expressions</h2>
<div class="fragment">
<p>We can perform arithmetic operations on numbers in JavaScript.  +, -, /, * are standard operators.  Take note on the 8th line that when we add a number to a string (a series of characters), JavaScript coerces the number to a string & appends it.
</p>
<pre><code data-trim contenteditable>
var exam1 = 92;
var exam2 = 85;
var exam3 = 90;

var average = (exam1 + exam2 + exam3) / 3;

if (average >= 85) {
alert('You are doing really well in this class!');
} else {
alert('You might want to study up. Your average is ' + average + '.');
}
</code></pre>
<p class="fragment">JavaScript also features a <b>Math</b> namespace of advanced operations including sqrt(), pow() and abs().</p>
</div>
</section>


<h2>Objects</h2>
<div class="fragment">
<p>Objects are a structured set of primitive values.  Let's declare an object named circle with
a color and radius property.  Then we'll calculate the circumference and update the object with a new property that we can access later.
<pre><code data-trim contenteditable>
var pi = 3.14;

var circle = {
color: "red",
radius: 5
};

circle.circumference = 2 * pi * circle.radius;
</code></pre>
<p class="fragment">Note that we've declared a variable called pi for convenience and readability.
</p>
</div>
</section>



<h2>Arrays & Iteration</h2>
<p>An array is a collection of things.  They could be basic values, such as numbers, or more complex data structures such as objects. </p>
<div class="fragment">
<p>Let's declare an array of objects representing report cards. We can access the length of the array. The first element of an array starts at 0 and the last one is at the position of length - 1</p>
<pre><code data-trim contenteditable>
var ReportCards = [
{ name: "Dan", Exam1: 85, Exam2: 90, Exam3: 75 },
{ name: "Elijah", Exam1: 65, Exam2: 80, Exam3: 75 },
{ name: "Jennifer", Exam1: 95, Exam2: 80, Exam3: 100 }
];

//Access the 1st element
ReportCards[0];

//Access the name of the 2nd element
ReportCards[1].name;
</code></pre>
</div>
</section>

<p>Now Let's iterate over our ReportCards array and calculate the average final score for each student.</p>
<p class="fragment">A <b>for</b> loop is composed of multiple statements: the initial position of the iterator (in this case we are using the variable i), the terminating position & finally the incrementor.  In most for loops it is only needed to increment by one using the operator i++.  This is equivalent to i = i + 1.</p>
<pre class="fragment"><code data-trim contenteditable>
for (var i = 0; i < ReportCards.length; i++) {
var card = ReportCards[i];
card.final = (card.Exam1 + card.Exam2 + card.Exam3) / 3;
}
</code></pre>
</section>
</section>


<h2>Functions</h2>
<p class="fragment">
Functions encapsulate a series of statements to represent a particular behavior. Functions become a critical mechanism when working with a large code base because they allow behaviors to be reusable.
<pre class="fragment"><code data-trim contenteditable>
function calculateAverage(numbers) {
var aggregate = 0;

for (var i = 0; i < numbers.length; i++) {
aggregate = aggregate + numbers[i];
}

return aggregate / numbers.length;
}

var set_of_numbers = [5, 10, 15];

calculateAverage(set_of_numbers);

var another_set_of_numbers = [100, 130, 150, 170, 200];

calculateAverage(another_set_of_numbers);
</code></pre>
</p>
</section>


<img src="img/jquery_hosting.png"></img>
<h1>jQuery</h1>
</section>


<h2>What is jQuery?</h2>
<p class="fragment">jQuery is a cross-browser JavaScript library originally developed by John Resig.  It simplifies DOM (Document Object Model) manipulation and standardizes the API between different browser environments. jQuery has gained incredible popularity for its ease of use and expressive syntax. </p>

<p class="fragment">Note: The DOM just means HTML accessible by JavaScript. Its effectively a snooty way of saying HTML when its live and programmable in a web browser. An API just stands for Application Programming Interface.  It means 'The way something can be programmatically accessed.'<p>
</section>


<h2>Selectors</h2>
<p class="fragment">jQuery offers an especially convenient way to select HTML elements by way of CSS selectors, as well as creating HTML fragments on the fly. </p>
<pre class="fragment"><code data-trim contenteditable>
//select all divs with the class button
$('div.button');

//select all table data cells whose parents are a table row with class even
$('tr.even > td');

//select by id (should only return one element)
$('#reportcards');
</code></pre>
<p class="fragment">$() is jQuery's magic function.  jQuery sacrifices verbose syntax in favor of short, expressive statements.  One of the jQuery framework's design decisions is to have a magic $() function that is context aware to the arguments being passed in.  In this case we are passing in a string representing a CSS selector, so jQuery knows to look for elements in our web page.</p>
</section>


<h2>DOM Fragments</h2>
<p class="fragment">Let's create a document fragment composed of an HTML string.  We will then use
jQuery's append() method to add it to our document body.</p>
<pre class="fragment"><code data-trim contenteditable>
var paragraph_fragment = $('<p>Hello World!</p>');

$('#paragraph-container').append(paragraph_fragment);
</code></pre>
<p class="fragment">jQuery's magic $() function recognized that our string represents HTML instead of a CSS selector, so it knows to create a document object which we can further manipulate.</p>
<pre class="fragment"><code data-trim contenteditable>
paragraph_fragment.addClass('red-border');
</code></pre>
<p class="fragment">We added the class 'red-border' to our paragraph tag.</p>
</section>



<h2>Interactive Modules</h2>
<p class="fragment">Let's create a carousel out of a set of images. We'll add the images to our HTML manually and then leverage a jQuery plugin to enhance the page with interactive behavior.</p>
<pre class="fragment"><code data-trim contenteditable>
<ul id="photo-carousel" class="jcarousel-skin-name">
<li>
<img src="image1.jpg" />
</li>
<li>
<img src="image2.jpg" />
</li>
<li>
<img src="image3.jpg" />
</li>
<li>
<img src="image4.jpg" />
</li>
</ul>
</code></pre>
</section>

<h3>Adding our jQuery module</h3>
<p class="fragment">We'll want to reference the jQuery resource in our document and initialize it once the document is ready.</p>
<pre class="fragment"><code data-trim contenteditable>
<ul id="photo-carousel" class="jcarousel-skin-name">
<li>
<img src="image1.jpg" />
</li>
<li>
<img src="image2.jpg" />
</li>
<li>
<img src="image3.jpg" />
</li>
<li>
<img src="image4.jpg" />
</li>
</ul>
</code></pre>
</section>
</section>


<h2>Expand your knowledge</h2>
<ul>
<li class="fragment">Code Academy: <a href="http://www.codecademy.com/tracks/javascript">http://www.codecademy.com/tracks/javascript</a></li>
<li class="fragment">JavaScript the Good Parts: <a href="http://shop.oreilly.com/product/9780596517748.do">http://shop.oreilly.com/product/9780596517748.do</a></li>
<li class="fragment">jQuery Documentation: <a href="http://api.jquery.com/">http://api.jquery.com/</a></li>
</ul>
</section>

<h2>Happy Scripting</h2>
<p>Elijah Meerson, Software Engineer at AppNexus.  <a href="https://twitter.com/elimeerson">@elimeerson</a></p>
<p class="fragment">Also I'm on Google+</p>
</section>
</div>