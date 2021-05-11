import React, { useContext, useEffect, useState } from 'react';
import { auth } from './Firebase';

const FirebaseContext = React.createContext();

export function useAuth() {
  return useContext(FirebaseContext);
}

export default function Context({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Inscription
  function signUpWithEmail(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // Connexion
  function signInWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Déconnexion
  function signOutUser() {
    return auth.signOut();
  }

  // Mot de passe oublié
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
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
    signInWithEmail,
    signOutUser,
    resetPassword,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {!loading && children}
    </FirebaseContext.Provider>
  );
}