import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="register-form">
      <h3>SIGN UP</h3>
      <form onSubmit={handleSubmit}>
        <label className="info">First Name</label>
        <input className="input-box" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstname"/>
        <label className="info">Last Name</label>
        <input className="input-box" value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastname"/>
        <label className="info" htmlFor="email">Email address</label>
        <input className="input-box" value={email} onChange={(e) => setEmail(e.target.value)} type="email"></input>
        <label className="info" htmlFor="password">Password</label>
        <input className="input-box" value={pass} onChange={(e) => setPass(e.target.value)} type="password"></input>
      </form>
      <button className="login-button" type="submit">REGISTER</button>
      <button className="register-button"><Link to="/login">Already have an account? Login here.</Link></button>
    </div>
  )
}

export default Register