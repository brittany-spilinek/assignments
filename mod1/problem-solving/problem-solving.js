//1. Write a function that takes an array of numbers and returns the largest (without using Math.max())
const largest = [3, 5, 2, 8, 1] 

function findmax () {
    largest.sort()
    return largest.pop()
}
console.log (findmax())

//2. Write a function that takes an array of words and a character and returns each word that has that character present.
//  "!" => ["C%4!", "Hey!"]

const lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]
const character = "!"
const newArr = []

function findwords (lettersWithStrings, character) {
    for (let i = 0; i < lettersWithStrings.length; i++) {
        if (lettersWithStrings[i].includes(character) === true) {
            newArr.push(lettersWithStrings[i])
        }
    }  
    return newArr    
}
console.log(findwords(lettersWithStrings,character))

//3. Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
//isDivisible(4, 2) // => true
//isDivisible(9, 3) // => true
//sDivisible(15, 4) // => false

const num1 = 15
const num2 = 4

function isDivisible (num1, num2) {
    if (num1 % num2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isDivisible(num1, num2))