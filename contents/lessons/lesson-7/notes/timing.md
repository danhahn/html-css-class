---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: single.jade
---

#animation-timing-function

The CSS animation-timing-function property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several <timing-function>.

For keyframed animations, the timing function applies between keyframes rather than over the entire animation. In other words, the timing function is applied at the start of the keyframe and at the end of the keyframe.

An animation timing function defined within a keyframe block applies to that keyframe; otherwise. If no timing function is specified for the keyframe, the timing function specified for the overall animation is used.

It is often convenient to use the shorthand property animation to set all animation properties at once.

Prop|Value
---|---
Initial| valueease
Applies to| all elements, ::before and ::afterpseudo-elements
Inherited| no
Media|visual
Computed value| as specified
Animatable |no
Canonical order| the unique non-ambiguous order defined by the formal grammar

##Syntax

	Formal syntax:  <timing-function>#
	animation-timing-function: ease
	animation-timing-function: ease-in
	animation-timing-function: ease-out
	animation-timing-function: ease-in-out
	animation-timing-function: linear
	animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1)
	animation-timing-function: step-start
	animation-timing-function: step-stop
	animation-timing-function: steps(4, end)

	animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1)

##Values

Prop|Value
---|---
`<timingfunction>`|Each `<timing-function>` represents the timing function to link to the corresponding property to animate, as defined in animation-property.

##Examples

See CSS animations for examples.