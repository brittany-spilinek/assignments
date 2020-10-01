import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClickBlack = this.handleClickBlack.bind(this)
        this.handleClickPurple = this.handleClickPurple.bind(this)
        this.handleClickBlueRight = this.handleClickBlueRight.bind(this)
        this.handleClickBlueLeft = this.handleClickBlueLeft.bind(this)
    }

    handleClickBlack(){
        this.setState(prevState => {
            if(prevState.colors[0] === "white")
                return {
                    colors: ["black", "black", "black", "black"]
                }
            else {
                return {
                    colors: ["white", "white", "white", "white"]
                }
            }
        })}

    handleClickPurple(){
        this.setState(prevState => {
            return {
                colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    handleClickBlueRight(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })
    }

    handleClickBlueLeft(){
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            }
        })
    }

    render(){
        const square = this.state.colors.map(color => 
            <div className={"square"} style={{backgroundColor: color}}></div>
        )
        return(
            <div>
                <div className={"container"}>
                    {square}
                </div>
                <button className={"button"} onClick={this.handleClickBlack}></button>
                <button className={"button"} onClick={this.handleClickPurple}></button>
                <button className={"button"} onClick={this.handleClickBlueRight}></button>
                <button className={"button"} onClick={this.handleClickBlueLeft}></button>
            </div>
        )
    }
}

export default App