import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Character from './components/Character';


const StyledDiv = styled.div`
  color: blue;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res.data);
      setCharacters(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);


  return (
    <StyledDiv className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(character => {
          return <Character character={character}/>
        })
      }
    </StyledDiv>
  );
}

export default App;
