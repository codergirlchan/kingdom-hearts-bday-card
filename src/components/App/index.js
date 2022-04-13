import React, { useState } from 'react';
import './styles.css';
import Card from '../Card';
import CardOptions from '../CardOptions';
import { characters } from '../../data/characters';

const getCharacter = (name) => characters.find(character => character.name === name);

function App() {
  const [character, setCharacter] = useState(null);
  const [theme, setTheme] = useState('#000000');
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <div className="App">
      <CardOptions 
        characters={characters} 
        setCharacter={setCharacter} 
        setTheme={setTheme}
        setName={setName}
        setMessage={setMessage}
      />
      {character && (
        <Card 
          character={getCharacter(character)} 
          theme={theme} 
          name={name}
          message={message}
        />
      )}
    </div>
  );
}

export default App;
