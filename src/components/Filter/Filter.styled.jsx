import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FilterName = styled.input`
  margin-bottom: 20px;
  padding: 8px;

  font-size: medium;
  text-align: left;
  color: inherit;
  background-color: rgba(233, 233, 240, 0.7);
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 3px 3px 3px 1px rgba(21, 35, 97, 0.2);
  transition: box-shadow 250ms linear, border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  :hover,
  :focus {
    border-color: rgba(86, 88, 241, 0.9);
    color: rgba(50, 17, 112, 0.9);
    background-color: rgb(243, 243, 245);
    box-shadow: 1px 11px 11px -4px rgba(21, 35, 97, 0.47);
  }

  @media screen and (min-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`;

export const FilterStyle = styled.label`
  font-size: medium;
  margin-bottom: 5px;
`;
