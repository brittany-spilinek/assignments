import React from 'react'

class Square extends React.Component {
    render(){
        return(
            <div>
                <div className={"square"} style={{backgroundColor: squareColor}}></div>
                <div className={"square"} style={{backgroundColor: squareColor}}></div>
                <div className={"square"} style={{backgroundColor: squareColor}}></div>
                <div className={"square"} style={{backgroundColor: squareColor}}></div>
            </div>
        )
    }
}

export default Square