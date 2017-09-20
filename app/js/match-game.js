$(document).ready(function() {
  console.log("ready");
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
});

var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var orderCardNumbers = [];
  //Create order card numbers
  for (i = 1; i <= 8; i++) {
    orderCardNumbers.push(i, i);
  }
  //Create random card numbers
  var randomCardNumbers = [];

  while (orderCardNumbers.length != 0) {
    var randomIndex = Math.floor(Math.random() * orderCardNumbers.length);
    var randomValue = orderCardNumbers.splice(randomIndex, 1)[0];

    randomCardNumbers.push(randomValue);
  }
  console.log(randomCardNumbers);
  return randomCardNumbers;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  //Card colors
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'
  ];
  //empty game object
  $game.empty();
  $game.data('flippedCards', []);

  //render cards
  for (index in cardValues) {
    var value = cardValues[index]
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };
    //Init card object
    $card = $('<div class="col-xs-3 card"></div>');
    $card.data(data);

    console.log($card);
    $game.append($card);
  }

  $('.card').on('click', function() {
    MatchGame.flipCard($(this), $game);
  });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  //Check if the card is already flipped
  if ($card.data('isFlipped')) {
    //Here means it's flipped, returns
    return
  }

  //Here means card's not flipped, flip it
  $card.css("background-color", $card.data('color'))
      .text($card.data('value'))
      .data('isFlipped', true);

  var flippedCards = $game.data('flippedCards');
  flippedCards.push($card);

  if (flippedCards.length == 2) {
    //get card
    var firstCard = flippedCards[0];
    var secondCard = flippedCards[1];

    //get card value
    var firstCardValue = firstCard.data('value');
    var secondCardValue = secondCard.data('value');

    if (firstCardValue === secondCardValue) {
      // Matched
      for (index = 0; index < flippedCards.length; index++ ) {
        flippedCards[index].css({
          "background-color": 'rgb(153, 153, 153)',
          "color": 'rgb(204, 204, 204)',
          "isFlipped": true
        });
      }
    } else {
      //Not Matched
      console.log("not Matched");
      setTimeout(function(){
        for (index = 0; index < flippedCards.length; index++) {
          flippedCards[index].css("background-color", 'rgb(32, 64, 86)')
                            .text('')
                            .data('isFlipped', false);
        }
      }, 350);
    }

    //Reset flippedCards
    $game.data('flippedCards', []);
  }
};
