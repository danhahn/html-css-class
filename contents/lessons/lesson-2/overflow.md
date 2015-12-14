---
title: Lesson 2
author: Dan Hahn
date: 9/28/2015 18:00
template: article.jade
---

# Overflow

* [Font Properites]()
* [Text Properties](text.html)
* [Include File](include.html)
* [Define a color](color.html)
* [CSS Units](sizes.html)
* [Borders](borders.html)
* [Padding](padding.html)
* [Margin](margin.html)
* [Pseudo](pseudo.html)
* [overflow](overflow.html)
* [Homework](homework.html)

Overflow is how an element deals with content that is greater than the space it has to display. This will happen when an element has a height defined on it. When an element has a width defined that width will not change but the element will grow in height. If a height is set the element will not grow past that height even if the content is greater than that space.

When the overflow property is set it tells the element how to deal with the extra content. There are four options

* Visible
* Hidden
* Auto
* Scroll

## Visible
When visible is set the extra content will overflow the element and is seen in the screen. It may overlap other content below it.

    overflow: visible;

### Example

<div class="overflow">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis nisl quis arcu commodo tempor. Cras at libero eu lacus rutrum dapibus. Donec id nibh diam. Nullam ullamcorper eros a eros imperdiet ultricies. Aliquam eget dolor ut velit commodo placerat. Aenean mattis sed augue vitae rhoncus. Praesent vel quam condimentum, condimentum dolor eget, sollicitudin purus. Integer elementum consequat mauris id aliquam. Donec in dolor consectetur, molestie diam sed, faucibus ipsum. Praesent non nisi vel diam tempor tincidunt ornare ac felis. Aenean nec eros consequat nisl dignissim elementum a a odio. Praesent metus tellus, molestie ut luctus sit amet, hendrerit eget nulla. Nulla quis tristique neque. Pellentesque lacinia massa non eros porttitor, non fringilla sem mollis. Integer vitae nulla et justo placerat consectetur. Fusce eu turpis at ante gravida semper quis vitae lectus.</div>

## Hidden

When hidden is she the extra content will not be seen. The element will just be the size but if the content is greater than the size the user will not be able to see it.

    overflow: hidden;

### Example

<div class="overflow" style="overflow: hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis nisl quis arcu commodo tempor. Cras at libero eu lacus rutrum dapibus. Donec id nibh diam. Nullam ullamcorper eros a eros imperdiet ultricies. Aliquam eget dolor ut velit commodo placerat. Aenean mattis sed augue vitae rhoncus. Praesent vel quam condimentum, condimentum dolor eget, sollicitudin purus. Integer elementum consequat mauris id aliquam. Donec in dolor consectetur, molestie diam sed, faucibus ipsum. Praesent non nisi vel diam tempor tincidunt ornare ac felis. Aenean nec eros consequat nisl dignissim elementum a a odio. Praesent metus tellus, molestie ut luctus sit amet, hendrerit eget nulla. Nulla quis tristique neque. Pellentesque lacinia massa non eros porttitor, non fringilla sem mollis. Integer vitae nulla et justo placerat consectetur. Fusce eu turpis at ante gravida semper quis vitae lectus.</div>


## Auto

Like hidden the content that is greater than the element will not be seen but if they are needed scrollbars will appear.

    overflow: auto;

### Example

<div class="overflow" style="overflow: auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis nisl quis arcu commodo tempor. Cras at libero eu lacus rutrum dapibus. Donec id nibh diam. Nullam ullamcorper eros a eros imperdiet ultricies. Aliquam eget dolor ut velit commodo placerat. Aenean mattis sed augue vitae rhoncus. Praesent vel quam condimentum, condimentum dolor eget, sollicitudin purus. Integer elementum consequat mauris id aliquam. Donec in dolor consectetur, molestie diam sed, faucibus ipsum. Praesent non nisi vel diam tempor tincidunt ornare ac felis. Aenean nec eros consequat nisl dignissim elementum a a odio. Praesent metus tellus, molestie ut luctus sit amet, hendrerit eget nulla. Nulla quis tristique neque. Pellentesque lacinia massa non eros porttitor, non fringilla sem mollis. Integer vitae nulla et justo placerat consectetur. Fusce eu turpis at ante gravida semper quis vitae lectus.</div>


## Scroll

In this case scroll bars will be present at all times even if they are not needed.

    overflow: scroll;

### Example

<div class="overflow" style="overflow: scroll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis nisl quis arcu commodo tempor. Cras at libero eu lacus rutrum dapibus. Donec id nibh diam. Nullam ullamcorper eros a eros imperdiet ultricies. Aliquam eget dolor ut velit commodo placerat. Aenean mattis sed augue vitae rhoncus. Praesent vel quam condimentum, condimentum dolor eget, sollicitudin purus. Integer elementum consequat mauris id aliquam. Donec in dolor consectetur, molestie diam sed, faucibus ipsum. Praesent non nisi vel diam tempor tincidunt ornare ac felis. Aenean nec eros consequat nisl dignissim elementum a a odio. Praesent metus tellus, molestie ut luctus sit amet, hendrerit eget nulla. Nulla quis tristique neque. Pellentesque lacinia massa non eros porttitor, non fringilla sem mollis. Integer vitae nulla et justo placerat consectetur. Fusce eu turpis at ante gravida semper quis vitae lectus.</div>
