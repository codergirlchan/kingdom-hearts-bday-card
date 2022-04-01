function CardOptions(props) {
    const { characters, setCharacter, setTheme } = props
    return (
        <div>
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
        </div>
    )
}

export default CardOptions;