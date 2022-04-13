import React, { useRef, useState, useEffect } from 'react';
import './styles.css';

function Card(props) {
    const { character, theme, name, message } = props;
    const audioRef = useRef(null);
    const [soundSrc, setSoundSrc] = useState(null);

    const updateSong = (source) => {
        setSoundSrc(source);
        if(audioRef.current){
            audioRef.current.load();
        }
    }

  useEffect(() => {
    updateSong(character.sound);
  }, [character]);

  return (
      <div className="card" style={{border: `3px solid ${theme}`}}>
          <div className="charcter-img-wrapper">
              <img alt={character.name} className="character-img" src={character.image} />
          </div>
          <div className="card-text-wrapper">
              {name && <h2 className="card-title">Happy Birthday {name}</h2>}
              {message && <p className="card-text">{message}</p>}
              {character.sound && 
                <audio ref={audioRef} controls>
                    <source src={soundSrc} type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
               }
          </div>
      </div>
  );
}

export default Card;
