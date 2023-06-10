import React from "react";
import './imagem.css';

const Imagem = ({ src }) => {
    return (
        
        <div className="pokemon-img">
            <img src={src} alt="Imagem do Pokémon" />
        </div>
    );
};
export default Imagem;