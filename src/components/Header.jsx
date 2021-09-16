import React from "react";
import "./header.css";
import foto from "../images/logo.png";

const header = () => {
  return (
    <div id="header">
      <img id="logo" src={foto} alt="foto" width="10%" height="" />
      <div id="icons">
      <nav role="navigation">
        
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://twitter.com/miguel_label7"
                title="Twitter"
              >
                <i className="fa fa-user"></i>
                <span className="menu-title sr-only">user</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.instagram.com/miguel_label7/"
                title="Facebook"
              >
                <i className="fa fa-shopping-bag"></i>
                <span className="menu-title sr-only">shooping</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://www.linkedin.com/in/miguelangelmanzanogonzalez/"
                title="Instagram"
              >
                <i className="fa fa-heart"></i>
                <span className="menu-title sr-only">heart</span>
              </a>
            </li>
          </ul>
       
      </nav>
      </div>
    </div>
  );
};

export default header;
