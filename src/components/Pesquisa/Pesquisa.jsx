import React from "react";
import './styles.css';


function Pesquisa({ PesquisaPokemon }) {
  const capturar = () => {
    // Lógica para capturar o valor do input ou realizar qualquer ação desejada
  };

  return (
    <div id="" className="">
      <input
        type="text"
        id="pesquisa"
        className="mt-4 form-control text-primary pesquisa"
        placeholder="Digite o nome do pokemon"
        onChange={(e) => PesquisaPokemon(e.target.value)}
      ></input>
    </div>
  );
}

export default Pesquisa;
