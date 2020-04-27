//Preliminaries
//1. Write a for loop that prints to the console the numbers 0 through 9.
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//2. Write a for loop that prints to the console 9 through 0.
for (let i = 10 - 1; i >= 0; i--) {
    console.log(i)
}

//3. Write a for loop that prints these fruits to the console.
const fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

//Bronze Medal
//1. Write a for loop that will push the numbers 0 through 9 to an array.
const numbers = []
for (let i = 0; i < 10; i++) {
    numbers.push(i);
}
console.log(numbers)

//2. Write a for loop that prints to the console only even numbers 0 through 100.
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//3. Write a for loop that will push every other fruit to an array.
const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const fruit2 = [];
const fruit3 = [];
for (let i = 0; i < fruits.length; i++) {
    if (i % 2 === 0) {
        fruit2.push(fruits[i]);
    } else if (i % 2 != 0) {
        fruit3.push(fruits[i]);
    }
}
console.log(fruit2)
console.log(fruit3)
