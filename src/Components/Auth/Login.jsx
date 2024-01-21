import React,{useState} from "react";
import state from "../../store";
import { useSnapshot } from "valtio";
import { motion, AnimatePresence } from "framer-motion";
import styles from './Login.module.css'
import axios from "axios";
import { slideAnimation } from "../../config/motion";
const Login = () => {
  const [loginUserName, setloginUserName] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const handlePage = ()=>{
    state.registerpage = true;
}
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://erin-faithful-scarab.cyclic.app/login", {
        username: loginUserName,
        password: loginPassword,
      })
      .then((response) => {
        state.loginpage = !snap.loginpage;
        state.cartPage = true;
      });
  };
  const snap=useSnapshot(state)
  return (
    <>
      <motion.div {...slideAnimation("up")}>
        <h1>Welcome</h1>
      </motion.div>
      <form method="post" onSubmit={(e) => handleLogin(e)}>
        <motion.div
          className={`${styles.login} ${styles.flex}`}
          {...slideAnimation("up")}
        >
          <input
            type="text"
            placeholder="&#xF007; UserName"
            required
            value={loginUserName}
            onChange={(e) => setloginUserName(e.target.value)}
          />
          <motion.div className={`${styles.password} ${styles.flex}`} {...slideAnimation("up")}>
            <input
              type={isClicked ? "text" : "password"}
              placeholder="&#xf023; Password"
              className={styles.pass}
              onChange={(e) => setloginPassword(e.target.value)}
              value={loginPassword}
              required
            />
            <button className={styles.eyes} onClick={()=>setIsClicked(!isClicked)}>
              {isClicked ? (
                <i className="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-slash"></i>
              )}
            </button>
          </motion.div>
          <Link to="/cart">
          <button className={styles.btn} type="submit">
            Login
          </button>
          </Link>
          <hr />
          <p>OR</p>
          <hr />
          <button className={styles.oathbtn}>&#xf1a0; Login with Google</button>
          <p>
            Don't have an account?<a onClick={handlePage}>Register</a>
          </p>
        </motion.div>
      </form>
    </>
  );
};

export default Login;
