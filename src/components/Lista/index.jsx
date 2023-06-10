import './styles.css';

const Lista = ({ pokemons, selecionarPokemon }) => {
    return(
        <div className="lista">
            <div className="containerLista"> 
                <h4 className="nomeLista ">
                    {pokemons.map((pokemon, key) => (
                        <li className="cardLista" onClick={() => selecionarPokemon(pokemon)} key={key}>{pokemon.name}</li>
                    ))}
                </h4>
            </div>
         </div>
    )
}
export default Lista;

