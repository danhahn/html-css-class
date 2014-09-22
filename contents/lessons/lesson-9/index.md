---
title: Lesson 9
author: Dan Hahn
date: 2014-11-17
template: article.jade
---

This week we will be working on how to build some cool things with CSS.

<span class="more"></span>

# Flex Box

* [Flex Box]()

[Downlaod Starter File  <i class="icon-download-alt icon-white"></i>](week9.zip)

The CSS3 Flexible Box, or flexbox, is a layout mode providing for the arrangement of elements on a page such that the elements behave predictably when the page layout must accommodate different screen sizes and different display devices. For many applications, the flexible box model provides an improvement over the block model in that it does not use floats, nor do the flex container's margins collapse with the margins of its contents.

Many designers will find the flexbox model easier to use. Child elements in a flexbox can be laid out in any direction and can have flexible dimensions to adapt to the display space. Positioning child elements is thus much easier, and complex layouts can be achieved more simply and with cleaner code, as the display order of the elements is independent of their order in the source code. This independence intentionally affects only the visual rendering, leaving speech order and navigation based on the source order.

**Note:** Though CSS Flexible Boxes Layout specification is at the Candidate Recommendation stage, not all browsers have implemented it. WebKit implementation must be prefixed with -webkit; Internet Explorer implements an old version of the spec, prefixed; Opera 12.10 implements the latest version of the spec, unprefixed. See the compatibility table on each property for an up-to-date compatibility status.

##Flexible boxes concept

The defining aspect of the flex layout is the ability to alter its items' width and/or height to best fill the available space on any display device. A flex container expands items to fill available free space, or shrinks them to prevent overflow.

The flexbox layout algorithm is direction-agnostic as opposed to the block layout, which is vertically-biased, or the inline layout, which is horizontally-biased. While the block layout works well for pages, it lacks sufficient definition to support application components that have to change orientation, resize, stretch, or shrink as the user agent changes, flips from vertical to horizontal, and so forth. Flexbox layout is most appropriate for the components of an application, and small-scale layouts, while the (emerging) Grid layout is intended for larger scale layouts. Both are part of a wider effort of the CSS Working Group to provide for greater interoperability of web applications with different user agents, different writing modes, and other demands on flexibility.

##Flexible boxes vocabulary

While a discussion of flexible boxes is liberated from terms like horizontal/inline axis and vertical/block axis, it requires a new terminology to properly describe the model. Consider the following diagram when reviewing the vocabulary items below. It shows a flex container that has a flex-direction of row, meaning that the flex items follow each other horizontally across the main axis according to the established writing mode, the direction in which the element's text flows, in this case left-to-right.

![Flex Box](flex_terms.png)

###Flex container
The parent element in which flex items are contained. A flex container is defined using the flex or inline-flex values of the display property.


###Flex item

Each child of a flex container becomes a flex item. Text directly contained in a flex container is wrapped in an anonymous flex item.

###Axes
Every flexible box layout follows two axes. The main axis is the axis along which the flex items follow each other. The cross axis is the axis perpendicular to the main axis.

* The flex-direction property establishes the main axis.
* The justify-content property defines how flex items are laid out along the main axis on the current line.
* The align-items property defines the default for how flex items are laid out along the cross axis on the current line.
* The align-self property defines how a single flex item is aligned on the cross axis, and overrides the default established by align-items.

###Directions
The main start/main end and cross start/cross end sides of the flex container describe the origin and terminus of the flow of flex items. They follow the main axis and cross axis of the flex container in the vector established by the writing-mode (left-to-right, right-to-left, etc.).

* The order property assigns elements to ordinal groups and determines which elements appear first.
* The flex-flow property shorthands the flex-direction and flex-wrap properties to lay out the flex items.

###Lines

Flex items can be laid out on either a single line or on several lines according to the flex-wrap property, which controls the direction of the cross axis and the direction in which new lines are stacked.

