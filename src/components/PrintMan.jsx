import React from "react";
import { useState } from "react";
// import swal from "sweetalert";
import './print.css'
import foto from "../images/man.png"

const PrintMan = (props) => {
    // const listadoFinal = props.onListado;

return (
  <div
  id="print"
  className=" mb-3 w-25 p-3 position-ralative m-4"
  // key={listadoFinal.id}
>
  <h4 className="card-header">Camisa Blanca</h4>
  <div className="card-body">
   <img src={foto} width="200px" alt="" />
    <span id="precio" className="badge bg-secondary">
      <em>Precio: 20,99€</em>
    </span>
  </div>
</div>
  );
};

export default PrintMan;
