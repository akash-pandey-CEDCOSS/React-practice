import React, { Component } from 'react'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: ''
        }

    }
    userChange = (e) => {
        // e.preventDefault()
        this.setState({
            username: e.target.value

        })

    }
    passwordChange = (e) => {
        // e.preventDefault()
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://fb.sellernext.com/user/login?username='+this.state.username+'&password='+this.state.password, {
            method: "GET",
            headers: {
                Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA'
            }

        }).then(event => event.json())
            .then((result) => {
                if (result.success === true) {
                    this.setState({
                        message: 'login success'
                    })
                } if (result.success === false) {
                    this.setState({
                        message: 'login failed'
                    })
                }

            })
    }



    // handleInputChange = (e) => {
    //     e.preventDefault()
    //     // console.log(e.target.name)
    //     console.log(e.target.value)
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }


    render() {
        const { username, password } = this.state
        return (
            <div>
                <h1>Login form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.username} placeholder='Username' onChange={this.userChange}></input>
                    <input type='password' value={this.state.password} placeholder='password' onChange={this.passwordChange}></input>
                    <input type='submit' value='Login'></input>
                </form>
                <div>{this.state.message}</div>
            </div>
        )
    }

}

export default Login