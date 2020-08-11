import React from 'react'
import Friend from './Friend'
import Pet from './Pet'

function FriendList () {

    const friends = [
        {
        name: "Ben",
        age: 29,
        pets: [
            {
            name: "spot",
            breed: "tabby"
            },{
            name: "John Johnson",
            breed: "husky"
            },{
            name: "Bear the bear",
            breed: "Grizzly"
            }
        ]
        },{
        name: "Bob",
        age: 31,
        pets: [
            {
            name: "Sally",
            breed: "Australian Shepard"
            }
        ]
        },{
        name: "Marcus",
        age: 25,
        pets: [
            {
            name: "Indy",
            breed: "Akita"
            },{
            name: "Anna",
            breed: "persian cat"
            }
        ]
        },{
        name: "Jacob",
        age: 20,
        pets: [
            {
            name: "fluffy",
            breed: "sphynx cat"
            },{
            name: "patches",
            breed: "sphynx cat"
            },{
            name: "tiger",
            breed: "sphynx cat"
            },{
            name: "oscar",
            breed: "sphynx cat"
            }
        ]
        }
    ]

// map through friends array for name,age, and array of pets

    const friendComponent = friends.map((person, index) => 
        <Friend  
            key={person.name + index}
            name={person.name}
            age={person.age}
            pets={person.pets} 
        />
    )

    return(
        <div>
            {friendComponent}
        </div>            
    )
}
export default FriendList