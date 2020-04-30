const readline = require('readline-sync');

const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
const shift = parseInt(readline.question('How many letters would you like to shift? '));
const cipherArr = []
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function cipher(input, shift) {
    for (let i = 0; i< input.split("").length; i++) {
        const index = alphabet.indexOf(input[i])
        const newIndex = (index + shift)%26
        if (alphabet.indexOf(input[i]) === -1) {
            cipherArr.push(input[i])
        } else {
            cipherArr.push(alphabet[newIndex])
        }
    }
return cipherArr.join("")
}
console.log(cipher(input, shift))
