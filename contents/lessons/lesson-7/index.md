---
title: Lesson 7
author: Dan Hahn
date: 2013-07-22 18:00
template: article.jade
---

This week we will be talking about resonsive design and media queries.  We will also talk about LESS and SASS.

<span class="more"></span>

#Media Queries

* [Media Querie]()
* [LESS](less.html)

[Downlaod Notes  <i class="icon-download-alt icon-white"></i>](week7-notes.zip)
[Downlaod Starter File  <i class="icon-download-alt icon-white"></i>](week7.zip)

A *media query* consists of a media type and at least one expression that limits the style sheets' scope by using media features, such as width, height, and color. Media queries, added in CSS3, let the presentation of content be tailored to a specific range of output devices without having to change the content itself.

###Syntax

Media queries consist of a media type and can, as of the CSS3 specification, contain one or more expressions, expressed as media features, which resolve to either true or false.  The result of the query is true if the media type specified in the media query matches the type of device the document is being displayed on and all expressions in the media query are true.

	<!-- CSS media query on a link element -->
	<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

	<!-- CSS media query within a style sheet -->
	<style>
	@media (max-width: 600px) {
	  .facet_sidebar {
	    display: none;
	  }
	}
	</style>

When a media query is true, the corresponding style sheet or style rules are applied, following the normal cascading rules. Style sheets with media queries attached to their `<link>` tags will still download even if their media queries would return false (they will not apply, however).

Unless you use the `not` or `only` operators, the media type is optional and the all type will be implied.

###Logical operators

You can compose complex media queries using logical operators, including `not`, `and`, and `only`. The and operator is used for combining multiple media features together into a single media query, requiring each chained feature to return true in order for the query to be true. The not operator is used to negate an entire media query. The `only` operator is used to apply a style only if the entire query matches, useful for preventing older browsers from applying selected styles. If you use the not or only operators, you must specify an explicit media type.

You can also combine multiple media queries in a comma-separated list; if any of the media queries in the list is true, the entire media statement returns true. This is equivalent to an or operator.

####and

The and keyword is used for combining multiple media features together, as well as combining media features with media types. A basic media query, a single media feature with the implied all media type, could look like this:

	@media (min-width: 700px) { ... }

If, however, you wanted this to apply only if the display is in landscape, you could use an and operator to chain the media features together.

	@media (min-width: 700px) and (orientation: landscape) { ... }

Now the above media query will only return true if the viewport is 700px wide or wider and the display is in landscape. If, however, you only wanted this to apply if the display in question was of the media type TV, you could chain these features with a media type using an and operator.

	@media tv and (min-width: 700px) and (orientation: landscape) { ... }

Now, the above media query will only apply if the media type is TV, the viewport is 700px wide or wider, and the display is in landscape.

###comma-separated lists

Comma-separated lists behave like the logical operator or when used in media queries. When using a comma-separated list of media queries, if any of the media queries returns true, the styles or style sheets get applied. Each media query in a comma-separated list is treated as an individual query, and any operator applied to one media query does not affect the others. This means the comma-separated media queries can target different media features, types, and states.

For instance, if you wanted to apply a set of styles if the viewing device either had a minimum width of 700px or was a handheld in landscape, you could write the following:

	@media (min-width: 700px), handheld and (orientation: landscape) { ... }

Above, if I were on a screen device with a viewport width of 800px, the media statement would return true because the first part, interperated as @media all and (min-width: 700px) would apply to my device and therefore return true, despite the fact that my screen device would fail the handheld media type check in the second media query. Likewise, if I were on a handheld device held in landscape with a viewport width of 500px, while the first media query would fail due to the viewport width, the second media query would succeed and thus the media statement would return true.

####not

The not keyword applies to the whole media query and returns true if the media query would otherwise return false (such as monochrome on a color display or a screen width of 600px with a min-width: 700px feature query). A not will only negate the media query it is applied to and not to every media query if present in a comma-separated list of media queries. The not keyword cannot be used to negate an individual feature query, only an entire media query. For example, the not is evaluated last in the following query:

	@media not all and (monochrome) { ... }

This means that the query is evaluated like this:

	@media not (all and (monochrome)) { ... }

... rather than like this:

	@media (not all) and (monochrome) { ... }

As another example, look at the following media query:

	@media not screen and (color), print and (color)

It is evaluated like this:


	@media (not (screen and (color))), print and (color)

####only

The only keyword prevents older browsers that do not support media queries with media features from applying the given styles:

	<link rel="stylesheet" media="only screen and (color)" href="example.css" />

**Note:** this content was not written by me I copied it form [https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)