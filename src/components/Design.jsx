import React from "react";
import "./design.css";
import Reactlogo from "./school.svg"
import Typical from 'react-typical'
import { motion } from "framer-motion";
const TRANSITION_TIME_OPACITY_S = 1;
const TRANSITION_TIME_ROTATE_S = 2;

export default function design({ img, className }) {
  return (
    <div className="design">
<Typical className="typical"
        steps={['Welcome to' ,'chandigarh university', 1000, '#1 Private University ', 500]}
        loop={Infinity}
        wrapper="p"
      />


<img className="chand" src="https://lh3.googleusercontent.com/proxy/biQ-NsTs0I3rNr7aZgJfJGqzliLO7t8by5MzQM8Uh70gOZ1alqrQPnxhk4d22jZVzselHDrG8a1TE6a9FTxY1VFXEPVguu7FTCA"/>

<motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [-5, 0, 2] }}
          className={className ? className : undefined}
          transition={{
            duration: TRANSITION_TIME_OPACITY_S,
            rotate: { yoyo: Infinity, duration: TRANSITION_TIME_ROTATE_S }
          }}
        >
<img className="image" src={Reactlogo} alt="first"/>

        </motion.div>

    </div>
  );
}
