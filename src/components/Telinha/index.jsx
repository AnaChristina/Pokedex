import React from "react";
import './styles.css';
import Infos from "../Infos";
import Imagem from "../Imagem";

const Telinha = () => {
    return(
        <div className="quadro">
            <div className="tela">
                < Infos />
                <div>
                    < Imagem />
                </div>
            </div>
        </div>
    )
}; export default Telinha;
