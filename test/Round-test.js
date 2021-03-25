const Chai = require('Chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('..src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to take in a deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
    const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', '["mutator method", "accessor method", "iteration method"]', 'mutator method');
    const card3 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', '["mutator method", "accessor method", "iteration method"]', 'iteration method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  })

  it('should return the current card', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
    const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', '["mutator method", "accessor method", "iteration method"]', 'mutator method');
    const card3 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', '["mutator method", "accessor method", "iteration method"]', 'iteration method');
    const deck = new Deck(deck);
    const round = new Round(deck);
    expect(round.returnCurrentCard).to.equal({ id: 1,
                                               question: 'What allows you to define a set of related information using key-value pairs?',
                                               answers: '["object", "array", "function"]',
                                               correctAnswer: 'object'
                                             })
  })

  it('should be able to take the next turn', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
    const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', '["mutator method", "accessor method", "iteration method"]', 'mutator method');
    const card3 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', '["mutator method", "accessor method", "iteration method"]', 'iteration method');
    const deck = new Deck(deck);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.equal([]);

    round.takeTurn('object')
    round.takeTurn('accessor method')

    expect(round.incorrectGuesses).to.equal([3]);
    expect(round.returnCurrentCard()).to.equal({ id: 5,
                                               question: 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
                                               answers: '["mutator method", "accessor method", "iteration method"]',
                                               correctAnswer: 'iteration method'
                                             })
  })

  it('should be able to calculate the persentage of correct guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
    const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', '["mutator method", "accessor method", "iteration method"]', 'mutator method');
    const card3 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', '["mutator method", "accessor method", "iteration method"]', 'iteration method');
    const deck = new Deck(deck);
    const round = new Round(deck);
    round.takeTurn('object')
    round.takeTurn('accessor method')
    expect(round.calculatePercentCorrect().to.equal(50))
  })

  it('should be able to end the round', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
    const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', '["mutator method", "accessor method", "iteration method"]', 'mutator method');
    const card3 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', '["mutator method", "accessor method", "iteration method"]', 'iteration method');
    const deck = new Deck(deck);
    const round = new Round(deck);
    round.takeTurn('object')
    round.takeTurn('accessor method')
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
  })
})
