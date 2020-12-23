import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: '',
            redirect: null
        }
    }
    userChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://fb.sellernext.com/user/login?username=' + this.state.username + '&password=' + this.state.password, {
            method: "GET",
            headers: {
                Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA'
            }

        }).then(event => event.json())
            .then((result) => {
                if (result.success === true) {
                    this.setState({
                        message: 'login success',
                        redirect: '/Story'
                    })

                } if (result.success === false) {
                    this.setState({
                        message: 'login failed'
                    })
                }
            })

    }
    render() {

        var cssfile = { color: "red" }
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className='form-div'>
                <h1 className='login'>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className='input_1' type='text' value={this.state.username} placeholder='Username' onChange={this.userChange}></input>
                    <input className='input_1' type='password' value={this.state.password} placeholder='password' onChange={this.passwordChange}></input>
                    <input className='input_1' type='submit' value='Login'></input>

                </form>

                <div style={cssfile}>{this.state.message}</div>
            </div>
        )
    }
}
export default Login