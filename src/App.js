import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '..node_modules/bootstrap-icons/font/fonts/bootstrap-icons.css';
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

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div class="grid-container">
              <div class="item1">
                <Header />
              </div>
              <div class="item2">
                <Slider />
              </div>
              <div class="item3">
                <Mujer />
              </div>
              <div class="item4">
                <Work />
              </div>

              <div class="item6">
                <Social />
              </div>
              <div class="item7">
                <Hombre />
              </div>
              <footer>este es mi footer</footer>
            </div>
          </Route>
          <Route path="/woman">
            <div class="grid-container">
              <div class="item1">
                <Header />
              </div>
              <div id="item8">
              <TiendaWoman />
              </div>
            </div>
          </Route>
          <Route path="/man">
            <div class="grid-container">
              <div class="item1">
                <Header />
              </div>
              <div id="item9">
              <TiendaMan />
              </div>
            </div>
          </Route>
          <Route path="/join-us">
            <div class="grid-container">
              <div class="item1">
                <Header />
              </div>
              {/* <JoinUs onTiendas={} key={tiendas.id} /> */}
            </div>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
