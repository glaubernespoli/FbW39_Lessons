# Float layouts

If the position of an element does need to affect the position of other elements on the page then you might want to consider a float layout. Let's say for example, you have some text columns of uncertain height and you want to put a footer underneath them.

## Exercise - Simple Columns

1.  Create an html file and linked stylesheet.
2.  Add a div to the page. Give it a class of wrapper.
3.  Place four divs on the page. Give them classes of header, sidebar, main and footer.
4.  The header div is full width so needs no special styling. Give it a height.
5.  Float the sidebar left (float:left) give it a width, add some content to make it realistic.
6.  Float he main div right (float:right) give it a width, add some content again to make it realistic.
7.  The footer needs to clear:both to make it drop down beneath the columns, no matter which one is tallest. Add some text to it if you like to make it realistic.

![](http://nicholasjohnson.com/images/webdev/float.jpg)

This layout with a header, sidebar, main content and footer is probably the most common one you will encounter. It's used all over the place. Though possibly a little dull, it's extremely effective and easy to use. Visitors like it because they know immediately how to use it.

## Exercise - Responsive Grid

1.  Create an html file and linked stylesheet.
2.  Create a wrapper div and constrain it's width in CSS.
3.  Create a number of divs nested inside the wrapper div.
4.  Constrain the widths and heights of each of the divs. Make little squares.
5.  Float each of the little square divs left.
6.  Play with the widths, heights and margins of each of the divs to make a nice clean grid.

![](http://nicholasjohnson.com/images/webdev/float2.jpg)

This layout is tremendously useful. It can be an image gallery, a grid of links, a navigation page with links to sections, or numerous other things. Team it up with a big lifestyle image and you have a nice homepage.
