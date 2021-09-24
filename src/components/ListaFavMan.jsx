import React, { useState, useEffect } from "react";
import axios from "axios";
import PrintMan from "../components/PrintMan";

const ListaFavMan = () => {
  const [favHombre, setFavHombre] = useState([]);
  const [listaFavHombre, setListaFavHombre] = useState([]);

  const getFavHombre = async () => {
    const userId = JSON.parse(localStorage.getItem("userData"));
    try {
      const respuesta = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/usuarios/" + userId.userData
      );
      setFavHombre(respuesta.data.usuarios.favoritos.hombre);
    } catch (error) {}
  };
  const getListaFavHombre = async () => {
    try {
      const arrayHombre = await Promise.all(
        favHombre.map(async (id) => {
          const respuesta = await axios.get(
            process.env.REACT_APP_BACKEND_URL + "/api/usuarios/man/" + id
          );
          console.log(respuesta.data.hombre);
          return respuesta.data.hombre;
        })
      );
      setListaFavHombre(arrayHombre);
    } catch (error) {}
  };
  useEffect(() => {
    getFavHombre();
  }, []);
  useEffect(() => {
    getListaFavHombre();
  }, [favHombre]);
  return (
    <div>
      {listaFavHombre.map((articulo) => {
        return <PrintMan key={articulo._id} articulo={articulo} />;
      })}
    </div>
  );
};

export default ListaFavMan;
