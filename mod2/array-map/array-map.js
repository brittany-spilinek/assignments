//1.  Make an array of numbers that are doubles of the first array
// const arr = [2, 5, 100]
// const doubleNumbers = arr.map(function(num) {
//     return num * 2
// })
// console.log(doubleNumbers)

//2. Take an array of numbers and make them strings
// const arr = [2, 5, 100]
// const stringItUp = arr.map(function(num) {
//     return num.toString()
// })
// console.log(stringItUp)

//3. Capitalize each of an array of names
// const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// const capitalizeNames = arr.map(function(arr) {
    
//     function capitalize (arr) {
//         return arr[0].toUpperCase()
//     }
//     return capitalize(arr) + arr.toLowerCase().slice(1)
// })

//4. Make an array of strings of the names
// const people = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const namesOnly = people.map(function (person) {
//     return person.name
// })
// console.log(namesOnly)

//5. Make an array of strings of the names saying whether or not they can go to The Matrix
// const people = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
// const makeStrings = people.map(function (person) {
//     if (person.age < 50) {
//         return person.name + " is under age!!"
//     } else {
//         return person.name + " can go to The Matrix"
//     }
// })
// console.log(makeStrings)

//6. Make an array of the names in h1s, and the ages in h2s
const readyToPutInTheDOM = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const arr = readyToPutInTheDOM.map(function (person) {
    function names (readyToPutInTheDOM) {
        return "<h1>" + readyToPutInTheDOM.name + "</h1>"
    }
    function ages (readyToPutInTheDOM) {
        return "<h2>" + readyToPutInTheDOM.age + "</h2>"
    }
    return names(person) + ages(person)
})
console.log(arr)