import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';


const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = React.useState('Login');
    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const {url, setToken} = React.useContext(StoreContext)

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

   /* const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if(currentState==="Login"){
            newUrl += '/api/user/login';
        }
        else {
            newUrl += '/api/user/register';
        }
        const response = await axios.post(newUrl, data);
        if (response.data.status === "success") {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            setShowLogin(false);
        }
        else {
            alert(response.data.message);
            console.log(response.data);
        
        }
    }*/
    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        if(currentState === "Login") {
            newUrl += '/api/user/login';
        } else {
            newUrl += '/api/user/register';
        }
        try {
            const response = await axios.post(newUrl, data);
            if (response.data.success === true) { // Corrected check for success
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                setShowLogin(false);
            } else {
                alert(response.data.message);
                console.log(response.data);
            }
        } catch (error) {
            console.error("Error occurred during login:", error);
            // Handle error appropriately, e.g., show an error message to the user
        }
    }
    
   
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin}  className="login-popup-container">
            <div className='login-popup-title'>
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} alt='cross' onClick={()=>setShowLogin(false)}/>
            </div>
            <div className='login-popup-inputs'>
                {currentState==="Login"?
                <></>:
                <input type='text' name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Name' required/>}
                <input type='email' name='email' onChange={onChangeHandler} value={data.email} placeholder='Your Email' required/>
                <input type='password' name='password' onChange={onChangeHandler} value={data.password} placeholder='Your Password' required/>
            </div>
            <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By continuing, i agree to terms of use and privacy policy.</p>
            </div>
            {currentState==="Login"?
            <p > Create A new Account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
            :<p >already have an account <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup