import React from "react";
import './social.css';
import video from "../images/social-media.mp4";

const Social = () => {
  return (
    <div id="social">
      <a href="https://www.instagram.com/miguel_label7/" target="_blank"><video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={video} type="video/mp4" />
      </video>
      </a>
    </div>
  );
};  

export default Social;
