const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const newArr = []

function forception (people, alphabet) {
        for (var i = 0; i < people.length; i++) {
            const person = people[i] + ":"
            for (let j = 0; j < alphabet[i].length; j++) {
                const alphaNew = alphabet.toUpperCase().split("");
                newArr.push(person.concat(alphaNew));
        }
    }
return newArr
}
console.log(forception(people, alphabet))
