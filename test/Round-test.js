const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
    card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', '["mutator method", "accessor method", "iteration method"]', 'mutator method');
    card3 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', '["mutator method", "accessor method", "iteration method"]', 'iteration method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to take in a deck', function() {

    expect(round.deck).to.equal(deck);
  })

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal({ id: 1,
                                               question: 'What allows you to define a set of related information using key-value pairs?',
                                               answers: '["object", "array", "function"]',
                                               correctAnswer: 'object'
                                             })
  })

  describe('takeTurn method', function() {

    it('should be able to create new instance of turn', function() {
      round.takeTurn('object');
      expect(round.currentTurn).to.be.an.instanceof(Turn);
    })

    it('should be able to update turn count if guess is correct or not', function() {
      expect(round.turnCount).to.equal(0);
      round.takeTurn('object');
      expect(round.turnCount).to.equal(1);
      round.takeTurn('accessor method');
      expect(round.turnCount).to.equal(2);
    })

    it('should be able to make the next card the current card', function() {
      const secondCard = {id: 3,
                          question: 'What type of prototype method directly modifies the existing array?',
                          answers: '["mutator method", "accessor method", "iteration method"]',
                          correctAnswer: 'mutator method'}
      expect(round.deck.cards[1]).to.deep.equal(secondCard);
      round.takeTurn('object');
      expect(round.currentCard).to.deep.equal(secondCard);
    })

    it.skip('should evaluate the guess. Incorrect guesses should be recorded', function() {

    })

  //   it.skip('should be able to take the next turn', function() {
  //
  //     expect(round.turns).to.equal(0);
  //     expect(round.incorrectGuesses).to.equal([]);
  //
  //     round.takeTurn('object')
  //     round.takeTurn('accessor method')
  //
  //     expect(round.incorrectGuesses).to.equal([3]);
  //     expect(round.returnCurrentCard()).to.equal({ id: 5,
  //       question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
  //       answers: '["mutator method", "accessor method", "iteration method"]',
  //       correctAnswer: 'iteration method'
  //     })
  //   })
  // })
  })
  it.skip('should be able to calculate the persentage of correct guesses', function() {

    round.takeTurn('object')
    round.takeTurn('accessor method')
    expect(round.calculatePercentCorrect().to.equal(50))
  })

  it.skip('should be able to end the round', function() {

    round.takeTurn('object')
    round.takeTurn('accessor method')
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
  })
})
