import './styles.css';

function Card(props) {
    const { character, theme } = props;
  return (
      <div className="card" style={{border: `3px solid ${theme}`}}>
          <div className="charcter-img-wrapper">
              <img alt={character.name} className="character-img" src={character.image} />
          </div>
          <div>
              {/* <h2>{name}</h2>
              <p>{message}</p> */}
          </div>
      </div>
  );
}

export default Card;
