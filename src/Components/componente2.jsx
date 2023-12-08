import React from "react";
import Avatar from "./Avatar";
import Details from "./Detalles";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
//import DeleteIcon from "@mui/icons-material/Delete";

function Componente2(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="namemascota">{props.namemascota}</h2>
        <Avatar image={props.image} />
      </div>
        <Details
          especie={props.especie} 
          raza={props.raza}
          color={props.color}
          peso={props.peso}
          tamaño={props.tamaño}
          edad={props.edad}
        />
    </div>
  );
}


export default Componente2;
