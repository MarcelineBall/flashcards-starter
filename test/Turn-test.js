const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to take in a guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');
  })

  it('should be able to also take in a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card.id).to.equal(1)
  })

  it('should be able to return the guess', function() {
    const turn = new Turn('object');
    const guess = turn.returnGuess();
    expect(guess).to.equal('object');
  })

  it('should be able to return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const returnedCard = turn.returnCard();
    expect(returnedCard).to.equal(card)
  })

  it('should be able to indicate if the guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true)
  })

  it('should return \'correct!\' if the guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const isGuessCorrect = turn.evaluateGuess()
    expect(turn.giveFeedback()).to.equal('correct!')
  })

  it('should return \'inccorect!\' if the guess is not correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    const isGuessCorrect = turn.evaluateGuess()
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })
})
