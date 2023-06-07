import React from "react";
import './imagem.css';

const Imagem = ({ pokemon }) => {
    return (
        <div className="pokemon-img brilho">
            {pokemon && (
                <img src={pokemon.sprites.other['dream_world'].front_default} alt="Pokemon" />
            )}
        </div>
    );
};

export default Imagem;