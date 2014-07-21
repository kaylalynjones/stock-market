/* global describe, it */
/* jshint expr:true */

'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');
var Stock = require('../../app/models/stock');

describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a portfolio', function(){
      var p1 = new Portfolio('retirement');

      expect(p1).to.be.instanceof(Portfolio);
      expect(p1.name).to.equal('retirement');
      expect(p1.stocks).to.have.length(0);
    });
  });

  describe('#add', function(){
    it('should add stocks to portfolios', function(){
      var tech = new Portfolio('tech');
      tech.add('aapl', 50);
      tech.add('amzn', 30);
      tech.add('aapl', 25);

      expect(tech.stocks).to.have.length(2);
      expect(tech.stocks[0].count).to.equal(75);
      expect(tech.stocks[1]).to.be.instanceof(Stock);

    });
  });

  describe('#del', function(){
    it('should remove stocks from a portfolio', function(){
      var tech = new Portfolio('tech');
      tech.add('aapl', 50);
      tech.add('msft', 40);

      tech.del('aapl', 10);
      tech.del('msft', 40);
      tech.del('aapl', 20);

      expect(tech.stocks).to.have.length(1);
      expect(tech.stocks[0].count).to.equal(20);
      expect(tech.stocks[0].symbol).to.equal('AAPL');
    });
  });
});
