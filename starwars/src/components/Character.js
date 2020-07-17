// Write your Character component here
import React from 'react'

const Character = (props) => {

    const { person } = props
    
    return (
        <div>
            <h2>{person.name}</h2>
            <h3>Birth Year:{person.birth_year}</h3>
            <h3>Height: {person.height}</h3>
            <a href={person.url}>{person.url}</a>
        </div>
    )
}

export default Character;