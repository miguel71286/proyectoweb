import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
// import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Hombre from "./components/Hombre";
import Mujer from "./components/Mujer";
import Work from "./components/Work";
import Social from "./components/Social";
import TiendaWoman from "./pages/TiendaWoman";
import TiendaMan from "./pages/TiendaMan";
import JoinUs from "./pages/JoinUs";
import Auth from "./components/Auth";

const App = () => {
  const url = process.env.REACT_APP_BACKEND_URL + "api";
  const [tiendas, setTiendas] = useState([]);
  const [loadingTiendas, setLoadingTiendas] = useState(true);
  const [tieneAcceso, setTieneAcceso] = useState(false); 
  const [datos, setDatos] = useState({});
  const [token, setToken] = useState();

  const recuperaDatos = async () => {
    setLoadingTiendas(true);
    try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setTiendas(resultado);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingTiendas(false);
    }
  };
  useEffect(() => {
    recuperaDatos();
  }, []);

  const gestionarAcceso = (dato) => {
    setDatos(dato); // datos del usuario: email, password y token
    setTieneAcceso(true); // La variable que indica que está logueado se pone a true
    setToken(dato.token); // Por si fuera necesario
    // localStorage.setItem(
    //   "datosUsuario",
    //   JSON.stringify(dato({ userId: dato.userId, token: dato.token }))
    // );
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="grid-container">
              <div className="item1">
                <Header />
              </div>
              <div className="item2">
                <Slider />
              </div>
              <div className="item3">
                <Mujer />
              </div>
              <div className="item4">
                <Work />
              </div>

              <div className="item6">
                <Social />
              </div>
              <div className="item7">
                <Hombre />
              </div>
              <footer>este es mi footer</footer>
            </div>
          </Route>
          <Route path="/woman">
            <div className="grid-container">
              <div className="item1">
                <Header />
              </div>
              <div id="item8">
                <TiendaWoman key={tiendas.id} onTiendas={tiendas} />
              </div>
            </div>
          </Route>
          <Route path="/man">
            <div className="grid-container">
              <div className="item1">
                <Header />
              </div>
              <div id="item9">
                <TiendaMan />
              </div>
            </div>
          </Route>
          <Route path="/join-us">
            <div className="grid-container">
              <div className="item1">
                <Header />
              </div>
              <JoinUs />
            </div>
          </Route>
          <Route path="/login">
            <div className="grid-container">
              <div className="item1">
                <Header />
              </div>
              <div id="item10">
                <Auth gestionarAcceso={gestionarAcceso}/>
              </div>
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
