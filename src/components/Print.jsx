import React from "react";
import { useState } from "react"; 
// import swal from "sweetalert";
import './print.css'
import foto from "../images/woman.png"
import axios from "axios";

const Print = (props) => {
    const articulo = props.articulo;
    const añadirFav = async () => {
      try {
        const favId = JSON.parse(localStorage.getItem("userData"))
        await axios.patch(process.env.REACT_APP_BACKEND_URL + "/api/usuarios/addWoman/" + favId.favId, {
          "mujerId": articulo._id
        })
      } catch (error) {
        
      }
    }

return (
    <div
      className="articulo col-3"
    >
      <h4 className="card-header">{articulo.articulo}</h4>
      <div className="card-body">
       <img src={articulo.foto} alt="" className="foto" />
        <span id="precio" className="badge bg-secondary">
          Precio: <em>{articulo.precio}€</em>
        </span>
        <button id="btn-fav"type="button" class="btn btn-outline-secondary w3-block"onClick={añadirFav}>Añadir a <i class="fa fa-heart"></i></button>
      </div>
    </div>
  );
};

export default Print;
