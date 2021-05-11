import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../Firebase/Context';
import UserService from '../Service/user-service';
import './inscription.css';

export default function Inscription() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signUpWithEmail } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Le mot de passe ne correspond pas');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signUpWithEmail(
        emailRef.current.value,
        passwordRef.current.value
      ).then((data) => {
        UserService.createUserInDatabase(
          data.user.uid,
          nameRef.current.value,
          emailRef.current.value
        ).then(() => history.push('/'));
      });
    } catch (err) {
      setError('Création du compte impossible');
    }

    setLoading(false);
  }

  return (
    <>
      <div className='cont'>
        <div className='form-sign-up'>
          <div className='inform'>
            <h2>Rejoignez une aventure unique</h2>
            {error && <div className='setError'>{error}</div>}
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input type='text' ref={nameRef} />
            </label>
            <label>
              <span>E-mail</span>
              <input type='email' ref={emailRef} />
            </label>
            <label>
              <span>Mot de passe</span>
              <input type='password' ref={passwordRef} />
            </label>
            <label>
              <span>Confirmer mot de passe</span>
              <input type='password' ref={passwordConfirmRef} />
            </label>
            <button type='submit' className='submit' disabled={loading}>
              Inscription
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
