import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Container>
      <h1>Hello {user.name}, you managed to enter your account!</h1>
    </Container>
  );
}
