// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
var temp4 = -5
var temp5 = 211

// create a function that will hold all the logic
const isBoiling = (number) => {
  // make an if/else chain to go through whether the temp is above, below, or at boiling point
  if(number > 212 ) {
    // return the result (number is ____ boiling)
    return `${ number } is above boiling point.`
  } else if(number < 212) {
    return `${ number } is below boiling point.`
  } else if(number === 212) {
    return `${ number } is at boiling point.`
  } else {
    return "That is not a valid input."
  }
}
// call the function 3 times wht the test variables
// console.log(isBoiling(temp1));
// console.log(isBoiling(temp2));
// console.log(isBoiling(temp3));
// console.log(isBoiling(temp4));
// console.log(isBoiling(temp5));


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// create a function for an array
const multiplyBy5 = (array) => {
  // create a new array
  let newArr = []
  // create a for loop to iterate through array
  for(let i = 0; i < array.length; i++) {
    // multiply each value at each index by 5 and push into our new array
    newArr.push(array[i] * 5)
    // array[i] *= 5
  }
  // return the array
  return newArr
  // return array
}
// console.log(multiplyBy5(myNumbers1));




// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// create a function for an array
const mult5 = (array) => {
  // create a new array using array.map()
  let newArr = array.map(value => value * 5)
  return newArr
}
// console.log(mult5(myNumbers2));



// --------------------4) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]

var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]

// declare a function called oddIndexExtract
const oddIndexExtract = (oldArray) => {
  // return with a filter method using both index and value arguments
  return oldArray.filter((value, index) => {
    if(typeof oldArray[i] === "string") {
      // use the modulo to identify odd indexes and return them
      return index % 2 != 0
    } else {
      return "invalid input"
    }
  })
}
console.log(oddIndexExtract(coffeeRun));




// --------------------5) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// create a function that can take in any string
const noVowelsPlease = (string) => {
  if(typeof string === "string") {
    // create a new array called vowel array for all possible values and cases
    let vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    // create a charater array out of the string
    let charArr = string.split("")
    // use filter to parse through the string array
    let noVowelArray = charArr.filter((value, index) => {
      // use vowel array to help with the logic in the filter
      let isValue = true
      return isValue !== vowelArray.includes(charArr[index])
    })
    // join the new array that filter makes
    let noVowelsString = noVowelArray.join("")
    // return the new string
    return noVowelsString
  } else {
    return "This is not a string"
  }
}
console.log(noVowelsPlease(stringWithVowels1));
console.log(noVowelsPlease(stringWithVowels2));

const noVowels = (str) => {
  return str.replace(/a|e|i|o|u/gi, "")
}

// // function that takes in a string
// const noVowel = (str) => {
//   // new variable inside called array vowel
//   // split the string into an array
//   let arrayVowel = str.split("")
//   // returned a filter that excludes (using !) any vowel using &&
//   arrayVowel.filter(value =>{
//     value != "a" &&
//   }).join("")
//   // joined everything at the end
// }


// --------------------6) Expand the logic from #5 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"
