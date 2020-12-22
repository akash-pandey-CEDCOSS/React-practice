import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Diana', 'Marry']
    // const namelist= names.map(name=><h2>{name}</h2>) 
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Wayne',
            age: 28,
            skill: 'Node JS'
        },
        {
            id: 3,
            name: 'Linda',
            age: 10,
            skill: 'Javascript'
        }
    ]
    const personlist = persons.map(person => (
        <Person key={person.id} person={person}></Person>
    ))
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>      //1st way of showing a map
            <h2>{names[2]}</h2> */}
            {/* {
                names.map(name => <h2>{name}</h2>)  //2nd way of showing a map
            } */}

            {personlist}

        </div>
    )
}

export default NameList
