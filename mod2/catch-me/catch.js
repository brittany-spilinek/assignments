//1a. Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type number:
// function sum (x, y) {
// try{
//    if(x,y != Number) {
//        throw "Argument is not a number"
//    } else {
//        console.log("Argument is a number")
//    }
// }
// catch(err){
//     console.log(err)
// }
//  return x + y
// }
//sum (2, 3)

//1b. Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.
// function sum(x, y) {
//     return x + y
// }
// try {
//     sum(1, 2)
//     if(1, 2 != Number) {
//         throw err
//     } else {
//         console.log("Argument is a number")
//     }
// }
// catch(err){
//     console.log("Argument is not a number")
// }

//2a. Given a user object, write a function called login that takes a username and password as parameters.
// Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
const user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
        if(username === user.username && password === user.password) {
            console.log("login successful!")
        } else {
            throw "Username or password incorrect"
        }
    }
    catch(err){
        console.log(err)
    }
}
//login("sam", "123abc")

//2b. Call the login function within a try block. In one instance use the correct credentials,
// and in another use incorrect ones. Make sure you see the appropriate message!

try {
    login("sam", "123abc")
    
}
catch(err){
    
}
