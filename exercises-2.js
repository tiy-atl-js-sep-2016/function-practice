// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

// What about Ternary Conditionals?
function ternaryMax (x, y) {
  return x > y ? x : y;
}


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
};

function maxOfThree(x, y, z){
  if (x >= y && x >= z) { return x; }
  if (y >= x && y >= z) { return y; }
  return z;
};

console.log(maxOfThree(5, 3, 5));
console.log(maxOfThree(3, 5, 5));
console.log(maxOfThree(5, 5, 3));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  var lowerChar = char.toLowerCase();
  if (lowerChar === "a") {
    // (char === "a") || "A"
    //  => true || "A"
    //  => false || "A"
    // char === ("a" || "A")
    //  => char === ("a")
    return true;
  } else if (lowerChar === "e") {
    return true;
  } else if (lowerChar === "i") {
    return true;
  } else if (lowerChar === "o") {
    return true;
  } else if (char === "u") {
    return true;
  } else {
    return false;
  }
};

 function cleanerIsVowel (char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char.toLowerCase());
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate (phrase) {
  var newPhrase = "";
  for (var count = 0; count < phrase.length; count++) {
    var letter = phrase[count];
//    if (!cleanerIsVowel(letter) && letter !== " ") {
    if (cleanerIsVowel(letter) || letter === " ") {
      newPhrase += letter;
    } else {
      newPhrase += letter + "o" + letter;
    }
  }
  return newPhrase;
}

console.log(translate("these are some words"));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse (string) {
  var letters = [];
  for (var count = 0; count < string.length; count++) {
    var letter = string[count];
    letters.unshift(letter);
  }
  return letters.join("");
};


function reverseAlt (string) {
  var newString = "";
  for (var count = string.length - 1; count >= 0; count--) {
    var letter = string[count];
    newString += letter;
  }
  return newString;
};
