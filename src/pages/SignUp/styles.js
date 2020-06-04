import styled from 'styled-components';
import { darken } from 'polished';

export const Background = styled.div`
  background-color: #6f0000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  width: 400px;
  height: 480px;
  background-color: #fff;
  border-radius: 6px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 15px;

  img {
    width: 325px;
    height: 90px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 345px;

    b {
      font-size: 13px;
      letter-spacing: 0.2px;
    }

    input {
      background: #eee;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: #909090;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #6f0000;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#6f0000')};
      }
    }
  }
`;
