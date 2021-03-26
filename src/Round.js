const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = deck.cards[0]
    this.turnCount = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard)
    this.turnCount++
    this.currentCard = this.deck.cards[this.turnCount]
    if (this.currentTurn.evaluateGuess()) {
      return this.currentTurn.giveFeedback()
    } else if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      return this.currentTurn.giveFeedback();
    }
  }
  calculatePercentCorrect() {
    console.log(this.incorrectGuesses.length / this.turnCount) * 100
    return (this.incorrectGuesses.length / this.turnCount) * 100
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round
