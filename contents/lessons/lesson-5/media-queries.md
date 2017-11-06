---
title: Lesson 5
lesson: Media Queries
author: Dan Hahn
date: 10/23/2017 18:00
template: article.jade

nav:
  Flexbox: index.html
  Flex Box Examples: flex-examples.html
  Media Queries: media-queries.html
---

Media queries are useful when you want to apply CSS styles depending on a device's general type (such as print vs. screen), specific characteristics (such as the width of the browser viewport), or environment (such as ambient light conditions). With the huge variety of internet-connected devices available today, media queries are a vital tool for building websites and apps that are robust enough to work on whatever hardware your users have.

## Targeting media types

Media types describe the general category of a given device. Although websites are commonly designed with screens in mind, you may want to create styles that target special devices such as printers or audio-based screenreaders. For example, this CSS targets printers:
```css
@media print { ... }
```
You can also target multiple devices. For instance, this @media rule uses two media queries to target both screen and print devices:
```css
@media screen, print { ... }
```
See media types for a list of all media types. Because they describe devices in only very broad terms, just a few are available; to target more specific attributes, use media features instead.

## Targeting media features

Media features describe the specific characteristics of a given user agent, output device, or environment. For instance, you can apply specific styles to widescreen monitors, computers that use mice, or to devices that are being used in low-light conditions. This example applies styles when the user's primary input mechanism (such as a mouse) can hover over elements:
```css
@media (hover: hover) { ... }
```
Many media features are range features, which means they can be prefixed with "min-" or "max-" to express "minimum condition" or "maximum condition" constraints. For example, this CSS will apply styles only if your browser's viewport width is equal to or narrower than 12,450px:
```css
@media (max-width: 12450px) { ... }
```
If you create a media feature query without specifying a value, the nested styles will be used as long as the feature's value is non-zero. For example, this CSS will apply to any device with a color screen:
```css
@media (color) { ... }
```
If a feature doesn't apply to the device on which the browser is running, expressions involving that media feature are always false. For example, the styles nested inside the following query will never be used, because no speech-only device has a screen aspect ratio:
```css
@media speech and (aspect-ratio: 11/5) { ... }
```
For more media feature examples, please see the reference page for each specific feature.

## Creating complex media queries

Sometimes you may want to create a media query that depends on multiple conditions. This is where the logical operators come in: not, and, and only. Furthermore, you can combine multiple media queries into a comma-separated list; this allows you to apply the same styles in different situations.

In the previous example, we've already seen the and operator used to group a media type with a media feature. The and operator can also combine multiple media features into a single media query. The not operator, meanwhile, negates a media query, basically reversing its normal meaning. The only operator prevents older browsers from applying the styles.

Note: In most cases, the all media type is used by default when no other type is specified. However, if you use the not or only operators, you must explicitly specify a media type.

`and`

The and keyword combines a media feature with a media type or other media features. This example combines two media features to restrict styles to landscape-oriented devices with a width of at least 30 ems:
```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```
To limit the styles to devices with a screen, you can chain the media features to the screen media type:
```css
@media screen and (min-width: 30em) and (orientation: landscape) { ...  }
```
## comma-separated lists

You can use a comma-separated list to apply styles when the user's device matches any one of various media types, features, or states. For instance, the following rule will apply its styles if the user's device has either a minimum height of 680px or is a screen device in portrait mode:
```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```
Taking the above example, if the user had a printer with a page height of 800px, the media statement would return true because the first query would apply. Likewise, if the user were on a smartphone in portrait mode with a viewport height of 480px, the second query would apply and the media statement would still return true.

`not`

The not keyword inverts the meaning of an entire media query. It will only negate the specific media query it is applied to. (Thus, it will not apply to every media query in a comma-separated list of media queries.) The not keyword can't be used to negate an individual feature query, only an entire media query. The not is evaluated last in the following query:
```css
@media not all and (monochrome) { ... }
```
... so that the above query is evaluated like this:
```css
@media not (all and (monochrome)) { ... }
```
... rather than like this:
```css
@media (not all) and (monochrome) { ... }
```
As another example, the following media query:
```css
@media not screen and (color), print and (color) { ... }
```
... is evaluated like this:
```css
@media (not (screen and (color))), print and (color) { ... }
```
`only`

The only keyword prevents older browsers that do not support media queries with media features from applying the given styles. It has no effect on modern browsers.
```html
<link rel="stylesheet" media="only screen and (color)" href="modern-styles.css" />
```