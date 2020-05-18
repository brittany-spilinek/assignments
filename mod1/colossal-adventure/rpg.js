const readline = require("readline-sync");

//*****Variables*****//
let gameOver = false

function Character (name, health, damage, attack, items, phrase) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.attack = attack;
    this.items = items;
    this.phrase = phrase;
}

const player = new Character ("", 100, 40, "zaps")
const infected = new Character ("A COVID-19-Infected Person", 80, 20, " coughs on", [" an uncashed stimulus check"], "Ahh man, now I'm *cough* *hack* late for my party!")
const trump = new Character ("Trump, armed with Lysol and misinformation,", 60, 15, " pitifully swipes at", [" a Lysol-filled syringe"], "FLATTENING OF THE CURVE @realDonaldTrump")
const karen = new Character ("Karen, a maskless protestor,", 40, 10, " screeches at", [" several cases of toilet paper"], "You got blood on my jeans. I'm reporting this to your manager!!")
const conspiracy = new Character ("Coronavirus Conspiracy Theorist", 20, 5, " agressively argues with", [" a crusty tin-foil hat"], "THOSE 5G TOWERS MADE ME DO THIS!!")

let enemiesArray = [infected, trump, karen, conspiracy]

let inventory = [" a 6-foot cattle prod", " and a homemade mask"]

//*****Game Functions*****//

function walk () { 
    console.log("You walk forward.")
    const fate = Math.floor(Math.random() * 4) + 1 
    if (fate != 1) {
        return options
    } else {
        return randomEnemy()
    } 
}

const fightDamage = function (character) {
    return Math.floor(Math.random() * character.damage) + 1
} 

function randomEnemy () {
    let num = Math.floor(Math.random() * enemiesArray.length) //determines which enemy will appear
    const escapeMath = Math.floor(Math.random() * 2) + 1
    readline.question(enemiesArray[num].name + " has appeared and is invading your personal space!")
        fightOrFlight = readline.keyIn("Do you [A] attack or try to [F] flee? ", {limit: 'af'});
        if (fightOrFlight.toLowerCase() === 'f') {
            if (escapeMath === 1) {
                let fleeDamage = fightDamage(enemiesArray[num]);
                player.health = (player.health - fleeDamage)
                readline.question("You have escaped, but took " + fleeDamage + " damage.")
            } else {
                readline.question("You want to flee... but you're far too slow.")
                fight ()
            }
        } else if (fightOrFlight.toLowerCase() === 'a') {
            readline.question("You blindly hurl yourself into danger.")
            fight()
        } 
    function fight () {
        while (player.health > 0, enemiesArray[num].health > 0) {
            for (let i = 0; i < 1; i++) {
                let damage = fightDamage(player)
                enemiesArray[num].health = (enemiesArray[num].health - damage)
                readline.question(player.name + " zaps the enemy with the cattle prod for " + damage + " damage.")
            } 
            for (let i = 0; i < 1; i++) {
                let damage = fightDamage(enemiesArray[num])
                player.health = (player.health - damage)
                readline.question(enemiesArray[num].name + enemiesArray[num].attack + " you for " + damage + " damage.")
            }
        } 
        if (player.health <= 0) {
            readline.question(enemiesArray[num].phrase)
            console.log("You have died. Does this count as a COVID-19 death? No?")
            gameOver = true
        } else if (enemiesArray[num].health <= 0) {
            inventory.unshift(enemiesArray[num].items);
            enemiesArray.splice(num, 1);
            let someHealth = Math.floor(Math.random() * 10) + 1
            player.health = (player.health + someHealth)
            readline.question("You won" + inventory[0] + " and " + someHealth + " extra health!")
            if (enemiesArray.length > 0) {
                return options
            } else {
                readline.question("You have narrowly escaped with your life and made it to... the line wrapping around the store. Screw it. You're lactose intolerant anyway.")
                gameOver = true
            }
        } 
    }
}

//*****GAME*****//
console.log("It is the year 2020. As it turns out, the Mayans were right! They were just off by 8 years.");
player.name = readline.question("What is your name? ");
readline.question("It may be the end of times, " + player.name + ", but you are out of milk. Put on your mask, grab your cattle prod (I don't know why you have that, either) and let's take a trip to the grocery store!");


while (!gameOver) {

options = readline.keyIn("[W] to walk forward, [P] to see your health and inventory, [Q] to quit. ", {limit: 'wpq'});
    if (options.toLowerCase() === 'w') {
        walk()

    } else if (options.toLowerCase() === 'p') {
        console.log("Hello " + player.name + ". Your health is " + player.health + ". You have" + inventory)

    } else if (options.toLowerCase() === 'q') {
        console.log("Ok bye!"); 
        {break;}
    }

}

