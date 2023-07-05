import React from "react";
import './styles.css';
import Infos from "../Infos";
import Imagem from "../Imagem";
import Seta from "../Seta";
import { useState } from 'react';


const Telinha = ({pokemonSelecionado, darkMode, toggleDarkMode}) => {
    return(
        <div className={`Telinha ${darkMode ? 'dark' : ''} quadro`}>
            <div className="tela">
                <div className="Info-Pokemon">
                <Infos
                    pokemonSelecionado={pokemonSelecionado}
                    name={pokemonSelecionado.name}
                    id={pokemonSelecionado.id}
                    types={pokemonSelecionado.types}
                    moves={pokemonSelecionado.moves}
                />
                </div>
                <div className="pokemon-img">
                    < Imagem src= {pokemonSelecionado.image} />
                </div>
            </div>
            <div className="div-seta">< Seta /></div>
            <div className="red-bola" onClick={toggleDarkMode}></div>
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
