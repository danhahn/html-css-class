---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: single.jade
---

#animation-delay

The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element.

A value of 0s, which is the default value of the property, indicates that the animation should begin as soon as it's applied. Otherwise, the value specifies an offset from the moment the animation is applied to the element; animation will begin that amount of time after being applied.

Specifying a negative value for the animation delay causes the animation to begin executing immediately. However, it will appear to have begun executing partway through its cycle. For example, if you specify -1s as the animation delay time, the animation will begin immediately but will start 1 second into the animation sequence.

If you specify a negative value for the animation delay, but the starting value is implicit, the starting value is taken from the moment the animation is applied to the element.

It is often convenient to use the shorthand property animation to set all animation properties at once.

Prop|Value
---|---
Initial value|0s
Applies to|all elements, ::before and ::afterpseudo-elements
Inherited|no
Mediav|isual
Computed value |as specified
Animatable|no
Canonical order|the unique non-ambiguous order defined by the formal grammar

##Syntax

	Formal syntax: <time>#
	animation-delay: 3s
	animation-delay: 2s, 4ms

##Values

Prop|Value
---|---
`<time>`|The time offset from the time at which the animation is applied to the element at which the animation should begin. This may be specified in either seconds (by specifying s as the unit) or milliseconds (by specifying ms as the unit). If you don't specify a unit, the statement is invalid.
Examples

See CSS animations for examples.