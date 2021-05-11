import React, { useContext, useEffect, useState } from 'react';
import { auth } from './Firebase';

const FirebaseContext = React.createContext();

export function useAuth() {
  return useContext(FirebaseContext);
}

export default function Context({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUpWithEmail(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((users) => {
      setLoading(false);
      setCurrentUser(users);
    });

    return unsubcribe;
  }, []);

  const value = {
    currentUser,
    signUpWithEmail,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}