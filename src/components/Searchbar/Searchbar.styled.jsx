import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(250, 225, 173, 0.55);
  padding-top: 70px;
  padding-bottom: 70px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;
export const Form = styled.form`
  border: 3px solid rgb(177 116 22);
  width: 380px;
  display: flex;
  flex-direction: row-reverse;
  padding: 5px;
  z-index: 6;
  justify-content: center;
  background-color: rgb(235, 252, 255);
  margin: 0 auto;
  opacity: 1;
  border-radius: 5px;
  box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;
export const Input = styled.input`
  font-size: 26px;
  font-weight: 700;

  background-color: transparent;
  &::placeholder {
    font-size: 20px;
  }
`;
export const Button = styled.button`
  margin-top: 5px;
  background-color: transparent;
  border-color: transparent;
  transform: scale(1);
  color: gray;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    fill: rgb(7, 184, 16);
  }
`;
