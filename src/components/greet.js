import React, { Component } from 'react'

const greet = ({ name, heroName }) => { //Destructuring the props and state

    return (
        <div>
            <h1>
                Hello {name} a.k.a. {heroName}
            </h1>

        </div>
    );

}
export default greet;