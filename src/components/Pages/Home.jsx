/* eslint-disable no-unused-vars */

import React from 'react';
import './styles/Home.css';
import Navigation from '../Navigation/Navigation';

export default function Home() {
  return (
    <div className='pres'>
      <Navigation />
      <div className='containerImg'>
        <img
          className='backgroundPlanet'
          alt='planète'
          src='https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_960_720.jpg'
        />
      </div>
    </div>
  );
}
