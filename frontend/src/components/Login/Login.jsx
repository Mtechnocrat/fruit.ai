import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {FaInstagram , FaGoogle ,FaGithub} from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa6";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate=useNavigate();

  const handleLogin =(e)=>{
    e.preventDefault();
    navigate('/home');
  }
  return (

    <div className="app">
<div className="login-container">
      <h1>Login</h1>
      <p>
        By signing in you are agreeing to our{' '}
        <a href="/">Term and privacy policy</a>
      </p>
      
      {/* Login/Register Tabs */}
      <div className="tab-container">
        <span 
          className={`tab ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </span>
        <span 
          className={`tab ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </span>
      </div>

      {/* Form Inputs */}
      <form className="form-container">
        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
          <i className="fas fa-eye"></i>
        </div>

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember password
          </label>
          <a href="/">Forget password</a>
        </div>

        <button type="submit" onClick={handleLogin} className="login-btn">Login</button>
      </form>

      {/* Social Login Section */}
      <div className="social-login">
        <p>or connect with</p>
        <div className="social-icons">
          <a  className="facebook"><FaInstagram /></a>
          <a className="instagram"><FaGoogle /> </a>
          <a  className="pinterest"><FaGithub /></a>
          <a  className="linkedin"><FaFacebook /></a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login