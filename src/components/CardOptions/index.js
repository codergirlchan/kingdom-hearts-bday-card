import './styles.css';

function CardOptions(props) {
    const { characters, setCharacter, setTheme, setName, setMessage } = props
    return (
        <div className="card-options">
            <label htmlFor="character-select">Choose your character:</label>
            <select id="character-select" onChange={(e) => setCharacter(e.target.value)}>
                <option>Please choose a character</option>
                {characters.map(character => (
                    <option 
                        value={character.name} 
                        key={character.name}
                    >
                        {character.name}
                    </option>
                ))}
            </select>
            <label htmlFor="themed">Choose your color</label>
            <input type="color" id="theme" defaultValue="#000000" onChange={(e) => setTheme(e.target.value)} />
            <label htmlFor="name">Enter name here:</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="message">Enter message here:</label>
            <textarea id="message" onChange={(e) => setMessage(e.target.value)} />
        </div>
    )
}

export default CardOptions;