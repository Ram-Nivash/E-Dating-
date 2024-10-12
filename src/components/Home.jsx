import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Institute E-Dating Platform</h1>
      <p>Find your perfect match with our unique matching algorithm.</p>
      <Link to="/register"><button>Register</button></Link>
      <Link to="/login"><button>Login</button></Link>
    </div>
  );
}

export default Home;
