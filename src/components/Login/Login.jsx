import React, { useState } from 'react'
import styles from './styles.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div className="login-form">
      <h3>LOG IN</h3>
      <form onSubmit={handleSubmit} className="email-password">
        <label htmlFor="email">Email address</label>
        <input value={email} className='input-box' onChange={(e) => setEmail(e.target.value)} type="email"></input>
        <label htmlFor="password">Password</label>
        <input value={pass} className="input-box" onChange={(e) => setPass(e.target.value)} type='password'></input>
      </form>
      <button className='login-button' type='submit'>LOG IN</button>
      <button className='register-button'><Link to="/register">Don't have an account? Register here.</Link></button>
    </div>
  )
}

export default Login