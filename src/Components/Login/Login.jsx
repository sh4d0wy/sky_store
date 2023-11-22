import React, { useState } from "react";
import styles from "./Login.module.css";
import "font-awesome/css/font-awesome.min.css";
import image from "./image.png";
import { motion, AnimatePresence } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../config/motion";
import { useSnapshot } from "valtio";
import { FaArrowRight } from "react-icons/fa";
import state from "../../store";

export default function Login() {
  const [isClicked, setClicked] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [isTasked, setTasked] = useState(true);
  const Unlock = () => setClicked((prev) => !prev);
  const Login = () => setLogin((prev) => !prev);
  const Task = () => setTasked((prev) => !prev);
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && snap.login && (
        <motion.div className={styles.LoginPage}>
          <motion.div
            {...slideAnimation("right")}
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
                <motion.div>
                  <h1>Welcome</h1>
                </motion.div>
                <motion.div
                  className={`${styles.login} ${styles.flex}`}
                  style={isLogin ? {} : { display: "none" }}
                >
                  <label style={{ textAlign: "left" }}>Name</label>
                  <input type="text" placeholder="&#xF007; Username" required />
                  <motion.div className={`${styles.password} ${styles.flex}`}>
                    <input
                      type={isClicked ? "text" : "password"}
                      placeholder="&#xf023; Password"
                      className={styles.pass}
                      required
                    />
                    <button className={styles.eyes} onClick={Unlock}>
                      {isClicked ? (
                        <i className="fa-solid fa-eye"></i>
                      ) : (
                        <i className="fa-solid fa-eye-slash"></i>
                      )}
                    </button>
                  </motion.div>
                  <motion.div className={styles.rem}>
                    <input type="checkbox" />
                    <h5>RememberMe</h5>
                  </motion.div>
                  <button className={styles.btn}>Login</button>
                  <hr />
                  <p>OR</p>
                  <hr />
                  <button className={styles.oathbtn}>
                    &#xf1a0; Login with Google
                  </button>
                  <p>
                    Don't have an account?<a onClick={Login}>Register</a>
                  </p>
                </motion.div>
                <motion.div
                  className={`${styles.register} ${styles.flex}`}
                  style={isLogin ? { display: "none" } : {}}
                  {...slideAnimation("up")}
                >
                  <form onSubmit={handleSubmit} method="POST">
                  <div className={`${styles.flex}`}>
                    <input type="text" placeholder="&#xF007; Firstname" />
                    <input type="text" placeholder="&#xF007; Lastname" />
                  </div>

                  <input type="email" name="email" placeholder="&#xf0e0; Email" />
                  <motion.div className={`${styles.flex} ${styles.password}`}>
                    <input
                      type={isClicked ? "text" : "password"}
                      placeholder="&#xf023; Password"
                      className={styles.pass}
                      required
                    />
                    <button className={styles.eyes} onClick={Unlock} >
                      {isClicked ? (
                        <i class="fa-solid fa-eye"></i>
                      ) : (
                        <i class="fa-solid fa-eye-slash"></i>
                      )}
                    </button>
                  </motion.div>
                    </form>
                  <motion.div className={styles.rem2}>
                    <input type="checkbox" /> I agree to the Terms and
                    Conditions
                  </motion.div>
                  <button className={`${styles.btn} ${styles.flex}`}><FaArrowRight color={"white"} size={"2vw"} /></button>
                  <p>
                    Already have an account ?
                    <a href="#" onClick={Login}>
                      Login
                    </a>
                  </p>
                </motion.div>
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
