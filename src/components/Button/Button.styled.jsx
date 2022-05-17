import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 24px auto;
  padding: 11px 15px;
  font-size: 32px;
  text-transform: uppercase;
  border: 1px solid #0f0f0f80;
  cursor: pointer;
  color: rgb(255 141 141);
  background-color: rgb(251 226 197);
  border-radius: 8px;
  transition: 250ms;
  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: rgb(3, 173, 3);
    color: #fafafa;
    font-size: 34px;
    transition: 300ms;
    &:disabled {
      background-color: rgb(223, 223, 223);
      color: #8b0404;
      font-size: 32px;
      transition: 300ms;
      cursor: not-allowed;
    }
  }
`;
