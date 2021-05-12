import React from 'react';
import './styles/Reservation.css';
import TransferList from './TransferList';

export default function Reservation() {
  return (
    <div className='container-reservation'>
      <div className='postionList'>
        <h1 className="title-reserv">TO THE MOON</h1>
        <TransferList />
      </div>
    </div>
  );
}
