---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: single.jade
---

#animation-direction

The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.

It is often convenient to use the shorthand property animation to set all animation properties at once.

Prop|Value
---|---
Initial| valuenormal
Applies to| all elements, ::before and ::afterpseudo-elements
Inherited |no
Media|visual
Computed value |as specified
Animatable| no
Canonical order| the unique non-ambiguous order defined by the formal grammar

##Syntax

	Formal syntax:  <single-animation-direction>#
	animation-direction: normal
	animation-direction: reverse
	animation-direction: alternate
	animation-direction: alternate-reverse
	animation-direction: normal, reverse
	animation-direction: alternate, reverse, normal

##Values

Prop|Value
---|---
normal|The animation should play forward each cycle. In other words, each time the animation cycles, the animation will reset to the beginning state and start over again. This is the default animation direction setting.
alternate|The animation should reverse direction each cycle. When playing in reverse, the animation steps are performed backward. In addition, timing functions are also reversed; for example, an ease-in animation is replaced with an ease-out animation when played in reverse. The count to determinate if it is an even or an odd iteration starts at one.
reverse|The animation plays backward each cycle. Each time the animation cycles, the animation resets to the end state and start over again.
alternate-reverse|The animation plays backward on the first play-through, then forward on the next, then continues to alternate. The count to determinate if it is an even or an odd iteration starts at one.

##Examples

See CSS animations for examples.