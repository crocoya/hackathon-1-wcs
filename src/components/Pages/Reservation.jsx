import React from 'react';
import './styles/Reservation.css';

export default function Reservation() {
  return (
    <div className='container-reservation'>
      <div className='placementBoutton'>
        <button type='button' className='style-boutton'>
          SpaceShip
        </button>
        <div className='placementBoutton2'>
          <button type='button' className='style-boutton2'>
            Planet
          </button>
          <div className='placementBoutton3'>
            <button type='button' className='style-boutton3'>
              Départ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
