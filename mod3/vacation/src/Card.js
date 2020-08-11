import React from 'react'

function Card (props) {
    return (
        <div className={'card'}>
            <div className={'place'}>Place: {props.place}</div>
            <div className={'price'}>Price: ${props.price}</div>
            <div className={'timeToGo'}>Time To Go: {props.timeToGo}</div>
        </div>
    )
}

export default Card