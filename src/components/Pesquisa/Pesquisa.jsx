import React from "react";
import './styles.css';


function Pesquisa({ pesquisarPokemons }) {
  return (
    <div id="" className="">
      <input
        type="text"
        id="pesquisa"
        className="mt-4 form-control text-primary pesquisa"
        placeholder="Digite o nome do pokemon"
        onChange={(digitado) => pesquisarPokemons(digitado.target.value)}
      ></input>
    </div>
  );
}

export default Pesquisa;
