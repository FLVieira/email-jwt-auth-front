import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Background } from './styles';
import logo from '~/assets/logo.png';

import * as authActions from '~/store/modules/auth/actions';

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authActions.signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <img src={logo} alt="Fast Feet" />
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Log in</button>
        </form>
        <Link to="/register">Does not have an account?</Link>
        <Link to="/recovery">Forgot your password?</Link>
      </Container>
    </Background>
  );
}

export default SignIn;
