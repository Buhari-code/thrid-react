import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OauthContext } from './AuthContext';
import './Home.css';

function Home() {
  const { logout } = useContext(OauthContext);

  const userData = JSON.parse(localStorage.getItem("UserData"));

  return (
    <div className="home-container">
      <h1>Home</h1>
      <Link to={'/Login'} className="login-link">Login</Link>
      <button onClick={logout} className="logout-btn">Logout</button>
      <h1 className="welcome-text">Welcome {userData?.[0]?.Name}</h1>
    </div>
  );
}

export default Home;
