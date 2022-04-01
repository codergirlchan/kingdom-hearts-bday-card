import React, { useState } from 'react';
import './styles.css';
import Card from '../Card';
import CardOptions from '../CardOptions';
import { characters } from '../../data/characters';

const getCharacter = (name) => characters.find(character => character.name === name);

function App() {
  const [character, setCharacter] = useState(null);
  const [theme, setTheme] = useState('#000000');

  return (
    <div className="App">
      <CardOptions 
        characters={characters} 
        setCharacter={setCharacter} 
        setTheme={setTheme}
      />
      {character && (
        <Card character={getCharacter(character)} theme={theme} />
      )}
    </div>
  );
}

export default App;