###Dimensions
The flex items' agnostic equivalents of height and width are main size and cross size, which respectively follow the main axis and cross axis of the flex container.

* The min-height and min-width properties have a new value, auto that establishes the minimum size of a flex item.
* The flex property shorthands the flex-basis, flex-grow, and flex-shrink properties to establish the flexibility of the flex items.

##Designating a flexible box

To designate the CSS for elements using this style, set the display property as follows:

	display : flex

or

	display : inline-flex

Doing so defines the element as a flex container and its children as flex items. The flex value makes the flex container a block-level element. The inline-flex value makes the flex container an atomic inline-level element.

**Note:** For the vendor prefix tag, append the string on the display property, not on the display attribute itself. For example, display : -webkit-flex.

##Flex item considerations

Text that is directly contained inside a flex container is automatically wrapped in an anonymous flex item. However, an anonymous flex item that contains only white space is not rendered, as if it were designated display:none.

Absolutely positioned children of a flex container are positioned so that their static position is determined in reference to the main start content-box corner of their flex container.

Currently, due to a known issue, specifying visibility:collapse on a flex item causes it to be treated as if it were display:none instead of the intended behavior, treating it as if it were visibility:hidden. The suggested workaround until this issue is resolved is to use visibility:hidden for flex items that should behave as if they were designated visibility:collapse. For more information, see bug 783470.

The margins of adjacent flex items do not collapse. Using auto margins absorbs extra space in the vertical or horizontal direction and can be used for alignment or to separate adjacent flex items. See Aligning with 'auto' margins in the W3C Flexible Box Layout Model specification for more details.

To ensure a reasonable default minimum size for flex items, use min-width:auto and/or min-height:auto. For flex items, the auto attribute value calculates the minimum width/height of the item to be no less than the width/height of its content, guaranteeing that the item is rendered large enough to hold the content. See min-width  and min-height for more details.

Flexbox's alignment properties do "true" centering, unlike other centering methods in CSS. This means that the flex items will stay centered, even if they overflow the flex container. This can sometimes be problematic, however, if they overflow past the top edge of the page, or the left edge (in LTR languages like English; the problem occurs on the right edge in RTL languages like Arabic), as you can't scroll to that area, even if there is content there! In a future release, the alignment properties will be extended to have a "safe" option as well. For now, if this is a concern, you can instead use margins to achieve centering, as they'll respond in a "safe" way and stop centering if they overflow. Instead of using the align- properties, just put auto margins on the flex items you wish to center. Instead of the justify- properties, put auto margins on the outside edges of the first and last flex items in the flex container. The auto margins will "flex" and assume the leftover space, centering the flex items when there is leftover space, and switching to normal alignment when not. However, if you're trying to replace justify-content with margin-based centering in a multi-line flexbox, you're probably out of luck, as you need to put the margins on the first and last flex item on each line. Unless you can predict ahead of time which items will end up on which line, you can't reliably use margin-based centering in the main axis to replace the justify-content property.

Recall that while the display order of the elements is independent of their order in the source code, this independence affects only the visual rendering, leaving speech order and navigation based on the source order. Even the order property does not affect speech or navigation sequence. Thus developers must take care to order elements properly in the source so as not to damage the document's accessibility.

##Flexible box properties

Flexible-boxes-related properties: margin, align-content, align-items, align-self, display, flex, flex-basis, flex-direction, flex-flow, flex-grow, flex-shrink, flex-wrap, justify-content, min-height, min-width, order

Properties not affecting flexible boxes

Because flexible boxes use a different layout algorithm, some properties do not make sense on a flex container:

* column-* properties of the Multicol module have no effect on a flex item.
* float and clear have no effect on a flex item. Using float causes the display property of the element to compute to block.
* vertical-align has no effect on the alignment of flex items.

##Examples

###Basic flex example

