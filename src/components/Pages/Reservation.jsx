import React, { useEffect, useState } from 'react';
import UserService from '../Service/user-service';
import './styles/Reservation.css';

export default function Reservation() {
  const [currentUser, setCurrentUser] = useState(); 

  useEffect(() => {
    UserService.getCurrentUser();
    setCurrentUser(UserService.user);
  }, []);
  return (
    <>
      <div className='container-reservation'>
        <main className="content">
          
        </main>
      </div>
    </>
  );
}
// {currentUser && <div>{currentUser.pseudo}</div>}