module.exports = function(filepath){
  var fs = require("fs");

  this.productNames = function(callback){

    var products = [];
    var map = {};

      var listInFiles = fs.readFileSync("./files/products.csv", "utf8");
        var lines = listInFiles.split("\n");

        lines.forEach(function(lines){
          var productName = lines.split(",")[1];
            if(map[productName] === undefined){
              products.push(productName);
              map[productName] = 0;
            }
        });
// console.log(products);
callback(null, products)
  }

  this.productsSold = function(callback){

      var products = {};

      var list = fs.readFileSync("./files/products.csv", "utf8");
      var lineSplit = list.split("\n");

      lineSplit.forEach(function(lineSplit){
        var productName = lineSplit.split(",")[1];
        var productSold = Number(lineSplit.split(",")[2]);
          if(products[productName] === undefined){
            products[productName] = productSold;
          }
          else{
            products[productName] += productSold;
          }
      })
      callback(null, products);

  }
};
