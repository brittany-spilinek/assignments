// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 

function collectAnimals(...animals) {  
    return animals
}

//Write a function that returns a food object with the array names as properties using Object Literals:
function combineFruit(fruit, sweets, vegetables){
    return {fruit: fruit, sweets: sweets, vegetables: vegetables
    }
}

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrot"];

// console.log(combineFruit(fruit, sweets, vegetables))             

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

const vacation = {  
  location: "Burly, Idaho",
  duration: "2 weeks"
};
const {location, duration} = vacation

function parseSentence(vacation){
  return `We're going to have a good time in ${location} for ${duration}`
}
// console.log(parseSentence(vacation))

// Use destructuring to make this code ES6:

function returnFirst(items){
    const [ firstItem ] = items; /*change this line to be es6*/
    return firstItem
}

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [ firstFav, secondFav, thirdFav ] = favoriteActivities;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`;
}

// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals) {  
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)) 

// Try to make the following function more ES6xy:

function product(a, b, c, d, e) {  
    let numbers = [a,b,c,d,e];
    return numbers.reduce((acc, number) => acc * number)
}
// console.log(product(1, 2, 3, 4, 5))

// Make the following function more ES6xy. Use at least both the rest and spread operators:
function unshift(array, a, b, c, d, e) {  
    let numbers = [a, b, c, d, e] 
    return [...numbers, ...array]
  }

// Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

console.log(populatePeople())