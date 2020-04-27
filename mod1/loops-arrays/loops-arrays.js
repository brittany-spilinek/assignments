//Part 1 Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var counts = {};
for (let i = 0; i <= officeItems.length; i++) {
    var num = officeItems[i];
    counts[num] = (counts[num] || 0) + 1;
}
console.log(counts["computer"])

//Part 2 Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
 for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see 'Mad Max: Fury Road', the best movie every made and you're objectively wrong if you think otherwise.");
     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " isn't old enough to see 'Mad Max: Fury Road' but it is worth the wait.");
     }
 }