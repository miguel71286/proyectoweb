import React from "react";
import "./tiendaman.css";
import video from "../images/manpage.mp4";

const TiendaMan = () => {
  return (
    <div id="listadoMan">
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      > 
        <source src={video} type="video/mp4" />
      </video>
      {/* <div className="tarjetas">
          {listaTiendas.map((elemento) => {
            // return <Print key={elemento.id} onListado={elemento}/>;
          })}
        </div> */}
    </div>
  );
};

export default TiendaMan;
