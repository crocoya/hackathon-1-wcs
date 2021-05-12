import React, { useEffect, useState } from 'react';
import './styles/Reservation.css';
import TransferList from './TransferList';
import UserService from '../Service/user-service';

export default function Reservation() {
  const [currentUser, setCurrentUser] = useState(); 

  useEffect(() => {
    UserService.getCurrentUser();
    setCurrentUser(UserService.user);
  }, []);

  return (
    <div className='container-reservation'>
      <div className='postionList'>
        <h1 className="title-reserv">TO THE MOON {currentUser && <div className="elon-title"> { currentUser.pseudo}</div>}</h1>
        <TransferList />
      </div>
    </div>
  );
}
