/* global describe, it */
/* jshint expr:true */

'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');

describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a portfolio', function(){
      var p1 = new Portfolio('retirement');

      expect(p1).to.be.instanceof(Portfolio);
      expect(p1.name).to.equal('retirement');
      expect(p1.stocks).to.have.length(0);
    });
  });

});
