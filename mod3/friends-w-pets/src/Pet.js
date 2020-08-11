import React from 'react'

function Pet(props) {
    return (
        <div class='pet'>
            <h2>Name - Breed: {props.name} - {props.breed}</h2>
        </div>
    )
}

export default Pet