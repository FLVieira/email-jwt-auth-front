import React, { useEffect, useState } from 'react';
import Cryptr from 'cryptr';
import { toast } from 'react-toastify';

import { Container, Background } from './styles';
import logo from '~/assets/logo.png';

import api from '~/services/api';
import history from '~/services/history';

function RecoveryPage({ match }) {
  const { id } = match.params;
  const [decryptedId, setDecryptedId] = useState('');

  useEffect(() => {
    const cryptr = new Cryptr('YourSecretHere');
    setDecryptedId(cryptr.decrypt(id));
  }, [id]);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('The inputs do not match.');
    }
    await api.put(`/users/${decryptedId}`, {
      password,
    });
    toast.success('Success, now you can login with your new password.');
    return history.push('/');
  }

  return (
    <Background>
      <Container>
        <img src={logo} alt="Fast Feet" />
        <form onSubmit={handleSubmit}>
          <b>PASSWORD</b> <br />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
          <b>CONFIRM YOUR PASSWORD</b> <br />
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
          />
          <button type="submit">Confirm</button>
        </form>
      </Container>
    </Background>
  );
}

export default RecoveryPage;
