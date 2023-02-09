import styled from 'styled-components';

export const LogOutBtn = styled.button`
  display: inline-flex;
  justify-content: center;

  padding: 8px 10px;

  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: color 250ms linear, scale 250ms linear;

  :hover {
    color: rgba(86, 88, 241, 0.9);
    scale: 1.1;
  }
`;

export const Usertext = styled.span`
  font-weight: 500;
  b {
    color: rgba(10, 13, 197, 0.9);
    text-shadow: 1px 1px 2px white;
  }
`;

export const UserConteiner = styled.div`
  display: flex;
  align-items: center;
`;
