import './styles.css';

const Lista = ({ pokemons, selecionarPokemon, darkMode }) => {
    return(
        <div className={`Lista ${darkMode ? 'dark' : ''} lista`}>
            <div className="containerLista"> 
                <h4 className="nomeLista ">
                    {pokemons.map((pokemon, key) => (
                        <li className={`Lista ${darkMode ? 'dark' : ''} cardLista`} onClick={() => selecionarPokemon(pokemon)} key={key}>
                        {pokemon.name}
                      </li>
                      
                    ))}
                </h4>
            </div>
         </div>
    )
}
export default Lista;

