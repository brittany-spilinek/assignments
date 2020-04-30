//1. Make a function that will return any given string into all caps followed by the same string all lowercase.
const string = ""
function capitilizeAndLowercase (string) {
    const capitalString = string.toUpperCase()
    const lowerCaseString = string.toLowerCase()
    return capitalString + lowerCaseString
}
console.log(capitilizeAndLowercase("hello"))

//2. Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
function findMiddleIndex (string) {
    const halfLength = (string.length) / 2
    return Math.floor(halfLength)
}
console.log(findMiddleIndex("hello world"))

//3. Make a function that uses slice() and the other functions you've written to return the first half of the string.
function returnFirstHalf (string) {
    const roundedHalfLength = (Math.floor((string.length) / 2))
    const firstHalf = string.slice(0, roundedHalfLength)
    return firstHalf
}
console.log(returnFirstHalf("Hello world"))

//4. Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
function capitilizeAndLowercaseHalf (string) {
    const roundedHalfLength = (Math.floor((string.length) / 2))
    const firstHalf = string.slice(0, roundedHalfLength)
    const secondHalf = string.slice(roundedHalfLength)
    const firstHalfCapitilized = firstHalf.toUpperCase()
    return firstHalfCapitilized + secondHalf
}
console.log(capitilizeAndLowercaseHalf("Birbs. They always be birbin'."))