import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: medium;
  padding: 50px 40px;
  span {
    color: red;
    text-align: center;
    font-size: 12px;
    display: block;
    margin-top: -10px;
    opacity: 0;
  }
`;

export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;
  margin-bottom: 20px;
  font-family: inherit;
  font-size: medium;
  text-align: left;
  color: inherit;
  background-color: rgba(233, 233, 240, 0.7);
  border: 1px solid black;
  box-shadow: 3px 3px 3px 1px rgba(21, 35, 97, 0.2);
  border-radius: 5px;

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

  :invalid:not(:placeholder-shown) + span {
    opacity: 1;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 8px;
  margin-right: 6px;
  padding: 8px 16px;

  font-family: inherit;
  font-size: medium;
  line-height: 20px;
  border: none;
  border-radius: 5px;
  color: inherit;
  background-color: rgba(233, 233, 240, 0.7);
  border: 1px solid black;
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

export const Contactabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
