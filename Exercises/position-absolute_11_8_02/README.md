# Absolutely Positioned Layouts.

Absolute positioning gives us full control over the size and position of any element, but it comes at a cost. An absolutely positioned element cannot affect the position of any other element on the page, so it can't push other elements out of the way if it expands.

If the position of an element doesn't need to affect the position of any other elements on the page, you have an absolute positioning candidate. Declare the element position absolute and optionally give it top and left values. If you don't need to worry about IE6, you can also give it bottom and right values.

## Exercise - Simple column layout

1.  Create an html file and linked stylesheet.
2.  Add four divs to the page
3.  Put text inside each of the divs
4.  Give each div a border do you can see where it is.
5.  Position each div absolutely.
6.  Give each div a top and left value to create something like the layout below.

![](http://nicholasjohnson.com/images/webdev/absolute.jpg)

## Exercise - Arbitrary layout

1.  Create an html file and linked stylesheet
2.  Add four divs to the page.
3.  Put text inside each of the divs to hold them open and make them more realistic.
4.  Give each div a border do you can see where it is.
5.  Position each div absolutely.
6.  Give each div a top and left value to create something like the layout below.

![](http://nicholasjohnson.com/images/webdev/absolute2.jpg)

You can create any layout you like using absolute positioning, provided you don't need the elements to jostle each other out of the way.

# Exercise - Header Layout

1.  Create an html file and linked stylesheet.
2.  Add a div to the page. Give it a class of header.
3.  Give the header div a width of 800px and a height of 150px in your stylesheet. Give it a border.
4.  Declare your header div position:relative. This will reset the origin for all absolutely positioned elements within it.
5.  Put three divs inside your header. Give them classes of logo, top-nav and menu.
6.  Position them appropriately using CSS and absolute positioning to create the following, useful, real world layout.

![](http://nicholasjohnson.com/images/webdev/absolute3.jpg)

Absolute positioning is useful in any element where we know the height in advance. It the case of our header, we have fixed the height so we don't need to worry about elements interfering with each other. We're free to chuck the header's contents around as we see fit.
