//------making a shuffled deck of cards---------------------

// card constructor function
// assigns a suit and a rank(rank doubles as value for now)
var Card = function(rank, suit) {
 this.rank = rank;
 this.suit = suit;
};
// deck constructor function
// include methods to make the deck and shuffle it
var Deck = function () {
 this.deck = [];
// method to make the deck
 this.makeDeck = function() {
// declaring suits and ranks to each respective array
  var suits = ['hearts', 'spades', 'diamonds', 'clubs'];
  var ranks = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// for loop applying suits and ranks to each card using the card constructor object, then pushing it to the deck array
  for (var i = 0; i < suits.length; i++) {
    // console.log(suits[i]);
    for (var r = 0; r < ranks.length; r++) {
      // console.log(ranks[r]);
      this.deck.push(new Card(ranks[r], suits[i]));
     }
   }
 }; //end make deck function

// Fisher-Yates shuffle algorithm
// a popular algorithm that best simulates shuffling items in a set. The Fisher-Yates shuffle effectively takes each item in the set and randomly picks an item until no items are left.
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
deck1.shuffle();
console.log(deck1.deck);


//------------------------player object------------------

// creating a player object
var player = {
  hand: [],

// method to return value of players hand
  handValue: function() {
      var sum = 0;
      // using for loop to iterate through array hand's length, sum is equilivent to sum of hand's value
        for (var i = 0; i < this.hand.length; i++) {
        sum += this.hand[i].rank;
        }

  return sum;

  },
  // method for player to hit
  hit: function() {
      // .pop takes last card object from deck
      var hitCard = deck1.deck.pop();
      // .push takes said card object and places it into array hand
      this.hand.push(hitCard);
      // this and dot notation provides appropiate scope
      console.log(this.hand);

  },
  // method for player bust
  checkBust: function() {
    //if the players hand's value is greater than 21 player bust
    if (this.handValue() > 21) {
        this.trueBust = true;
        return true;
    };
    return false;


  },

  reset: function() {
    this.hand.length = 0;

  },


};


//----------------------dealer object---------------------------

// similar to player object
var dealer = {
  hand: [],

// method to return value of dealers hand
  handValue: function() {
    var sum = 0;
    // using for loop to iterate through array hand's length, sum is equilivent to sum of hand's value
    for (var i = 0; i < this.hand.length; i++) {
    sum += this.hand[i].rank;
    }
  return sum;

  },
// dealer must hit until hands value reaches 17 or above
  hit:  function() {
    // while loop specifies that while dealers hand is values at under 17, the dealer must hit
    while (this.handValue() < 17) {
      // .pop takes last card object from deck
      var hitCard = deck1.deck.pop();
      // .push takes said card object and places it into array hand
      this.hand.push(hitCard);
      // this and dot notation provides appropiate scope
      console.log(this.hand);
    }

  },

  checkBust: function() {
      //if the dealers hand's value is greater than 21 dealer bust
    if (this.handValue() > 21) {
        this.trueBust = true;
        return true;
    };
    return false;

  },

  reset: function() {
    this.hand.length = 0;

  },


}


//------------ gameplay-------------------

// deal players hand
player.hit();
player.hit();

// // if player bust
// if (player.checkBust() = true) {
//   // bank reflects losing
//   $("#bankDisplay").html(bankDisplay - bet);
//   // alert "You Lose"
//   return alert("You Lose! You Busted");
//   // clear player and dealer hand
//   player.reset();
//   dealer.reset();
//
//   // if dealer bust
// } else if (dealer.checkBust() = true) {
//   // bank displays bank amount + (amount bet that round * 2)
//   $("#bankDisplay").html(bankDisplay + bet * 2);
//   // alert "You Win!"
//   return alert("You Win! Dealer Busted");
//   // clear player and dealer hand
//   player.reset();
//   dealer.reset();
//
//   // if push
// } else if (player.handValue() = dealer.handValue()) {
//   // bank displays bank amount + (amount bet that round)
//   $("#bankDisplay").html(bankDisplay + bet);
//   // alert "push"
//   return alert("It's a Push");
//   // clear player and dealer hand
//   player.reset();
//   dealer.reset();
//
//   // if player hand beats dealer
// } else if (player.handValue() > dealer.handValue()) {
//   // bank reflects player winning
//   $("#bankDisplay").html(bankDisplay + bet * 2);
//   // alert "You Win"
//   return alert("You Win!");
//   // clear player and dealer handValue
//   player.reset();
//   dealer.reset();
//
//   // if player hand losses to dealer
// } else if (player.handValue() < dealer.handValue()) {
//   // bank reflects losing
//   $("#bankDisplay").html(bankDisplay - bet);
//   // alert "You Lose"
//   return alert("You Lose!");
//   // clear player and dealer hand
//   player.reset();
//   dealer.reset();
// }


// -----------DOM manipulation--------------

// window onload
$(function() {

  // grab bet button elemenet by id. add event listener
  $('#bet').on('click', function() {
    // set bet amount to 10
    var bet = 10;
    // .html() is used to empty content in element and replace with new content
    // declaring altered bet button to variable currentBet
    var currentBet = $("#bet").html();
    // declaring altered bankDisplay to variable
    var bankDisplay = $("#bankDisplay").html();
    // using a conditional statement. if currentBet, execute altered bet button
    if (currentBet) {
      $("#bet").html('bet: + ' + bet);
      }
    // altered bankDisplay reflects bank amount minus bet
    $("#bankDisplay").html(bankDisplay - bet);

  })

  // grab hit button elemenet by id. add event listener
  $('#hit').on('click', function() {
    // event handler: player hits
    player.hit();
    // check to see if busted
    // player.checkBust();
    if (player.checkBust()) {
      $("#bankDisplay").html(bankDisplay - bet);
      return alert("You Lose! You Busted"),
      player.reset();
      dealer.reset();
      // $('#playerDisplay').html();
      }
    // if (player.checkBust() = true) {
    //   // bank reflects losing
    //   $("#bankDisplay").html(bankDisplay - bet);
    //   // alert "You Lose"
    //   return alert("You Lose! You Busted");
    //   // clear player and dealer hand
    //   player.reset();
    //   dealer.reset();
    // }
    // the players card total is displayed on screen/updated as needed
    // $('#playerDisplay').text(player.handValue());

  })
  // the players card total is displayed on screen
  $('#playerDisplay').text(player.handValue());

  // grab stay button elemenet by id. add event listener
  $('#stay').on('click', function() {
    // event handler: dealer hits until reaches 17
    dealer.hit();
    // check to see if busted
    dealer.checkBust();
    // the dealers card total is displayed on screen/updated as needed
    $('#dealerDisplay').text(dealer.handValue());

  })






})//end window.onload




// Your game of Blackjack must have at minimum:
//
// [ ] A way to keep track of the current player bankroll (a player should be able to play consecutive hands and the bankroll should reflect wins and losses)
// [x] A way for the player to make a bet
// [x] A way for the player to get more cards, or declare themselves happy with their current hand
// [x] A way for the player to bust
// [ ] A way for the player to win
// [x] Game logic for the dealer to hit until a certain point

// needs display for amount player bets per round

// bets need to be appropiately added/subtracted to bank at end of round

// way to determine winner at end of each round

// card images (not necessary to play though)





































//--------------graveyard----------------
// winning/losing conditions including
// if player or dealer bust or
// if the player or the dealer has handValue of 21 and the other does not.
// if player or dealer hand is closer to 21 then others whitout going over at end of round
// tie is referred to as a push, no gain or loss of money
// checkBust: function() {
//   if (this.handValue() > 21) {
//     return alert("Player Bust, You Lose!");
//   }
// },
// var $dealer.hand = $('#dealer.hand');
// $('#dealer.hand').empty();
// $player.hand.empty();

// dealer21: function (){
//   if (this.dealerHandSum() === 21) {
//     return alert("Dealer Wins");
//   }
// },
// // method for player blackjack
//   player21: function () {
//     // if players hand is 21 then player recieves message "Blackjack, You Win"
//       if (this.playerHandSum() === 21) {
//         return alert("You Win");
//       }
//   },
// set interval - where will this come in to play ? not needed yet

// dealerDealStart: function () {
//     var dealerDealPop = deck1.deck.pop();
//     // console.log(dealerDealPop);
//     var addPopD = this.hand.push(dealerDealPop);
//     // console.log(addPopD);
//     var dealerDealPopD1 = deck1.deck.pop();
//     // console.log(dealerDealPopD1);
//     var addPopD1 = this.hand.push(dealerDealPopD1);
//     // console.log(addPopD1);
//
// },

// dealerStay: function () {
//     if (dealerHandSum() > 16) {
//
//     }
//     // add event listener("click", dealer stays... switch to dealer)
// },

// method for player to stay
  // playerStay: function () {
  //      add event listener("click", player stays... switch to dealer)
  // },
//
// playerDealStart: function () {
//     var playerDealPop = deck1.deck.pop();
//     // console.log(playerDealPop);
//     this.hand.push(playerDealPop);
//     console.log(this.hand);
//
// },

// var $gameBoard = $('#gameboard');
// var $bank = $('#bank');
// var $dealerCard = $('#dealercard');
// var $playerCard = $('#playercard');
// var $dealerTotal = $('#dealertotal');
// var $playerTotal = $('#playertotal');
// var $bust = $('#bust_id');
// var $win = $('#win_id');
// var $lose = $('#lose_id');
// var $tie = $('#tie_id');
// var $suits = $('#suits');
// var $bet = $('#bet');
// var $playerDisplay = $('#playerDisplay');
// var $dealerDisplay = $('#dealerDisplay');
