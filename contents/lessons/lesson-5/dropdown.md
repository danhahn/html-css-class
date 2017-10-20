---
title: Lesson 5
lesson: Dropdowns
author: Dan Hahn
date: 10/23/2017 18:00
template: article.jade
nav:
  Backgrounds: index.html
  Gradients: gradients.html
  Drop Down: dropdown.html

---

One of the most requested things in web design is to have a navigation with any layers. Often we need to have sub items under a main item within our navigation. When this happens we will want to display the content only when a the users mouse moves over the nav item.

In the past this would need to be done with Javascript but JS can be hard to work with and adds a layer of complexity that may not be needed.

Today we can do this dropdown with a 100% css solution.

### Set up

To get started we need to understand and use HTML correct to organize our content. Lets say we have a small site that only has three main sections.

* News
* Weather
* Contact Us

We have now expaned each section to have a few subsections and made each item a link.  Even if we have a sub list we should also make the top nav item a link incase someone is using a touch screen since there is no hover.

* [News](#)
	* [Top Stories](#)
	* [Entertainment](#)
* [Weather](#)
	* [5 Day](#)
	* [Weekend](#)
* [Contact Us](#)
	* [Email](#)
	* [Phone](#)
	* [Facebook](#)
	* [Skype](#)
	* [Telegraph](#)

If we were to make this structure into HTML it would look something like this. We also wrapped it with the `<nav>` and gave it a `id="globalNav`.

	<nav>
		<ul id="gloablNav">
			<li>
				<a href="/lessons/lesson-5/#">News</a>
				<ul>
					<li><a href="/lessons/lesson-5/#">Top Stories</a></li>
					<li><a href="/lessons/lesson-5/#">Entertainment</a></li>
				</ul>
			</li>
			<li>
				<a href="/lessons/lesson-5/#">Weather</a>
				<ul>
					<li><a href="/lessons/lesson-5/#">5 Day</a></li>
					<li><a href="/lessons/lesson-5/#">Weekend</a></li>
				</ul>
			</li>
			<li>
				<a href="/lessons/lesson-5/#">Contact Us</a>
				<ul>
					<li><a href="/lessons/lesson-5/#">Email</a></li>
					<li><a href="/lessons/lesson-5/#">Phone</a></li>
					<li><a href="/lessons/lesson-5/#">Facebook</a></li>
					<li><a href="/lessons/lesson-5/#">Skype</a></li>
					<li><a href="/lessons/lesson-5/#">Telegraph</a></li>
				</ul>
			</li>
		</ul>
	</nav>

### The CSS

In other examples we have created a single level navigation by floating the `<li>`. We are going to build off this.

#### Floating the `<li>`
We need to float the `<li>` to the left to stack them.

	# globalNav li {
	 	float: left;
	}

This will float all `<li>` includeing the second level nav.  But if we change the selector a bit to target only the drirect decendents only the top leve will float.

	#globalNav > li {
        float: left;
    }

#### Making the dropdown
At this point we have an issue.  We do not have a dropdown.  The way the dropdown works is the sub nav item overlays the rest of the content.  To do this we need to add `position: absolute;` to the child `<ul>`.  This will pull it from the flow but put it right back where it was.

	#globalNav ul {
	 	position: absolute;
	}

#### Hiding the sub lists
Now we Need to hide the sub list from view.  This can be done by adding the `display: none;` property.

	#globalNav ul {
		position: absolute;
	 	display: none;
	}

#### Showing sub nav
Now we need to have the subitem display only when its partent havs the mouse move over it.   We need to add `:hover` to the toplevel `<li>` and set `display: block;` on the `<ul>`.

	#globalNav > li:hover ul {
	 	display: block.
	}

## Example

[Working Example](example-dropdown.html)
