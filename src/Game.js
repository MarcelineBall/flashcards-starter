const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

class Game {
  constructor(round) {
    this.currentRound = null
  }
  start() {
    let prototypeCards = []
    prototypeQuestions.forEach((card) => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer)
      prototypeCards.push(newCard)
    })
    const deck = new Deck(prototypeCards)
    const round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
