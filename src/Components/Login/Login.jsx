import React from 'react'
import styles from './Login.module.css'
import 'font-awesome/css/font-awesome.min.css';
import image from './image.png'
export default function Login() {

    const [isClicked,setClicked]=React.useState(false);
    const [isLogin,setLogin]=React.useState(true);
    const [isTasked,setTasked]=React.useState(false);
    const Unlock = ()=>setClicked((prev)=>!prev);
    const Login=()=>setLogin((prev)=>!prev);
    const Task=()=>setTasked((prev)=>!prev);
  return (
    <div className={styles.LoginPage}>
    <button className={styles.btn2} onClick={Task}>Login</button>
    <div className={`${styles.container} ${styles.flex}`}>
      <div className={`${styles.box} ${styles.flex}`} style={isTasked?{}:{display:"none"}}>
        <div className={`${styles.content} ${styles.flex}`}>
            <div><h1>Welcome</h1></div>
            <div><p>Lorem, ipsum dolor sit amet consect</p></div>
            <div className={`${styles.login} ${styles.flex}`} style={isLogin?{}:{display:"none"}}>
                <input type="text" placeholder="&#xF007; Username" required/>
                <div className={`${styles.password} ${styles.flex}`}>
                    <input type={isClicked?"text":"password"} placeholder="&#xf023; Password" className={styles.pass} required/>
                    <button className={styles.eyes} onClick={Unlock}>{isClicked? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i> }</button>
                </div>
                <div className={styles.rem}>
                    <input type="checkbox" />
                    <h5>RememberMe</h5>
                </div>
                <button className={styles.btn}>Login</button>
                <hr />
                <p>OR</p>
                <hr />
                <button className={styles.oathbtn}>&#xf1a0; Login with Google</button>
                <button className={styles.oathbtn}>&#xf09a; Login with Facebook</button>
                <p>Don't have an account?<a onClick={Login}>Register</a></p>
            </div>
            <div className={`${styles.register} ${styles.flex}`} style={isLogin?{display:"none"}:{}}>
                <input type="text" placeholder="&#xF007; Firstname"/>
                <input type="text" placeholder="&#xF007; Lastname"/>
                <input type="email" placeholder="&#xf0e0; Email"/>
                <div className={`${styles.password} ${styles.flex}`}>
                    <input type={isClicked?"text":"password"} placeholder="&#xf023; Password" className={styles.pass} required/>
                    <button className={styles.eyes} onClick={Unlock}>{isClicked? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i> }</button>
                </div>
                <div className={styles.rem2}><input type="checkbox"/> I agree to the Terms and Conditions</div>
                <button className={styles.btn}>Register</button>
                <p>Already have an account ?<a href="#" onClick={Login}>Login</a></p>
            </div>
        </div>
        <div className={styles.image}>
            <img src={image}/>
        </div>
      </div>
    </div>
    </div>
  )
}
