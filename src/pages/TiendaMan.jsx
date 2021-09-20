import React from "react";
import "./tiendaman.css";
import video from "../images/manpage.mp4";
import PrintMan from "../components/PrintMan";


const TiendaMan = () => {
  return (
    <div className="contenedor-man">
    <div className="overlay"></div>

    <video className="video-man"
      playsInline
      autoPlay
      muted="muted"
      loop="loop"
    >
      <source src={video} type="video/mp4" />
    </video>

    <div className="container h-100">
        <div className="d-flex h-100">
          <div className="w-100">
            <PrintMan />
          </div>
        </div>
      </div>
      </div>

  );
};

export default TiendaMan;
