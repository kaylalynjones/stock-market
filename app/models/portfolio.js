'use strict';
var Stock = require('./stock');

function Portfolio(name){
  this.name = name;
  this.stocks = [];

}

Portfolio.prototype.add = function(symbol, count){
  var stock = findStock(this.stocks, symbol);

  if(stock){
    stock.count += parseInt(count);
  }else{
    stock = new Stock(symbol, count);
    this.stocks.push(stock);
  }
};

Portfolio.prototype.del = function(symbol, count){
  var stock = findStock(this.stocks, symbol);

  if(stock){
    stock.count -= count;
    if(stock.count <= 0){
      var index = findStockIndex(this.stocks, stock.symbol);
      this.stocks.splice(index, 1);
    }
  }
};

// Private Helper Functions //

function findStock(stocks, symbol){
  for(var i = 0; i < stocks.length; i++){
    if(stocks[i].symbol === symbol.toUpperCase()){
      return stocks[i];
    }
  }

  return null;
}

function findStockIndex(stocks, symbol){
  for(var i = 0; i < stocks.length; i++){
    if(stocks[i].symbol === symbol.toUpperCase()){
      return i;
    }
  }

  return -1;
}

module.exports = Portfolio;
