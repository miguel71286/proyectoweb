import React from "react";
import { useState } from "react";
// import swal from "sweetalert";
import './print.css'
import foto from "../images/woman.png"

const Print = (props) => {
    const articulo = props.articulo;

return (
    <div
      className="articulo col-3"
    >
      <h4 className="card-header">{articulo.articulo}</h4>
      <div className="card-body">
       <img src={articulo.foto} alt="" className="foto" />
        <span id="precio" className="badge bg-secondary">
          <em>{articulo.precio}€</em>
        </span>
      </div>
    </div>
  );
};

export default Print;
