//1. Turn an array of numbers into a total of all the numbers.
// const nums = [1,2,3]
// const total = nums.reduce(function(final, num) {
//     final += num
//     return final
// })
// console.log(total)

//2. Turn an array of numbers into a long string of all those numbers.
// const nums = [1,2,3]
// const stringConcat = nums.reduce(function(final, num) {
//     return final.concat(num).toString()
// },[])
// console.log(stringConcat)

//3. Turn an array of voter objects into a count of how many people voted.
// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// const totalVoters = voters.reduce(function(final, voter) {
//     if (voter.voted) {
//         final++
//     }
//     return final
// }, 0)
// console.log(totalVoters)

//4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.
// const wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidget spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]
// const shoppingSpree = wishlist.reduce(function(final, item) {
//     final += item.price
//     return final
// }, 0)
// console.log(shoppingSpree)

//5. Given an array of arrays, flatten them into a single array.
// const arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]
// const flatten = arrays.reduce(function(final, array) {
//     return final.concat(array)
// }, [])
// console.log(flatten)

//6. Given an array of potential voters, return an object representing the results of the vote. Include how many 
//of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each 
//of those age ranges actually voted. The resulting object containing this data should have 6 properties.
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const voterResults = voters.reduce(function(final, voter) {
    if(voter.age >=18 && voter.age <= 25){
        final.youths++; if (voter.voted) {
            final.youngVotes++
        }
    } else if (voter.age >=26 && voter.age <= 35) {
        final.mids++; if (voter.voted) {
            final.midVotes++
        }
    } else if (voter.age >=36 && voter.age <= 55) {
        final.olds++; if (voter.voted) {
            final.oldVotes++
        }
    }
    return final

}, {youths: 0,
youngVotes: 0,
mids: 0,
midVotes: 0,
olds: 0,
oldVotes: 0})

console.log(voterResults)