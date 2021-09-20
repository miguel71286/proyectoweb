import React from "react";
import "./header.css";
import foto from "../images/logo.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div id="header">
      <Link className="link-logo" to="/">
        <img id="logo" src={foto} alt="foto" />
      </Link>
      <div className="d-flex" id="icons">
        <Link id="icono-user" to="/login">
          {" "}
          <div>
            <i className="fa fa-user"></i>
            <span className="menu-title sr-only">user</span>
          </div>{" "}
        </Link>
        <Link id="icono-user" to="/login">
          {" "}
          <div>
            <i className="fa fa-heart"></i>
            <span className="menu-title sr-only">user</span>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default header;
