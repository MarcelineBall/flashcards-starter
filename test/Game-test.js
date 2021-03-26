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
    game.start()
  })

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.be.an.instanceof(Round)
  })

  describe('start method', function(){

    it('should create cards', function(){
      expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card)
    })

    it('should put cards in a deck', function(){
      expect(game.currentRound.deck.cards.length).to.equal(30)
    })

    it('should invoke printMessage', function() {
      expect(game.printMessage()).to.equal('Welcome to FlashCards! You are playing with 30 cards.')
    })

    it('should invoke printQuestion', function() {
      expect(printQuestion()).to.equal(true)
    })
  })
})
