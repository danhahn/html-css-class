---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: single.jade
---

#animation-fill-mode

The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.

Prop|Value
---|---
Initial| valuenone
Applies to| all elements, ::before and ::afterpseudo-elements
Inherited |no
Media|visual
Computed value| as specified
Animatable| no
Canonical order| the unique non-ambiguous order defined by the formal grammar

##Syntax

	Formal syntax: <single-animation-fill-mode>#
	animation-fill-mode: none
	animation-fill-mode: forwards
	animation-fill-mode: backwards
	animation-fill-mode: both

The # indicates that several values may be given, separated by commas.

Each applies to the animation defined in the same order in animation-name.
animation-fill-mode: none, backwards
animation-fill-mode: both, forwards, none
Values

none
The animation will not apply any styles to the target before or after it is executing.
forwards
The target will retain the computed values set by the last keyframe encountered during execution. The last keyframe encountered depends on the value of animation-direction and animation-iteration-count:
animation-direction	animation-iteration-count	last keyframe encountered
normal	even or odd	100% or to
reverse	even or odd	0% or from
alternate	even	0% or from
alternate	odd	100% or to
alternate-reverse	even	100% or to
alternate-reverse	odd	0% or from
backwards
The animation will apply the values defined in the first relevant keyframe as soon as it is applied to the target, and retain this during the animation-delay period. The first relevant keyframe depends of the value of animation-direction:
animation-direction	first relevant keyframe
normal or alternate	0% or from
reverse or alternate-reverse	100% or to
both
The animation will follow the rules for both forwards and backwards, thus extending the animation properties in both directions.
Examples

h1 {
  animation-fill-mode: forwards;
}
