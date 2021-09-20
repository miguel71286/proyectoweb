import Print from "../components/Print";
import "./tiendawoman.css";
import video from "../images/womanpage.mp4";
import React, { useState, useEffect } from "react";
import axios from "axios";

const TiendaWoman = (props) => {
  const listaTiendas = props.onTiendas;
  const [articulos, setArticulos] = useState([]);

  const getArticulos = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/mujer/woman")
      .then((response) => {
        console.log(response.data);
        setArticulos(response.data.mujeres);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getArticulos();
  }, []);

  return (
    <div className="contenedor-woman">
      <div className="overlay"></div>
      <div className="tarjetas">
        <video
          className="video-woman"
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
                return <Print key={articulo._id} articulo={articulo}/>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiendaWoman;
