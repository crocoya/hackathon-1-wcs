import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className='Navigation'>
      <h1>HackaSpace</h1>
      <ul className='menu'>
        <Link to='/'>
          <li>Accueil</li>
        </Link>
        <Link to='/reservation'>
          <li>Reservation</li>
        </Link>
        <Link to='/about'>
          <li>A propos</li>
        </Link>
      </ul>
      <div className='compte'>
        <Link to='/connexion'>
          <button type='button' className='se_connecter'>
            Se connecter
          </button>
        </Link>
        <Link to='/inscription'>
          <button type='button' className='s-inscrire'>
            S'inscrire
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
