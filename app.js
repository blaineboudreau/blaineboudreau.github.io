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

//------Below is the making of shuffled deck---------------------

// making constructor function for each card that will be used to assign suit and rank later
var Card = function (rank, suit) {
    this.rank = rank;
    this.suit = suit;
    // this.value = value;
};
   // making a constructor function for the deck of cards which will include methods to make the deck and shuffle it
var Deck = function () {
 this.deck = [];
// method to make the deck
 this.makeDeck = function () {
// setting arrays suits, ranks to contain each respective value... ranks literally is the value
  var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
  var ranks = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// for loop applying suits and ranks to each card four times, then pushing it the deck array via our card constructor object
  for (var i = 0; i < suits.length; i++) {
    // console.log(suits[i]);
    for (var r = 0; r < ranks.length; r++) {
      // console.log(ranks[r]);
      this.deck.push(new Card(ranks[r], suits[i]));
     }
   }
 }; //end make deck function

// Fisher-Yates shuffle algorithm
this.shuffle = function() {
   for (i = this.deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
    }
    return this.deck;
 } //end shuffle function

};
var deck1 = new Deck();
deck1.makeDeck();
console.log(deck1.deck.length);

deck1.shuffle();
console.log(deck1.deck);

//------------------------player object--------------------------
// creating a player object
var player = {
  hand: [],
// method for getting sum of player hand
  playerDealStart: function () {
      var playerDealPop = deck1.deck.pop();
      // console.log(playerDealPop);
      var addPop = player.hand.push(playerDealPop);
      console.log(addPop);
      var playerDealPop1 = deck1.deck.pop();
      // console.log(playerDealPop);
      var addPop1 = player.hand.push(playerDealPop1);
      console.log(addPop1);

  },

  playerHandSum: function () {
      var sum = 0;
        for (var i = 0; i < this.hand.length; i++){
        sum += this.hand[i].rank; //may have to put = behind +
        }

  return sum;

  },
// method for player to hit
  playerHit: function () {
      var hitCard = deck1.deck.pop();
      this.hand.push(hitCard);
      //add event listener ("click", ...)
  },

  playerStay: function () {
      // add event listener("click", player stays... switch to dealer)
  },

  playerBust:function () {
      if (this.playerHandSum() > 21) {
        return alert("Bust");
      }
  },

  player21: function () {
      if (this.playerHandSum() === 21) {
        return alert("Blackjack, You Win");
      }
  },



};
// calling dealer function only when appropiate
// console.log(player);
// console.log(player.playerHandSum(player.hand));

// player.playerHit();
// player.playerHit();
// player.playerDealStart();
// console.log(player.hand);
// console.log(player.playerBust());
// console.log(player.player21());
// console.log(player.playerHandSum());

//----------------------dealer object---------------------------

var dealer = {
  hand: [],

  dealerDealStart: function () {
      var dealerDealPop = deck1.deck.pop();
      // console.log(playerDealPop);
      var addPopD = player.hand.push(dealerDealPop);
      console.log(addPopD);
      var playerDealPopD1 = deck1.deck.pop();
      // console.log(playerDealPop);
      var addPopD1 = player.hand.push(dealerDealPopD1);
      console.log(addPopD1);

  },

  dealerHandSum: function () {
    var sum = 0;
    for (var i = 0; i < this.hand.length; i++){
    sum += this.hand[i].rank;
    }
  return sum;

  },

// dealer must hit to certain number
  dealerHit:  function () {
    if (dealerHandSum() < 18) {
      var hitCard1 = deck1.deck.pop();
      this.hand.push(hitCard1);
    }
  },


  dealerStay: function () {
      if (dealerHandSum() > 16){
        //stay switch to player turn
      }
      // add event listener("click", dealer stays... switch to dealer)
  },

  dealerBust: function () {
    if (dealerHandSum() > 21) {
      return alert("Bust");
    }
  },

  dealer21: function (){
    if (dealerHandSum() = 21) {
      return alert("Dealer Blackjack, You Lose");
    }
  },

}

// object bank
var bank = {
// bank starts at 200, bets at incrimented by 10 per click,
  bankStart: 200,
  playerBet: 10,
  playerBetDisplay: [],

//
  makeBet: function () {
    var currentBet = 0;
    var newBet = currentBet + bank.playerBet;
    console.log(newBet);
    bank.playerBetDisplay.push(newBet);
    console.log(bank.playerBetDisplay);
    var newBank = bank.bankStart - bank.playerBet;
    console.log(newBank);

  }

}

console.log(bank.makeBet());


//------------ gameplay-------------------





// reset: player and dealer receive hands
// player bets atleast minimum
// player either hits or stays
// dealer auto hits/stays depending if hand is under 17
// player bets if wants
// player hits or stays
//
// winning/losing conditions including
// if player or dealer bust or
// if player or dealer reach 21 or
// if player hand is closer to 21 then dealers
//
// next round
// reset:player and dealer hands
// repeat process
//
// bank must change in accordance with bets























// psuedo code below
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
