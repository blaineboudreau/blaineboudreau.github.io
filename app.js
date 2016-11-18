set varibles for
gameboard
deck
dealerCard
playerCard
dealerTotal
playerTotal
reloadGame
bust
win
lose
tie
messages you win and you lose


set functions(maybe constructor objects) for
deal
bet
score


use if else statements for
player to dealer totals including: bust, tie, win, lose


jquery methods/java functions
Math.random - to generate random cards when drawn
Math.floor - get rid of any decimals
event listeners for buttons like hit, stand, deal
set interval - dealer: stand or bust


notes
heavy usage of object oriented programming and jquery

true psedo code
1)funtion reset
2)function deal
3)clear totals
4)player hits or
5)player stands
6)instructions for dealer: stand or bust
7)player win or lose
8)reloadGame
9)deal and repeat

window.onload
$(function() {
    // code inside jQuery window onload
}
this: $(this)

create element: $('<div>'), $('<p>'), etc.

select all elements of type: $('div'), $('p'), etc.

you can get the body of the document with: $('body')

get element by id: $('#idName')

get elements by class: $('.className')

set id on element: jQueryElement.attr('id', 'idName')

set class on element: jQueryElement.addClass('className')

append elements: jQueryElement.append( jQueryElement )

get the parent of an element: jQueryElement.parent()

get child elements: jQueryElement.children()

set an event listener: jQueryElement.on('click', function() {} )

click listener: jQueryElement.click( function() {} )

get value from input box after click: $('#idName').val()

prepend elements: jQueryElement.prepend( jQueryElement )

remove elements: jQueryElement.remove()

set text inside element: jQueryElement.text("some text")

set html inside element: jQueryElement.html("<some html>")

check if element has a class: jQueryElement.hasClass('someClass')

remove a class from an element: jQueryElement.removeClass('someClass');

empty an element of content: jQueryElement.empty()

set a css property on an element: jQueryElement.css('property', 'value')

clone an element: jQueryElement.clone()

append an element with the order reversed: jQueryElement.appendTo( jQueryElement )

get a specific jQuery element from a list: jQueryCollection.eq( indexNum )
