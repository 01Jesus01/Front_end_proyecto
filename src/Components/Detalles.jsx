import React from "react";

function Details(props) {
  return (
    <div className="bottom2">
      <h2 className="nombre">Especie: </h2>
      <p className="name">{props.especie}</p>
      <h2 className="nombre">Raza: </h2>
      <p className="name">{props.raza}</p>
      <h2 className="nombre">Color: </h2>
      <p className="name">{props.color}</p>
      <h2 className="nombre">Peso: </h2>
      <p className="name">{props.peso}</p>
      <h2 className="nombre">Tamaño: </h2>
      <p className="name">{props.tamaño}</p>
      <h2 className="nombre">Edad: </h2>
      <p className="name">{props.edad}</p>
    </div>
  );
}

export default Details;
