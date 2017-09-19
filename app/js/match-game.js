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

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
