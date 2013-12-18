---
title: Lesson 7
author: Dan Hahn
date: 2013-11-04 18:00
template: single.jade
---

#animation-play-state

The animation-play-state CSS property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.

Resuming a paused animation will start the animation from where it left off at the time it was paused, rather than starting over from the beginning of the animation sequence.

Prop|Value
---|---
Initial| valuerunning
Applies to| all elements, ::before and ::afterpseudo-elements
Inherited| no
Media|visual
Computed value| as specified
Animatable| no
Canonical order| the unique non-ambiguous order defined by the formal grammar

##Syntax

	Formal syntax: <single-animation-play-state>#
	animation-play-state: running
	animation-play-state: paused

	animation-play-state: paused, running, running

##Values

Prop|Value
---|---
running|The animation is currently playing.
paused|The animation is currently paused.

##Examples

See CSS animations for examples.