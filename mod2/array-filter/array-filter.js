//1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// const arr = [3, 6, 8, 2]
// const fiveAndGreaterOnly = arr.filter(num => num >= 5)

// console.log(fiveAndGreaterOnly)

//2. Given an array of numbers, return a new array that only includes the even numbers.
// const arr = [3, 6, 8, 2]
// const evensOnly = arr.filter(num => num % 2 === 0)

// console.log(evensOnly)

//3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
// const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]
// const fiveCharactersOrFewerOnly = arr.filter(string => string.length <= 5)

// console.log(fiveCharactersOrFewerOnly)

//4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const arr = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const peopleWhoBelongToTheIlluminati = arr.filter(person => person.member && person.name)

console.log(JSON.stringify(peopleWhoBelongToTheIlluminati))

//5. Make a filtered list of all the people who are old enough to see The Matrix (younger than 18).
// const arr = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// const ofAge = arr.filter(person => person.age > 17)

// console.log(ofAge)