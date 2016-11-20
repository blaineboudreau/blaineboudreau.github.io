// WORK IN COSOLE TO START
//
// var $gameBoard = $('#gameboard');
// var $bankRoll = $('#bankroll');
// var $dealerCard = $('#dealercard');
// var $playerCard = $('#playercard');
// var $dealerTotal = $('#dealertotal');
// var $playerTotal = $('#playertotal');
// var $bust = $('#bust_id');
// var $win = $('#win_id');
// var $lose = $('#lose_id');
// var $tie = $('#tie_id');
// var $suits = $('#suits');

// making constructor function for the deck of cards that will be usd to assign suit, face, and value to each card later
var EachCard = function (suit, face, value) {
    this.suit = suit;
    this.face = face;
    this.value = value;
}
// using oop to make the deck by using properties from above constuructor function
var deck = {
// making an empty array that cards can be pushed in
  cards: [],
// making a method makeDeckFunc to make cards
makeDeckFunc: function () {
  this.suit = ['hearts', 'spades', 'diamonds', 'clubs'];
  this.face = ['king', 'queen', 'jack', 'ace'];
  this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
// applying suits to the deck of cards
  // suitAply: function () {
    for (i = 0; i <= suit.length; i++);
    var newCard = EachCard1[i]
    this.cards.push(newCard);
  // },
//  applying faces to the deck of cards
  // faceAply: function () {
      for (f = 0; f <= face.length; f++);
      this.cards.push(face[f]);
  // },
// applying value to the deck of cards
  // valueAply: function () {
      for (v = 2; v <= value.length; v++);
      this.cards.push(value[v]);
  // }
  }
}
var EachCard1 = new EachCard();
console.log(EachCard1);




// putting 52 suited cards in arrays and setting it to the variable deck.
// var deck = ['aceHearts', 'twoHearts', 'threeHearts', 'fourHearts', 'fiveHearts', 'sixHearts', 'sevenHearts', 'eightHearts', 'nineHearts', 'tenHearts', 'jackHearts', 'queenHearts', 'kingHearts', 'aceClubs', 'twoClubs', 'threeClubs', 'fourClubs', 'fiveClubs', 'sixClubs', 'sevenClubs', 'eightClubs', 'nineClubs', 'tenClubs', 'jackClubs', 'queenClubs', 'kingClubs', 'aceDiamonds', 'twoDiamonds', 'threeDiamonds', 'fourDiamonds', 'fiveDiamonds', 'sixDiamonds', 'sevenDiamonds', 'eightDiamonds', 'nineDiamonds', 'tenDiamonds', 'jackDiamonds', 'queenDiamonds', 'kingDiamonds', 'aceSpades', 'twoSpades', 'threeSpades', 'fourSpades', 'fiveSpades', 'sixSpades', 'sevenSpades', 'eightSpades', 'nineSpades', 'tenSpades', 'jackSpades', 'queenSpades', 'kingSpades'];
//

// var deckValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
//
// console.log(deck);
// console.log(deckValues);
//
//
//
//
//
// var deck = for (i = 0; i <= deck.length; i++)

//   console.log(i);
// function deal step one
//
// set varibles for
// gameboard
// deck
// bankroll
// dealerCard
// playerCard
// dealerTotal
// playerTotal
// reloadGame
// bust
// win
// lose
// tie
// messages you win and you lose
//
//
// set functions(maybe constructor objects) for
// deal
// bet
// score
//
//
// use if else statements for
// player to dealer totals including: bust, tie, win, lose
//
//
// jquery methods/java functions
// Math.random - to generate random cards when drawn
// Math.floor - get rid of any decimals
// event listeners for buttons like hit, stand, deal, bet
// set interval - dealer: stand or bust
//
//
// notes
// heavy usage of object oriented programming and jquery
//
// psedo code
// 1)function reset
// 2)function deal
// 3)clear totals
// 4)bet
// 5)player hits or
// 6)player stands
// 7)instructions for dealer: stand or bust
// 8)player win or lose
// 9)reloadGame
// 10)deal and repeat
//
// window.onload
// $(function() {
//    // code inside jQuery window onload
// }
// this: $(this)
//
//
//
// append elements: jQueryElement.append( jQueryElement )
//
// get the parent of an element: jQueryElement.parent()
//
// get child elements: jQueryElement.children()
//
// set an event listener: jQueryElement.on('click', function() {} )
//
// click listener: jQueryElement.click( function() {} )
//
// get value from input box after click: $('#idName').val()
//
// prepend elements: jQueryElement.prepend( jQueryElement )
//
// remove elements: jQueryElement.remove()
//
// set text inside element: jQueryElement.text("some text")
//
// set html inside element: jQueryElement.html("<some html>")
//
// check if element has a class: jQueryElement.hasClass('someClass')
//
// remove a class from an element: jQueryElement.removeClass('someClass');
//
// empty an element of content: jQueryElement.empty()
//
// set a css property on an element: jQueryElement.css('property', 'value')
//
// clone an element: jQueryElement.clone()
//
// append an element with the order reversed: jQueryElement.appendTo(jQueryElement )
//
// get a specific jQuery element from a list: jQueryCollection.eq(indexNum )
