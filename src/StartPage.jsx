import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
    document.body.style.backgroundColor='#7198AD'
  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt="YouTube Logo"
        style={{ width: '200px', marginBottom: '20px' }}
      />
      <h1>Welcome to Mini-YouTube!</h1>
      <h3>Get started with your account.</h3>
      <div ><button style={{margin:'10px',width:'80px', height:'40px'}}><Link to="/signup">SignUp</Link></button>
      <button style={{margin:'10px',width:'80px', height:'40px'}}><Link to="/login">Login</Link></button></div>
    </div>
  );
};

export default StartPage;
