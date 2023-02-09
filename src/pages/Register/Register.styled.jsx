import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 50px 40px;

  font-size: medium;
`;

export const RegisterFormInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  margin-bottom: 20px;
  padding: 8px;

  font-family: inherit;
  font-size: medium;
  color: inherit;
  background-color: rgba(233, 233, 240, 0.7);
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 1px rgba(21, 35, 97, 0.2);

  transition: box-shadow 250ms linear, border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  :hover,
  :focus {
    cursor: pointer;
    border-color: rgba(86, 88, 241, 0.9);
    color: rgba(50, 17, 112, 0.9);
    background-color: rgb(243, 243, 245);
    box-shadow: 1px 11px 11px -4px rgba(21, 35, 97, 0.47);
  }
  :-webkit-autofill {
    transition: background-color 250s linear, box-shadow 250ms linear;
  }

  @media screen and (min-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const RegisterFormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 8px;
  margin-right: 6px;
  padding: 8px 16px;

  border-radius: 5px;
  color: inherit;
  background-color: rgba(233, 233, 240, 0.7);
  border: 1px solid black;
  font-size: medium;
  line-height: 20px;
  cursor: pointer;
  box-shadow: 3px 3px 3px 1px rgba(21, 35, 97, 0.2);

  transition: box-shadow 250ms linear, border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  :hover {
    border-color: rgba(86, 88, 241, 0.9);
    color: rgba(86, 88, 241, 0.9);
    background-color: rgb(243, 243, 245);
    box-shadow: 1px 11px 11px -4px rgba(21, 35, 97, 0.47);
  }
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  color: rgb(44, 43, 43);
`;

export const RegisterLabel = styled.label`
  display: flex;
  align-items: center;

  margin-bottom: 5px;
`;
