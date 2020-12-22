import React, { Component } from 'react'

class Story extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            count: 0,
            dict: {}
        }

    }
    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1


        }))
        console.log(this.state.count)
    }
    uniArray(value, index, self) {
        return self.indexOf(value) === index;
    }
    changeHandler = (event) => {
        var arr = []

        var dic = new Object();
        this.setState({ message: event.target.value })
        // console.log(this.state.message, event.target.value);
        arr = event.target.value.split(' ');
        var unique = arr.filter(this.uniArray)
        console.log(unique)
        for (var i = 0; i < unique.length; i++) {
            var count = 0
            for (var j = 0; j < arr.length; j++) {
                if (unique[i] === arr[j]) {
                    count++
                }
            } dic[unique[i]] = count
            console.log(dic)
            this.setState({
                dict: dic
            })
        }
    }


    render() {
        var { dict } = this.state;

        return (
            <>
                <h1>Word count</h1>
                <form>
                    <label>
                        Start typing :
                   <textarea type="text" value={this.state.message} name="name" onChange={this.changeHandler} />
                    </label>
                    <input type="submit" name="submit" />
                </form>

                <p>{this.state.message} </p>
                {/* <p>{this.state.count}</p> */}
                <table>
                    {
                        Object.keys(dict).map((e) => {
                            return <tr>
                                <td>
                                    <h5>
                                        {e}
                                    </h5>
                                </td>
                                <td>{dict[e]}</td>
                            </tr>
                        })
                    }
                </table>


            </>
        )
    }
}

export default Story
