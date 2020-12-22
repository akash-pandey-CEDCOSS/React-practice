import React, { Component } from 'react'

class ConditionalRender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // return this.state.isLoggedIn ? (<div>Welcome Vishwas</div>) : (<div>Welcome Guest</div>)
        //Using ternary operator used most of the time in codes.
        return this.state.isLoggedIn && <div>Welcome vishwas</div>
        //Using '&' operator, if condition is false there is nothing to display.
    }
}

export default ConditionalRender
