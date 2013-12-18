---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: single.jade
---

#animation-duration

The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.

A value of 0s, which is the default value, indicates that no animation should occur.

It is often convenient to use the shorthand property animation to set all animation properties at once.

Prop|Value
---|---
Initial| value0s
Applies to| all elements, ::before and ::afterpseudo-elements
Inherited |no
Media|visual
Computed value| as specified
Animatable| no
Canonical order| the unique non-ambiguous order defined by the formal grammar

##Syntax

	Formal syntax: <time>#
	animation-duration: 6s
	animation-duration: 120ms
	animation-duration: 1s, 15s
	animation-duration: 10s, 30s, 230ms

##Values

Prop|Value
---|---
`<time>`|The duration that an animation should take to complete one cycle. This may be specified in either seconds (by specifying s as the unit) or milliseconds (by specifying ms as the unit). If you don't specify a unit, the declaration will be invalid.

**Note:** Negative values are invalid, causing the declaration to be ignored. Note that some early, prefixed, implementations may consider them as identical to 0s.

##Examples

See CSS animations for examples.