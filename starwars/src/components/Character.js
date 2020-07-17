// Write your Character component here
import React from 'react'
import styled from 'styled-components'
const Character = (props) => {

    const { person } = props

    const Container = styled.div`
    background:url('https://images.unsplash.com/photo-1518365428912-757c887d86c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80');
    border:2px solid black;
    border-radius:5px;
    width:50%;
    display:flex;
    flex-direction:column;
    padding:10px;
    margin:auto;
    margin-bottom:30px;
    `

    const Names = styled.div`
    text-decoration:gold underline;
    `
    const Link = styled.a`
    color:yellow;
    text-decoration:none;

    `
    
    return (
        <Container>
            <Names>
            <h1>{person.name}</h1>
            </Names>
            <h3>Birth Year: {person.birth_year}</h3>
            <h3>Height: {person.height}cm</h3>
            <h3>Mass: {person.mass}</h3>
            <h3>Gender: {person.gender}</h3>
            <Link>
            <a href={person.url}>{person.url}</a>
            </Link>
        </Container>
    )
}

export default Character;