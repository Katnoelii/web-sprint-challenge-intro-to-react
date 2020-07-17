import React, { useState, useEffect,} from 'react';
import './App.css';
import { BASE_URL } from './constants'
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const App = () => {
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [loading,setLoading] = useState(true)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const Title = styled.div`
  font-size:27px;
  margin-bottom:50px;
  `

  useEffect(() => {
    axios.get(`${BASE_URL}api/people/`)
    .then(response => {
      console.log('happy path :)')
      setCharacters(response.data.results)
      setLoading(false)
    })
    .catch(err => {
      console.log('sad path :(', err)
    })
  },[])

  if (loading) return <h1>Fetching Data. Please Wait...</h1>


  return (
    <div className="App">
      <Title>
      <h1 className="Header">Characters</h1>
      </Title>
      {characters.map(character => {
        return (<Character person={character}/>)
      })}
    </div>
  );
}

export default App;
