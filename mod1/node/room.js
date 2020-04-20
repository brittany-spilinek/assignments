const readline = require("readline-sync");

//Greet Player
const name = readline.question("What is your name? ");
console.log('Welcome, ' + name + ' ...')

//Variables
let gameOver = false
let options = ['Put hand in hole', 'Find the key', 'Open the door']

//Game Loop
while (!gameOver){
index = readline.keyInSelect(options, 'What will you do? ');
console.log('You try to ' + options[index])

if (index === 0){
    console.log(name + " has died from being an idiot, probably.")
    gameOver = true}

else if (index === 1){
    console.log('You have found a key!')
    options = ['Put hand in hole', 'Open the door']
    index = readline.keyInSelect(options, 'What will you do next? ');
    console.log('Armed with a key, you ' + options[index])

    if (index === 0){
        console.log(name + " has died from sticking hands where hands shouldn't be stuck.")
        gameOver = true
    }
    else if (index === 1){
        console.log("You insert the key and turn it... 'click'... The door heaves open and you escape!")
        gameOver = true
    }
}
else if (index === 2) {
    console.log('The door is locked. You should probably find the key...')
}
}