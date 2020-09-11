import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';



const App = () => {
  const [characters, setCharacters] = useState([]);
  const URL = `https://swapi.dev/api/people/`
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setCharacters(response.data.results);
        console.log(response.data.results)
      })
      .catch(err => console.log('Error: ', err))
      
  }, [])


  return (
      <div className="App">
        <h1>Star Wars Characters</h1>
        
    <   Character characters={characters} />
      </div>
    );
    }




   export default App


