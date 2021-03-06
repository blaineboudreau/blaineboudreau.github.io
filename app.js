//------making a shuffled deck of cards---------------------

// card constructor function
// assigns a suit and a rank(rank doubles as value)
var Card = function(rank, suit) {
 this.rank = rank;
 this.suit = suit;

};// end of constructor card function

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
  }// end shuffle function

};// end of constructor deck function

var deck1 = new Deck();
deck1.makeDeck();
deck1.shuffle();
console.log(deck1.deck);


//------------------------player object------------------

// creating a player object
var player = {
  hand: [],

// method to return value of hand
  handValue: function() {
      var sum = 0;
      // using for loop to iterate through array hand's length, sum is equilivent to sum of hand's value
      for (var i = 0; i < this.hand.length; i++) {
        sum += this.hand[i].rank;
      }

  return sum;

  },

  // method to hit
  hit: function() {
      // .pop takes last card object from deck
      var hitCard = deck1.deck.pop();
      // .push takes said card object and places it into array hand
      this.hand.push(hitCard);
      // this and dot notation provides appropiate scope
      console.log(this.hand);

  },

  // method to check for bust
  checkBust: function() {
    //if the players hand's value is greater than 21...
    if (this.handValue() > 21) {
        // return true, hand busted
        return true;
    };
    // if hand value is under 21 return false
    return false;


  },

  // method to reset hand
  reset: function() {
    // makes players hand array length 0, emptying the array
    this.hand.length = 0;
    // grabbing playerDisplay div by Id and setting innerHTML to empty
    document.getElementById('playerDisplay').innerHTML = '';

  },

  // method to display hand value in playerDisplay div
  displayHand: function() {
    // grabbing element by Id and setting inner html of playerDisplay to players hand value
    document.getElementById('playerDisplay').innerHTML = this.handValue();

  }

};


//----------------------dealer object---------------------------

// creating a dealer object
var dealer = {
  hand: [],

  // method to return value of hand
  handValue: function() {
    var sum = 0;
    // using for loop to iterate through array hand's length, sum is equilivent to sum of hand's value
    for (var i = 0; i < this.hand.length; i++) {
    sum += this.hand[i].rank;
    }

  return sum;

  },

  // method to hit until hands value reaches 17 or above
  hit:  function() {
    // while loop specifies that while dealers hand value is under 17, the dealer must hit
    while (this.handValue() < 17) {
      // .pop takes last card object from deck
      var hitCard = deck1.deck.pop();
      // .push takes said card object and places it into array hand
      this.hand.push(hitCard);
      // this and dot notation provides appropiate scope
      console.log(this.hand);
    }

  },

  // method for dealer to start with one card face up
  hitStart: function() {
      // .pop takes last card object from deck
      var hitCard = deck1.deck.pop();
      // .push takes said card object and places it into array hand
      this.hand.push(hitCard);
      // this and dot notation provides appropiate scope
      console.log(this.hand);

  },
  // method to check for bust
  checkBust: function() {
      //if the dealers hand's value is greater than 21...
    if (this.handValue() > 21) {
        // return true, hand is a bust
        return true;
    };
    // if hand value is under 21 return false
    return false;

  },
  // method to reset hand
  reset: function() {
    // makes dealers hand array length 0
    this.hand.length = 0;
    // grabbing dealerDisplay div by Id and setting innerHTML to empty
    document.getElementById('dealerDisplay').innerHTML = '';

  },
  // method to display hand
  displayHand: function() {
    // grabbing element by Id and setting inner html of dealerDisplay div to dealers hand value
    document.getElementById('dealerDisplay').innerHTML = this.handValue();

  }

};


// ----------------bank object-----------------

