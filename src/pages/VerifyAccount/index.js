import React from 'react';
import Cryptr from 'cryptr';

import history from '~/services/history';

import { Container } from './styles';

function VerifyAccount({ match }) {
  const { id } = match.params;
  const cryptr = new Cryptr('YourSecretHere');
  const decryptedString = cryptr.decrypt(id);
  return (
    <Container>
      <h1>Oi {decryptedString}</h1>
    </Container>
  );
}

export default VerifyAccount;
