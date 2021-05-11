import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className='Navigation'>
      <h1>HackaSpace</h1>
      <ul className='menu'>
        <Link to='/'>
          <li>Accueil</li>
        </Link>
        <Link to='/Reservation'>
          <li>Reservation</li>
        </Link>
        <Link to='/A propos'>
          <li>A propos</li>
        </Link>
      </ul>
      <div className='compte'>
        <Link to='/Connexion'>
          <button type='button' className='se_connecter'>
            Se connecter
          </button>
        </Link>
        <Link to='/Inscription'>
          <button type='button' className='s-inscrire'>
            S'inscrire
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
