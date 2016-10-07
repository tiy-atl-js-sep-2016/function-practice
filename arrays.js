// The HOFs
//  ------

// forEach, [x] -> undefined
// map,     [x] -> [newX]
// filter,  [x] -> [x]
// reduce,  [x] -> x

var isFrontend = function (item) {
  return instructor.teaches === "JavaScript";
  // THIS COMMENTED OUT SECTION DOES NOT WORK
  // if (item.material === "wood") {
  //   return [item.title, item.price];
  // }
};

var frontendInstructors = instructors.filter(isFrontend);

// action is a callback, that's another function to run
var myEach = function (items, action) {
  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    action(currentItem);
  }
};

var myMapNoEach = function (items, callback) {
  var result = [];

  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    var value = callback(currentItem);
    result.push(result);
  }

  return result;
};

var myMap = function (items, callback) {
  var result = [];
  myEach(items, function (x) {
    var value = callback(x);
    result.push(value);
  });
  return result;
};

var myFilter = function (items, callback) {
  var result = [];
  myEach(items, function (x) {
    if (callback(x)) {
      result.push(x);
    }
  });
  return result;
};

var doubles = [1,2,3,4,5].map(function (x) { return x * 2; });
var evens = [1,2,3,4,5].filter(function (x) { return x % 2 === 0; });

// var multiplyNums = function (nums, x) {
//   return nums.map(function(number) { return number * x; });
// };


/// CHAINING EXAMPLE

[1,2,3,4,5].filter(function (x) { return x % 2 === 0; });
[1,2,3,4,5].filter(function (x) { return x % 2 === 0; }).map(function (x) { return x * x; });

// that is the same as this...

var evens = [1,2,3,4,5].filter(function (x) { return x % 2 === 0; });
var squares = evens.map(function (x) { return x * x; });



// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : ['Ruby', 'JavaScript'] },
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

// instructors[instructors.length-1].teaches

var instructor = instructors[x];
var firstlang = instructor.teaches[0];
// instructors[2].teaches[0]
// instructors[2].teaches.toUpperCase()

// ---------------------------
// 1. Find largest number
// ---------------------------

function sortMax (nums) {
  return nums.sort()[nums.length-1];
}

// console.log("Question 1 is: ");
// console.log(findMax(numbers));

// findMax([1,4,2,6,198,7,26,1]);
// findMax(numbers);

function findMax (numbers) {
  var biggest = 0;

  for (var index = 0; index < numbers.length; index++) {
    var currentNum = numbers[index];
    if (currentNum > biggest) {
      biggest = currentNum;
    }
  }
  return biggest;
};

// ---------------------------
// 3. Find even numbers
// ---------------------------

[1,2,3,4].forEach(function (x) {
  console.log(x);
});

var findEvens = function (nums) {
  var result = [];

  each(nums, function (number) {
    if (number % 2 === 0) {
      result.push(number);
    }
  });

  return result;
};

//
// Double all the numbers in an array
//

function doubleNums (nums) {
  var result = [];
  nums.forEach(function (x) {
    result.push(x * 2);
  });
  return result;
}

function doubleNumsFor (nums) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    result.push(x * 2);
  }

  return result;
}


// ---------------------------
// 2. Find longest string
// ---------------------------




// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 6. Join Both Arrays Together
// ---------------------------

var concat = function (items1, items2) {
  var result = [];

  for (var i = 0; i < items1.length; i++) {
    result.push(items1[i]);
  }

  for (var i = 0; i < items2.length; i++) {
    result.push(items2[i]);
  }

  return result;
};


// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
