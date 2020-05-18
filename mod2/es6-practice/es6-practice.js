//let and const 
//Replace all the vars with let and const.
// const name = "John"
// const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

// runForLoop(["cat", "dog"])

//ES6 Arrow Functions
//1. Re-write this .map() using an arrow function:

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

// console.log(mapVegetables(carrots))

//2. Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}
// console.log(filterForFriendly(people))

//3. Re-write the following functions to be arrow functions:

const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b

// console.log(produceProduct(2, 3))

//4. Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// "Hi Kate Stark, how does it feel to be 40?"

const firstName = "Jane";
const lastName = "Doe";
const age = 100;
const printString = (firstName, lastName, age) => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`);
// console.log(printString(firstName, lastName, age))

//5. Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog")
 }
//  console.log(filterForDogs(animals))

//Template Literals
//Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
//Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

const location = "Hawaii";
const name = "Janice";
const templateLiteral = (location, name) => console.log(`Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)
console.log(templateLiteral(location,name))