import React, { useState, useEffect } from "react";
import axios from "axios";
import Print from "../components/Print";

const ListaFav = () => {
  const [favMujer, setFavMujer] = useState([]);
  const [listaFavMujer, setListaFavMujer] = useState([]);

  const getFavMujer = async () => {
    const userId = JSON.parse(localStorage.getItem("userData"));
    try {
      const respuesta = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "/api/usuarios/" + userId.userData
      );
      setFavMujer(respuesta.data.usuarios.favoritos.mujer);
    } catch (error) {}
  };
  const getListaFavMujer = async () => {
    try {
      const arrayMujer = await Promise.all(
        favMujer.map(async (id) => {
          const respuesta = await axios.get(
            process.env.REACT_APP_BACKEND_URL + "/api/usuarios/woman/" + id
          );
          console.log(respuesta.data.mujer);
          return respuesta.data.mujer;
        })
      );
      setListaFavMujer(arrayMujer);
    } catch (error) {}
  };
  useEffect(() => {
    getFavMujer();
  }, []);
  useEffect(() => {
    getListaFavMujer();
  }, [favMujer]);
  return (
    <div>
      {listaFavMujer.map((articulo) => {
        return <Print key={articulo._id} articulo={articulo} />;
      })}
    </div>
  );
};

export default ListaFav;
