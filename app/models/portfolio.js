'use strict';

function Portfolio(name){
  this.name = name;
  this.stocks = [];

}

Portfolio.prototype.add = function(stock){
  for(var i = 0; i < this.stocks.length; i++){
    if(this.stocks[i].symbol === stock.symbol){
      this.stocks[i].count += stock.count;
      return;
    }
  }

  this.stocks.push(stock);
};

module.exports = Portfolio;
