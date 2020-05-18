const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

peopleArray.sort(function(a, b) {
    if (a.lastName < b.lastName){
        return -1
    } else if (a.lastName > b.lastName){
        return 1
    } else {
        return 0
    }
})

const filteredOfAge = peopleArray.filter(function(person){
    if(person.age > 18 === true) {
        return true
    }
})

const sortedOfAge = filteredOfAge.map(function(person) {
    return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>"
})


console.log(JSON.stringify(sortedOfAge))