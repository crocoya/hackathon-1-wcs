import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../Firebase/Context';
import UserService from '../Service/user-service';
import './Connexion.css';

export default function Connexion() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signInWithEmail } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signInWithEmail(
        emailRef.current.value,
        passwordRef.current.value
      ).then((data) => {
        UserService.getUser(data.user.uid).then((user) => {
          UserService.logUser(user);
          console.log('user', UserService.user);
          history.push('/reservation');
        });
      });
    } catch (err) {
      setError('Impossible de se connecter');
    }

    setLoading(false);
  }
  return (
    <>
      <div className='cont'>
        <div className='form-sign-up1'>
          <div className='inform'>
            <h2>Connectez-vous</h2>
            {error && <div className='setError'>{error}</div>}
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              <span>E-mail</span>
              <input type='email' ref={emailRef} />
            </label>
            <label>
              <span>Mot de passe</span>
              <input type='password' ref={passwordRef} />
            </label>
            <button type='submit' className='submit' disabled={loading}>
              Connexion
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
