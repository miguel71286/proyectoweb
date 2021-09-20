import React, { useState, useEffect } from "react";
import "./tiendaman.css";
import video from "../images/manpage.mp4";
import Print from "../components/Print";
import axios from "axios";

const TiendaMan = () => {
  // const listaTiendas = props.onTiendas;
  const [articulos, setArticulos] = useState([]);

  const getArticulos = async () => {
    await axios
      .get("http://localhost:5000/api/hombre/man")
      .then((response) => {
        console.log(response.data);
        setArticulos(response.data.hombres);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getArticulos();
  }, []);

  return (
    <div className="contenedor-man">
      <div className="overlay"></div>
      <div className="tarjetas">
        <video
          className="video-man"
          playsInline
          autoPlay
          muted="muted"
          loop="loop"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="container h-100">
          <div className="d-flex h-100">
            <div className="w-100 d-flex row justify-content-between">
              {articulos.map((articulo) => {
                return <Print key={articulo._id} articulo={articulo} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiendaMan;
