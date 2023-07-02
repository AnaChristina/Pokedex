import React from "react";
import "./styles.css";

const Infos = ({ name, id, types, moves, image }) => {
  return (
    <div className="infos">
      <img src={image} alt={name} />
      <p className="txt-info">Nome: {name}</p>
      <p className="txt-info">ID: {id}</p>
      <p className="txt-info"> Tipo: {types && types.map((type) => type.type.name).join(" / ")} </p>
      <p className="txt-info Ataques">Ataques:</p>
        {moves && moves.slice(0, 3).map((move, index) => (
          <ul className="txt-info">
            <li className="move" key={index}>{move.move.name}</li>
          </ul> 
        ))}
      
    </div>
  );
};
export default Infos;
