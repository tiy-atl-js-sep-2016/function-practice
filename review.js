// Write a function to access price data
function getPrice (x) {
  return data.results[x].price;
};

// Use getPrice and a loop to collect all the prices.
function getPrices () {
  var prices = [];
  for (var i = 0; i < data.results.length; i++) {
    var newPrice = Number(getPrice(i));
    prices.push(newPrice);
  };

  return prices;
}

var prices = getPrices2(data.results);
// var average = your averaging code here
// var answer1Box = document.getElementById("whatever");
// answer1Box.innerHTML = "The average is " + average;


function getPrices2 (items) {
  var prices = [];

  for (var i = 0; i < items.length; i++) {
    var newPrice = Number(items[i].price);
    prices.push(newPrice);
  };

  return prices;
};

function getPrices3 (items) {
  return items.map(function (item) {
    return Number(item.price);
  });
};

// var prices = data.results.map(function (item) {
//   return Number(item.price);
// });

var prices = getPrices3(data.results);

// var total = 0;
// for (var i = 0; i < prices.length; i++) {
//   total += prices[i];
// }
// var average = total / prices.length;

// Map Examples for Matt
var nums = [1,2,3,4,5,5];

nums.map(function (x) { return x; });
// => [1, 2, 3, 4, 5, 5]
nums.map(function (x) { return x + 1; });
// => [2, 3, 4, 5, 6, 6]
nums.map(function (x) { return x * 2; });
// => [2, 4, 6, 8, 10, 10]
nums.map(function (x) { return x * x; });
// => [1, 4, 9, 16, 25, 25]


