//------Below is the making of shuffled deck---------------------

// making constructor function for each card that will be used to assign suit and rank later
var Card = function (rank, suit) {
    this.rank = rank;
    this.suit = suit;
};
   // making a constructor function for the deck of cards which will include methods to make the deck and shuffle it
var Deck = function () {
 this.deck = [];
// method to make the deck
 this.makeDeck = function () {
// setting arrays suits, ranks to contain each respective value... ranks literally is the value
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
// console.log(deck1.deck.length);

deck1.shuffle();
console.log(deck1.deck);

//------------------------player object--------------------------
// creating a player object
var player = {
  hand: [],

//creating method to return value of players hand
  playerHandSum: function () {
      var sum = 0;
      // using for loop to iterate through array hand's length, sum is equilivent to sum of hand's value
        for (var i = 0; i < this.hand.length; i++){
        sum += this.hand[i].rank;
        }

  return sum;

  },
// method for player to hit
  playerHit: function () {
    //popping off the last card from the deck and pushing it into array hand
      var hitCard = deck1.deck.pop();
      this.hand.push(hitCard);
      console.log(this.hand);

  },

// method for player bust
  checkBust:function () {
    //if the players hand's value is greater than 21 player bust
      if (this.playerHandSum() > 21) {
        return alert("Bust");
      }
  },




};


//----------------------dealer object---------------------------
// similar to player object only geared toward dealer, with conditions for dealer to auto hit/stay
var dealer = {
  hand: [],


  dealerHandSum: function () {
    var sum1 = 0;
    for (var i = 0; i < this.handD.length; i++){
    sum += this.handD[i].rank;
    }
  return sum1;

  },

// dealer must hit until hands value reaches 17 or above
  dealerHit:  function () {
    while (this.dealerHandSum() < 17) {
      var hitCard1 = deck1.deck.pop();
      this.handD.push(hitCard1);
      console.log(this.handD);
    }
  },

  checkBustD: function () {
      //if the dealers hand's value is greater than 21 dealer bust
    if (this.dealerHandSum() > 21) {
       return alert("Bust");
        }
    },



}

// object bank - fix so 10 is not taken from 200 but from updated bank value
var bank = {
// bank starts at 200, bets are incrimented by 10 per click
  bankStart: 200,
  playerBet: 10,
  playerBetDisplay: [],

// method to make make a bet
  bet: function () {
    // current bet is equal to 10 * the number of times bet button is clicked
    var currentBet = 0;
    //event listener later in code
    var newBet = currentBet + this.playerBet;
    console.log(newBet);
    // bet is pushed into bet display array
    this.playerBetDisplay.push(newBet);
    console.log(this.playerBetDisplay);
    // bank start (total) is decremented by 10 times number of times bet button is clicked
    var newBank = this.bankStart - this.playerBet;
    console.log(newBank);

  }



}


//------------ gameplay-------------------




player.playerHit();
player.playerHit();




//-----------DOM manipulation--------------


$(function() {
  $('#hit').on('click', function() {
    player.playerHit();
    player.checkBust();
    player.player21();
  })
  $('#stay').on('click', function() {
    dealer.dealerHit();
    dealer.checkBustD();
    dealer.dealer21();
  })
//if dealer bust player wins and bank increases by bet amount
//if dealer stayes then compare hands to determine the winner, if player wins then increase bank by bet amount
//

  // $('#bet').on('click', function(){
  //   bank.bet();
  // })



})//end window.onload

// bank must change in accordance with bets
// input boxes are needed for bank, player hand, and dealer hand. bank input box should change according to bets and winning/losing bets. player and dealer hand should reset each time someone wins a hand aka always dislay the sum of each hand respectively

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

// var blackjack = function () {
//   var deck
//   var wins
//   var loses
// }
//
// var declarewinner = function () {
//   userhand/dealer hand
// }
//
// var outcome = [],
// var dealerscore = dealerhand.score(),
// var user score = use hand.score
// if (userscore is less than 21 or two lines dealer scroe ==== 21)
// outcome = you lose
//
// losses ++;
// else if user less than equal




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


































//--------------graveyard----------------
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
