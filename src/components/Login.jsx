import React from 'react'
import "./login.css";
import logo from "../facebook-logo.png"; 
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import { actionTypes } from "./Reducer";

 
function Login() {
   const [state, dispatch] = useStateValue();

    const SignIn = () =>{
        auth.signInWithPopup(provider)
        .then(result =>{ 
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user
          })
         })
        .catch(error => {console.log(error.message) });
    }
  return (
    <div className='login'>
        <div className="login__logo">
                <img src={logo} alt="" />
        </div>
        <button type='submit' onClick={SignIn}>SignIn</button>
    </div>
  )
}

export default Login