// creating a bank object
var bank = {
  // method to make bank reflect bets
  bet: function() {
    // declaring variable thats grabs input box's value
    var betAmt = document.getElementById('betAmt').value;
    // declaring variable thats grabs bank's inner text
    var newBank = document.getElementById('bankDisplay').innerHTML;
      //and changes inner text to reflect updated bank amount
      document.getElementById('bankDisplay').innerHTML = newBank - betAmt;
  },
  // method to make bank reflect winning a hand
  winBet: function() {
    // declaring variable thats grabs input box's value
    // using parseInt to convert strings back into numbers
    var betAmt = parseInt(document.getElementById('betAmt').value);
    // declaring variable thats grabs bank's innerHTML
    var newBank = parseInt(document.getElementById('bankDisplay').innerHTML);
      // and changes innerHTML to reflect updated bank amount
      document.getElementById('bankDisplay').innerHTML = newBank + betAmt * 2;
  },

   // method for bank to reflect a push
   pushBet: function() {
     // declaring variable thats grabs input box's value
     // using parseInt to convert strings back into numbers
     var betAmt = parseInt(document.getElementById('betAmt').value);
     // declaring variable thats grabs bank's innerHTML
     var newBank = parseInt(document.getElementById('bankDisplay').innerHTML);
       //and changes innerHTML to reflect updated bank amount
       document.getElementById('bankDisplay').innerHTML = newBank + betAmt;

   },
   // method to clear InputBox
   clearInputBox: function() {
     // grab input box qnd empty it
     var box = document.getElementById('betAmt');
     box.value = '';

   }

};


// -----------DOM manipulation--------------


// window onload
$(function() {

  // dealing player hand by calling on hit method from player object
  player.hit();
  player.hit();
  // dealer starts with one card value showing
  dealer.hitStart();
  // displaying hand with object method
  player.displayHand();
  dealer.displayHand();
  // grabbing bet button elemenet by Id and adding event listener
  $('#bet').on('click', function() {
    // calling on bet method from bank object
    bank.bet();
    // hide bet button
    document.getElementById('bet').style.visibility='hidden';

  })//end of bet on click function

  // grabbing hit button elemenet by Id and adding event listener
  $('#hit').on('click', function() {
    // event handler: player hits
    player.hit();
    // displaying hand with object method
    player.displayHand();
    // check to see if busted
    if (player.checkBust()) {
      // bank reflects losing, no action needed for now because bank already reflects this
      // alert msg. "You Lose"
      alert("You Lose! You Busted");
      // clear player and dealer hand
      player.reset();
      dealer.reset();
      // clearInputBox
      bank.clearInputBox();
      // show bet button
      document.getElementById('bet').style.visibility='visible';
      // dealer starts with one card value showing
      dealer.hitStart();

    }

  })// end of hit on click function

  // grab stay button elemenet by Id add event listener
  $('#stay').on('click', function() {
    // event handler: dealer hits until reaches 17
    dealer.hit();
    // if dealer bust
    if (dealer.checkBust()) {
      // broken, wont show dealers hand before resetting
      dealer.displayHand();
      // bank reflects winning the bet through object method
      bank.winBet();
      // alert "You Win!"
      alert("You Win! Dealer Busted");
      setTimeout(function() {
        // alert("resetting board");
      // clear player and dealer hand
      player.reset();
      dealer.reset();
      // clear inputBox
      bank.clearInputBox();
      // show bet button
      document.getElementById('bet').style.visibility='visible';
      // dealer starts with one card value showing
      dealer.hitStart();
      }, 3000);

    // player and dealer tie
    } else if (player.handValue() === dealer.handValue()) {
      // broken, wont show dealers hand before resetting
      dealer.displayHand();
      // bank reflects a tie
      bank.pushBet();
      // alert "push"
      alert("It's a Push");
      setTimeout(function() {
        // alert("resetting board");
      // clear player and dealer hand
      player.reset();
      dealer.reset();
      // clear InputBox
      bank.clearInputBox();
      // show bet button
      document.getElementById('bet').style.visibility='visible'
      // dealer starts with one card value showing
      dealer.hitStart();
      }, 3000);

    // if player hand beats dealer
    } else if (player.handValue() > dealer.handValue()) {
      // broken, wont show dealers hand before resetting
      dealer.displayHand();
      // bank reflects player winning
      bank.winBet();
      // alert "You Win"
      alert("You Won With A Better Hand!");
      setTimeout(function() {
        // alert("resetting board");
      // clear player and dealer handValue
      player.reset();
      dealer.reset();
      // clearInputBox
      bank.clearInputBox();
      // show bet button
      document.getElementById('bet').style.visibility='visible'
      // dealer starts with one card value showing
      dealer.hitStart();
      }, 3000);

    // if player hand losses to dealer
    } else if (player.handValue() < dealer.handValue()) {
      // broken, wont show dealers hand before resetting
      dealer.displayHand();
      // bank reflects losing, no action needed because bank already reflects this
      // alert "You Lose"
      alert("You Loss With A Worse Hand!");
      setTimeout(function() {
        // alert("resetting board");
        // clear player and dealer hand
        player.reset();
        dealer.reset();
        // clearInputBox
        bank.clearInputBox();
        // show bet button
        document.getElementById('bet').style.visibility='visible'
        // dealer starts with one card value showing
        dealer.hitStart();

        }, 3000);

    }

  })// end of stay on click function


})//end window.onload

























