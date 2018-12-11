var shuffle = require('fisher-yates')
// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
var Card = function (value) {

    if (value >= 1 && value <= 13) {
        this.value = value;
    } else {
        this.value = 1;
    }

    this.print = function () {
        console.log(this.value);
    };
};


// --------------------- End Code Area --------------------
// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------
var Deck = function ( cards = []) {
    this.cards = cards;
    this.count = function () {
        return this.cards.length;
    }
    this.shuffle = function () {
        shuffle(this.cards);
    }
    this.draw = function () {
        return this.cards.pop();
    }
    this.add = function (value) {

        this.cards.push(new Card(value));
        this.shuffle();
    }
}





// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------



module.exports.Card = Card;
module.exports.Deck = Deck;
// --------------------- End Code Area --------------------
