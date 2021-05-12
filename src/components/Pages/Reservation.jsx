import React from 'react';
import './styles/Reservation.css';
import TransferList from './TransferList';

export default function Reservation() {
  return (
    <div className='container-reservation'>
      <div className='postionList'>
        <h1 className="title-reserv">RESERVEZ VOTRE VOYAGE INOUBLIABLE</h1>
        <TransferList />
      </div>
    </div>
  );
}
