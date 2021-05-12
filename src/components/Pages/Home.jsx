/* eslint-disable no-unused-vars */

import React from 'react';
import './styles/Home.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Reservation from './Reservation';

export default function Home() {
  return (
    <main className="main-hero">
      <div className='pres'>
        <div className='positionBotton'>
          <Link to='/reservation'>
            <button type='button' className='button-réserver'>
              Rejoigner le voyage interplanétaire <br /> de votre choix
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
