---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: single.jade
---

#animation-name

The animation-name CSS property specifies a list of animations that should be applied to the selected element. Each name indicates a @keyframes at-rule that defines the property values for the animation sequence.

It is often convenient to use the shorthand property animation to set all animation properties at once.

Prop|Value
---|---
Initial| valuenone
Applies to| all elements, ::before and ::afterpseudo-elements
Inherited |no
Media|visual
Computed value |as specified
Animatable| no
Canonical order| the unique non-ambiguous order defined by the formal grammar

##Syntax

	Formal syntax: <single-animation-name>#
	animation-name: none
	animation-name: test_05
	animation-name: -specific
	animation-name: sliding-vertically

	animation-name: test1
	animation-name: test1, animation4
	animation-name: none, -moz-specific, sliding

##Values

Prop|Value
---|---
none|Is a special keyword denoting no keyframes. It can be used to deactivate an animation without changing the ordering of the other identifiers, or to deactivate animations coming from the cascade.
IDENT|A string identifying the animation. This identifier is composed by a combination of case-insensitive letters a to z, numbers 0 to 9, underscores (_), and/or dashes (-). The first non-dash character must be a letter (that is, no number at the beginning of it, even if preceded by a dash.) Also, two dashes are forbidden at the beginning of the identifier.

##Examples

See CSS animations for examples.