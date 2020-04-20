const readLineSync = require ('readline-sync');

const num1 = readLineSync.question("Please enter your first number: ")
console.log(num1)

const num2 = readLineSync.question("Please enter your second number: ")
console.log(num2)

operator = ['Add', 'Subtract', 'Multiply', 'Divide'],
index = readLineSync.keyInSelect(operator, "Please enter the operation to perform: "),
console.log(operator[index]);

function add(num1, num2) {
    return num1 + num2
}
function sub(num1, num2) {
    return num1 - num2
}
function mul(num1, num2) {
    return num1 * num2
}
function div(num1, num2) {
    return num1 / num2
}

if (index === 0) {
    console.log("The result is: ",add(Number(num1), Number(num2)))
}
else if (index === 1) {
    console.log("The result is: ",sub(Number(num1), Number(num2)))
}
else if (index === 2) {
    console.log("The result is: ",mul(Number(num1), Number(num2)))
}
else if (index === 3) {
    console.log("The result is: ",div(Number(num1),Number(num2)))
}