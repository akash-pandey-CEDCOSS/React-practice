import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
       // this.setState({
         //   count: this.state.count + 1 //Object creaed to count vale.
        //}, () => {
          //  console.log('Callback value', this.state.count) //A callback function to be called after the settsate function runs.I
        //})
        this.setState(prevState=>({ //use functions insted of creating objects.
            count: prevState.count+1
        }))
        console.log(this.state.count); //this is getting set before the setState function even starts.
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }


    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Click</button>
            </div>
        )
    }
}

export default Counter
