// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

function sortMax (nums) {
  return nums.sort()[nums.length-1];
}

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

// console.log("Question 1 is: ");
// console.log(findMax(numbers));

// findMax([1,4,2,6,198,7,26,1]);
// findMax(numbers);

// ---------------------------
// 2. Find longest string
// ---------------------------




// ---------------------------
// 3. Find even numbers
// ---------------------------

var findEvens = function (nums) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    var currentNum = nums[i];
    if (currentNum % 2 !== 0) {
      result.push(currentNum);
    }
  }

  return result;
};


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
