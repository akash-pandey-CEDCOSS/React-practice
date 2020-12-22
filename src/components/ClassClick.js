import React, { Component } from 'react'
class ClassClick extends Component {
    clickHandler(){
        console.log("handle the clicks.")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button> {/* In a class component use this keyword. */}
            </div>
        )
    }
}

export default ClassClick
