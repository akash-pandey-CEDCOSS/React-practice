import React, { Component } from 'react'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h3>Brand</h3>
                    <ul className='nav-links'>
                        <li> About</li>
                        <li>ContactUs</li>
                        <li>Login</li>

                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation
