import React, { useEffect, useState } from 'react';
import Cryptr from 'cryptr';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

function VerifyAccount({ match }) {
  const { id } = match.params;
  const cryptr = new Cryptr('YourSecretHere');
  const decryptedId = cryptr.decrypt(id);

  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    async function updateUser() {
      await api.put(`/users/${decryptedId}`, {
        verified: true,
      });
    }
    updateUser();
  }, [decryptedId]);

  useEffect(() => {
    if (!timeLeft) {
      history.push('/');
    }
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <Container>
      <p>
        <h1>Hello, your account is now verified!</h1> <br />
        <h2> You are going to be redirected to login page in {timeLeft}...</h2>
      </p>
    </Container>
  );
}

export default VerifyAccount;
