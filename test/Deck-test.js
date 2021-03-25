const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  })

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to take in cards', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
    const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', '["mutator method", "accessor method", "iteration method"]', 'mutator method');
    const card3 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', '["mutator method", "accessor method", "iteration method"]', 'iteration method');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.equal([card1, card2, card3]);
    expect(deck.cards.card2.id).to.equal(3);
  })

  it('should be able to count the cards in the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', '["object", "array", "function"]', 'object');
    const card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', '["mutator method", "accessor method", "iteration method"]', 'mutator method');
    const card3 = new Card(5, 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?', '["mutator method", "accessor method", "iteration method"]', 'iteration method');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards).to.equal(3);
  })
})
