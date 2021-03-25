const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = deck.cards[0]
    this.turnCount = 0
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(guess) {
    this.currentTurn = new Turn(guess)
    this.turnCount++
    this.currentCard = this.deck.cards[1]
  }
}

module.exports = Round
