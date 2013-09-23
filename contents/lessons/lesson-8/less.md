---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: article.jade
---

#LESS (stylesheet language)

* [Media Querie]()
* [LESS](less.html)

LESS allows variables to be defined. LESS variables are defined with an at sign`(@)`. Variable assignment is done with a colon `(:)`.
During translation, the values of the variables are inserted into the output CSS document.

	@color: #4D926F;

	#header {
	  color: @color;
	}
	h2 {
	  color: @color;
	}

The above code in LESS would compile to the following CSS code.

	#header {
	  color: #4D926F;
	}
	h2 {
	  color: #4D926F;
	}

##Mixins

Mixins allow embedding all the properties of a class into another class by including the class name as one of its properties, thus behaving as a sort of constant or variable. They can also behave like functions, and take arguments. CSS does not support Mixins. Any repeated code must be repeated in each location. Mixins allow for more efficient and clean code repetitions, as well as easier alteration of code.

	.rounded-corners (@radius: 5px) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -moz-border-radius: @radius;
	}

	#header {
	  .rounded-corners;
	}
	#footer {
	  .rounded-corners(10px);
	}

The above code in LESS would compile to the following CSS code:

	#header {
	  border-radius: 5px;
	  -webkit-border-radius: 5px;
	  -moz-border-radius: 5px;
	}
	#footer {
	  border-radius: 10px;
	  -webkit-border-radius: 10px;
	  -moz-border-radius: 10px;
	}

LESS has a special type of ruleset called parametric mixins which can be mixed in like classes, but accepts parameters.

##Nesting

CSS supports logical nesting, but the code blocks themselves are not nested. LESS allows nesting of selectors inside other selectors. This makes inheritance clear and style sheets shorter.[4]

	#header {
	  h1 {
	    font-size: 26px;
	    font-weight: bold;
	  }
	  p {
	    font-size: 12px;
	    a {
	      text-decoration: none;
	      &:hover {
	        border-width: 1px;
	      }
	    }
	  }
	}

The above code in LESS would compile to the following CSS code:

	#header h1 {
	  font-size: 26px;
	  font-weight: bold;
	}
	#header p {
	  font-size: 12px;
	}
	#header p a {
	  text-decoration: none;
	}
	#header p a:hover {
	  border-width: 1px;
	}

##Functions and operations

LESS allows operations and functions. Operations allow addition, subtraction, division and multiplication of property values and colors, which can be used to create complex relationships between properties. Functions map one-to-one with JavaScript code, allowing manipulation of values.

	@the-border: 1px;
	@base-color: #111;
	@red:        #842210;

	#header {
	  color: @base-color * 3;
	  border-left: @the-border;
	  border-right: @the-border * 2;
	}
	#footer {
	  color: @base-color + #003300;
	  border-color: desaturate(@red, 10%);
	}
	The above code in LESS would compile to the following CSS code:
	#header {
	  color: #333;
	  border-left: 1px;
	  border-right: 2px;
	}
	#footer {
	  color: #114411;
	  border-color: #7d2717;
	}

##Comparison

###SASS
Both Sass and LESS are CSS preprocessors, which allow writing clean CSS in a programming construct instead of static rules.
As of LESS 1.4, LESS supports nested, inherited rules via the &:extends and @extends pseudo-selector. Prior to this, a main difference between LESS and other preprocessors like SASS was the lack of an @extends directive, which would extend an already-existing class to include more rules, leading to clean CSS without duplicated rules.

LESS is inspired by Sass. Sass was designed to both simplify and extend CSS, so things like curly braces were removed from the syntax. LESS was designed to be as close to CSS as possible, so the syntax is identical to existing CSS code. As a result, existing CSS can be used as valid LESS code.
The newer versions of Sass also introduced a CSS-like syntax called SCSS (Sassy CSS).
For more syntax comparisons, see https://gist.github.com/674726.

**Note:** I did not write this I copied it from [http://en.wikipedia.org/wiki/LESS_(stylesheet_language)](http://en.wikipedia.org/wiki/LESS_stylesheet_language)