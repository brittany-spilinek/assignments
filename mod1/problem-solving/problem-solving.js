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