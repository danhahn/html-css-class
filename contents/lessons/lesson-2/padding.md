---
title: Lesson 2
author: Dan Hahn
date: 9/28/2015 18:00
template: article.jade
---

#Padding

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

Padding is the space from the `border` in to the content. Even if a border is not defined there is still an edge of the element, this is the `border`.

Padding will define all four sides of the box one value is set. If you need to define the padding of just one side of the box you can use `padding-[top,right,bottom,left]`.

###Example

    padding-top: 20px;
    padding-bottom: 20px;

###Other values for padding

* When padding has only one value `padding: 20px;` it will define that value 20px the same on **all four sides**.
* When padding has two values `padding: 10px 20px;` it defines 10px for the **top and bottom** and 20px on the **left and right**.
* When padding has three values `padding: 10px 5px 30px;` it defines 10px for the **top** 5px for the **left and right**, and 30px for the **bottom**.
* When Padding has four values `padding: 10px 20px 30px 40px;` it will define 10px for the **top**, 20px for the **right**, 30px for the **bottom**, and 40px for the **left**.

###Again
    padding: (All Sides);
    padding: (top and bottom) (left and right);
    padding: (top) (left and right) (bottom);
    padding: (top) (right) (bottom) (left);

**Note:** you will never user a comma only a space.  If you use a comma it will not work.
