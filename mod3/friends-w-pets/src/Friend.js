import React from 'react'
import Pet from './Pet'

function Friend(props) {
    const petComponent = props.pets.map((pet, index) =>
        <Pet 
            key={pet.name + index}
            name={pet.name}
            breed={pet.breed}
        />
    )
    
    return(
        <div>
            <h1 id='name'>Name: {props.name} </h1>
            <h2>Age: {props.age} </h2>
            <h2>Pets: {petComponent} </h2>
        </div>
    )
}

export default Friend