import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import state from "../../store";
import { useSnapshot } from "valtio";
import { slideAnimation, fadeAnimation } from "../../config/motion";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const snap = useSnapshot(state);
  const handlePage = () => {
    state.registerpage = false;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    state.login = false;
    state.cartPage = true;
  
    axios
    .post("https://erin-faithful-scarab.cyclic.app/register", {
      username: userName,
      password: password,
      email: email,
    })
    .then((response) => {
      console.log(response.data)
    });
    
  };
  console.log(snap.login);
  console.log(snap.cartPage);

  return (
    <>
      <motion.div
        className={`${styles.register} ${styles.flex}`}
        style={snap.loginpage ? { display: "none" } : {}}
        {...slideAnimation("up")}
      >
        <h1>Welcome</h1>
        <form
          method="POST"
          onSubmit={(e) => handleRegister(e)}
          className={`${styles.flex} ${styles.col}`}
        >
          <input
            type="text"
            placeholder="&#xF007; Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="&#xf0e0; Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <motion.div className={`${styles.flex} ${styles.password}`}>
              <input
                type={isClicked ? "text" : "password"}
                placeholder="&#xf023; Password"
                className={styles.pass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className={styles.eyes}
                onClick={() => setIsClicked(!isClicked)}
              >
                {isClicked ? <FaEye/> : <FaEyeSlash />}
              </button>
          </motion.div>

          <motion.div className={styles.rem2}>
            <input type="checkbox" /> I agree to the Terms and Conditions
          </motion.div>
          {/* <Link to="/cart"> */}
          <button className={`${styles.btn} ${styles.flex}`} type="submit">
            <FaArrowRight color={"white"} size={"2vw"}/>
          </button>
          {/* </Link>  */}
        </form>
        <p>
          Already have an account ?
          <a href="#" onClick={handlePage}>
            Login
          </a>
        </p>
      </motion.div>
    </>
  );
};

export default Register;
