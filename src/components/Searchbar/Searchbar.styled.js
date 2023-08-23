import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  align-items: center;
  background: linear-gradient(to right, rgb(0, 255, 0), rgb(0, 0, 0));
`;

export const FormButton = styled.button`
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
  width: 300px;
  color: white;
  border-radius: 8px;
  background-color: green;
`;

export const Input = styled.input`
  padding: 4px 4px 4px 8px;
  width: 300px;
  border-radius: 8px;
  outline: none;
  border: 1px solid green;
  color: black;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;