//--------------graveyard----------------
// time interval to display dealer cards for certain amount of time before the reset but did not get working
// start: function() {
//   var self = this;
//   this.displayHandTimer = setInterval(function() {
//     self.displayHand();
//   }, 5000);
// }


// method to make bank reflect losing a hand
//  loseBet: function() {
//    // declaring variable thats grabs input box's value
//    var betAmt = document.getElementById('betAmt').value;
//    // declaring variable thats grabs bank's inner text
//    var newBank = document.getElementById('bankDisplay').innerText;
//      //and changes inner text to reflect updated bank amount
//      document.getElementById('bankDisplay').innerText = newBank - betAmt ;
//  },

//------gameplay----------
// deal players hand
// player.hit();
// player.hit();

// // if player bust
// if (player.checkBust() = true) {
//   // bank reflects losing
//   bank.loseBet();
//   // alert "You Lose"
//   return alert("You Lose! You Busted");
//   // clear player and dealer hand
//   player.reset();
//   dealer.reset();
//
//   // if dealer bust
// } else if (dealer.checkBust() = true) {
//   // bank displays bank amount + (amount bet that round * 2)
//   bank.winBet();
//   // alert "You Win!"
//   return alert("You Win! Dealer Busted");
//   // clear player and dealer hand
//   player.reset();
//   dealer.reset();
//
//   // if push
// } else if (player.handValue() = dealer.handValue()) {
//   // bank displays bank amount + (amount bet that round)
//   bank.pushBet();
//   // alert "push"
//   return alert("It's a Push");
//   // clear player and dealer hand
//   player.reset();
//   dealer.reset();
//
//   // if player hand beats dealer
// } else if (player.handValue() > dealer.handValue()) {
//   // bank reflects player winning
//   bank.winBet();
//   // alert "You Win"
//   return alert("You Win!");
//   // clear player and dealer handValue
//   player.reset();
//   dealer.reset();
//
//   // if player hand losses to dealer
// } else if (player.handValue() < dealer.handValue()) {
//   // bank reflects losing
//   bank.loseBet();
//   // alert "You Lose"
//   return alert("You Lose!");
//   // clear player and dealer hand
//   player.reset();
//   dealer.reset();
// }

// // set bet amount to 10
// var bet = 10;
// // .html() is used to empty content in element and replace with new content
// // declaring altered bet button to variable currentBet
// var currentBet = $("#bet").html();
// // declaring altered bankDisplay to variable
// var bankDisplay = $("#bankDisplay").html();
//
// // using a conditional statement. if currentBet, execute altered bet button
// if (currentBet) {
//   $("#bet").html(currentBet + bet);
//   }
// // altered bankDisplay reflects bank amount minus bet
// $("#bankDisplay").html(bankDisplay - bet);

// if (player.checkBust()) {
//     // bank is updated to reflect loss of bet------BROKEN---------------
//   $("#bankDisplay").html(bankDisplay - bet);
//   return alert("You Lose! You Busted");
// //       player.reset();
// //       dealer.reset();
// // // the players card total is displayed on screen/updated as needed --------BROKEN-----------
// //       $('#playerDisplay').text(player.handValue());
// }


// winning/losing conditions including
// if player or dealer bust or
// if the player or the dealer has handValue of 21 and the other does not.
// if player or dealer hand is closer to 21 then others whitout going over at end of round
// tie is referred to as a push, no gain or loss of money
//     // if (player.checkBust() = true) {
    //   // bank reflects losing
    //   $("#bankDisplay").html(bankDisplay - bet);
    //   // alert "You Lose"
    //   return alert("You Lose! You Busted");
    //   // clear player and dealer hand
    //   player.reset();
    //   dealer.reset();
    // }
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

// Your game of Blackjack must have at minimum:
//
// [x] A way to keep track of the current player bankroll (a player should be able to play consecutive hands and the bankroll should reflect wins and losses)
// [x] A way for the player to make a bet
// [x] A way for the player to get more cards, or declare themselves happy with their current hand
// [x] A way for the player to bust
// [x] A way for the player to win
// [x] Game logic for the dealer to hit until a certain point

// now working on card images
// card images (not necessary to play though)

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
