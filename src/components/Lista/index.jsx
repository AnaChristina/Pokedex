import './styles.css';

const Lista = ({ pokemons }) => {
    return(
        <div className="lista">
            <div className="containerLista"> 
                <h4 className="nomeLista">
                    {pokemons.map((pokemon, key) => (
                        <li className="cardLista" key={key}>{pokemon.name}</li>
                    ))}
                </h4>
            </div>
         </div>
    )
}
export default Lista;

