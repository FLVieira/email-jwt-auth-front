import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, Background } from './styles';
import logo from '~/assets/logo.png';

import history from '~/services/history';
import api from '~/services/api';

function RecoveryPassword() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    toast.success(
      'An email has been sent to your inbox with the instructions to recover your password.'
    );
    await api.get('/recovery', {
      params: {
        email,
      },
    });
    history.push('/');
  }

  return (
    <Background>
      <Container>
        <img src={logo} alt="Fast Feet" />
        <form onSubmit={handleSubmit}>
          <b>YOUR E-MAIL</b> <br />
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
          <button type="submit">Recover your password</button>
        </form>
      </Container>
    </Background>
  );
}

export default RecoveryPassword;
