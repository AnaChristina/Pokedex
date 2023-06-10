import React from "react";
import './styles.css';
import Infos from "../Infos";
import Imagem from "../Imagem";
import Seta from "../Seta";

const Telinha = ({pokemons}) => {
    return(
        <div className="quadro">
            <div className="tela">
                <div className="Info-Pokemon">< Infos /></div>
                <div className="pokemon-img">
                    < Imagem pokemon={pokemons[0]}/>
                </div>
            </div>
            <div className="div-seta">< Seta /></div>
            <div className="red-bola"></div>
            <div className="red-line"></div>
            <div className="blue-line"></div>
            <div className="sound">
                <div className="s1"></div>
                <div className="s2"></div>
                <div className="s3"></div>
            </div>
        </div>
    )
}; export default Telinha;
