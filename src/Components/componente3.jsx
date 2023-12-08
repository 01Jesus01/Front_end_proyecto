import React from 'react';

const Componente3 = (props) => {
  return (
    <div className="card2">
        <h1>Nombre: {props.nombre}</h1>
        <h1>Apellidos: {props.apellido}</h1>
        <h1>Numero de control: {props.numero_control}</h1>
    </div>
  );
};

export default Componente3;