import React from 'react'
import "./work.css";
// import {Link} from "react-router-dom";
import foto from "../images/join-us.png";

const Work = () => {
    return (
        // <Link to="/join-us"> <div id="work" ></div> </Link>
        <div id="work">
      <a href="mailto:mangel723@gmail.com" target="_blank">
          <img src={foto} width="400" height="240" alt="foto" />
      </a>
    </div>
    )
}

export default Work
