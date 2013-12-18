---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: single.jade
---

#animation-iteration-count

The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping.

It is often convenient to use the shorthand property animation to set all animation properties at once.

Prop|Value
---|---
Initial value|1
Applies to| all elements, ::before and ::afterpseudo-elements
Inherited|no
Mediav|isual
Computed value |as specified
Animatable| no
Canonical order| the unique non-ambiguous order defined by the formal grammar

##Syntax

	Formal syntax: <single-animation-iteration-count>#
	animation-iteration-count: infinite
	animation-iteration-count: 3
	animation-iteration-count: 2.3

	animation-iteration-count: 2, 0, infinite

##Values

Prop|Value
---|---
infinite|The animation will repeat forever.
`<number>`|The number of times the animation should repeat; this is 1 by default. Negative values are invalid. You may specify non-integer values to play part of an animation cycle (for example 0.5 will play half of the animation cycle).

##Examples

See CSS animations for examples.