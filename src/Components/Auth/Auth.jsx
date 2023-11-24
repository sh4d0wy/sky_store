import React, { useState } from "react";
import styles from "./Login.module.css";
import "font-awesome/css/font-awesome.min.css";
import image from "./image.png";
import { motion, AnimatePresence } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../../config/motion";
import { useSnapshot } from "valtio";
import state from "../../../store"
import axios from "axios";
import Login from './Login'
import Register from "./Register";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";


export default function Auth() {
  const [isClicked, setClicked] = useState(false);
  const [isTasked, setTasked] = useState(true);

  const snap = useSnapshot(state);
 
  return (
    <AnimatePresence>
      {!snap.intro && snap.login && (
        <motion.div className={styles.LoginPage}>
          <motion.div
            {...fadeAnimation}
            className={`${styles.container} ${styles.flex}`}
          >
            <motion.div
              className={`${styles.box} ${styles.flex}`}
              style={isTasked ? {} : { display: "none" }}
            >
              <motion.div
                {...slideAnimation("up")}
                className={`${styles.content} ${styles.flex}`}
              >
              {snap.registerpage?(
                <Register/>
              ):<Login/>}

              </motion.div>
              <motion.div {...slideAnimation("down")} className={styles.image}>
                <img src={image} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
