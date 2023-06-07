import React from "react";
import './styles.css';
import Infos from "../Infos";
import Imagem from "../Imagem";

const Telinha = ({pokemons}) => {
    return(
        <div className="quadro">
            <div className="tela">
                <div className="Info-Pokemon">< Infos /></div>
                <div className="pokemon-img">
                    < Imagem pokemon={pokemons[0]}/>
                </div>
            </div>
        </div>
    )
}; export default Telinha;