This basic example shows how to apply "flexibility" to an element and how sibling elements behave in a flexible state.

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <style>

	   .flex
	   {
	      /* basic styling */
	      width: 350px;
	      height: 200px;
	      border: 1px solid #555;
	      font: 14px Arial;

	      /* flexbox setup */
	      display: -webkit-flex;
	      -webkit-flex-direction: row;

	      display: flex;
	      flex-direction: row;
	   }

	   .flex > div
	   {
	      -webkit-flex: 1 1 auto;
	      flex: 1 1 auto;

	      width: 30px; /* To make the transition work nicely.  (Transitions to/from
	                      "width:auto" are buggy in Gecko and Webkit, at least.
	                      See http://bugzil.la/731886 for more info.) */

	      -webkit-transition: width 0.7s ease-out;
	      transition: width 0.7s ease-out;
	   }

	   /* colors */
	   .flex > div:nth-child(1){ background : #009246; }
	   .flex > div:nth-child(2){ background : #F1F2F1; }
	   .flex > div:nth-child(3){ background : #CE2B37; }

	   .flex > div:hover
	   {
	        width: 200px;
	   }

	   </style>

	 </head>
	 <body>
	  <p>Flexbox nuovo</p>
	  <div class="flex">
	    <div>uno</div>
	    <div>due</div>
	    <div>tre</div>
	  </div>
	 </body>
	</html>

##Holy Grail Layout example

This example demonstrates how flexbox provides the ability to dynamically change the layout for different screen resolutions. The following diagram illustrates the transformation.

![Holly Grail](HolyGrailLayout.png)

Illustrated here is the case where the page layout suited to a browser window must be optimized for a smart phone window. Not only must the elements reduce in size, but the order in which they are presented must change. Flexbox makes this very simple.

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <style>

	  body {
	   font: 24px Helvetica;
	   background: #999999;
	  }

	  #main {
	   min-height: 800px;
	   margin: 0px;
	   padding: 0px;
	   display: -webkit-flex;
	   display:         flex;
	   -webkit-flex-flow: row;
	           flex-flow: row;
	   }

	  #main > article {
	   margin: 4px;
	   padding: 5px;
	   border: 1px solid #cccc33;
	   border-radius: 7pt;
	   background: #dddd88;
	   -webkit-flex: 3 1 60%;
	           flex: 3 1 60%;
	   -webkit-order: 2;
	           order: 2;
	   }

	  #main > nav {
	   margin: 4px;
	   padding: 5px;
	   border: 1px solid #8888bb;
	   border-radius: 7pt;
	   background: #ccccff;
	   -webkit-flex: 1 6 20%;
	           flex: 1 6 20%;
	   -webkit-order: 1;
	           order: 1;
	   }

	  #main > aside {
	   margin: 4px;
	   padding: 5px;
	   border: 1px solid #8888bb;
	   border-radius: 7pt;
	   background: #ccccff;
	   -webkit-flex: 1 6 20%;
	           flex: 1 6 20%;
	   -webkit-order: 3;
	           order: 3;
	   }

	  header, footer {
	   display: block;
	   margin: 4px;
	   padding: 5px;
	   min-height: 100px;
	   border: 1px solid #eebb55;
	   border-radius: 7pt;
	   background: #ffeebb;
	   }

	  /* Too narrow to support three columns */
	  @media all and (max-width: 640px) {

	   #main, #page {
	    -webkit-flex-flow: column;
	            flex-flow: column;
	   }

	   #main > article, #main > nav, #main > aside {
	    /* Return them to document order */
	    -webkit-order: 0;
	            order: 0;
	   }

	   #main > nav, #main > aside, header, footer {
	    min-height: 50px;
	    max-height: 50px;
	   }
	  }

	 </style>
	  </head>
	  <body>
	 <header>header</header>
	 <div id='main'>
	    <article>article</article>
	    <nav>nav</nav>
	    <aside>aside</aside>
	 </div>
	 <footer>footer</footer>
	  </body>
	</html>

