import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Background } from './styles';
import logo from '~/assets/logo.png';

import api from '~/services/api';
import history from '~/services/history';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post('/users', {
        name,
        email,
        password,
      });
      toast.success(
        'You have successfully created your account, please verify your email.'
      );
      history.push('/');
    } catch (err) {
      toast.error(err.response.data.err);
    }
  }

  return (
    <Background>
      <Container>
        <img src={logo} alt="Fast Feet" />
        <form onSubmit={handleSubmit}>
          <b>NAME</b> <br />
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
          <b>E-MAIL</b> <br />
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
          <b>PASSWORD</b> <br />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
          />
          <button type="submit">Submit</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </Container>
    </Background>
  );
}

export default SignUp;
