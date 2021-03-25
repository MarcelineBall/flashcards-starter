const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function(){
  let game;
  beforeEach(function() {
    game = new Game()
  })
  it('should keep track of the current round', function() {
    game.start()
    expect(game.currentRound).to.be.an.instanceof(Round)
  })

  describe('start method', function(){

    it('should create cards', function(){
      game.start()
      expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card)
    })

    it('should put cards in a deck', function(){
      game.start()
      expect(game.currentRound.deck.cards.length).to.equal(30)
    })
  })
})
