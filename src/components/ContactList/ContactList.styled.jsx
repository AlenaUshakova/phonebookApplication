import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0;
  margin-top: 10px;
  padding: 0;
  list-style: none;
`;

export const ContactsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 36px;
  width: 71px;

  font-size: small;
  font-family: inherit;
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

export const ContactsCallBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 36px;
  width: 71px;

  font-size: small;
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

export const ContactsLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 34px;
  width: 71px;

  font-size: small;
  border-radius: 5px;
  color: inherit;
  background-color: rgba(233, 233, 240, 0.7);
  border: 1px solid black;
  text-decoration: none;
  box-shadow: 3px 3px 3px 1px rgba(21, 35, 97, 0.2);

  transition: box-shadow 250ms linear, border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  :hover {
    border-color: rgba(86, 88, 241, 0.9);
    color: rgba(86, 88, 241, 0.9);
    background-color: rgb(243, 243, 245);
    box-shadow: 1px 11px 11px -4px rgba(21, 35, 97, 0.47);
  }
`;

export const ContactsItem = styled.li`
  align-items: center;
  font-size: large;
  justify-content: space-between;
  border-bottom: 1px dotted black;
  padding: 10px 0;

  @media screen and (min-width: 480px) {
    display: flex;
    gap: 20px;
 
  }
`;

export const ContactNotFound = styled.p`
  color: rgba(10, 13, 197, 0.9);
  text-shadow: 1px 1px 2px white;
  margin-top: 17px;
`;

export const ContactsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-align: left;
  font-size: 14px;
  margin-bottom: 10px;

  @media screen and (min-width: 480px) {
    align-items: stretch;
  }
  @media screen and (min-width: 768px) {
    font-size: medium;
  }

  p {
    margin: 5px;
  }
`;

export const NumberText = styled.p`
  color: rgba(10, 13, 197, 0.9);
  text-shadow: 1px 1px 2px white;
  padding-left: 23px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 480px) {
    margin: 0;
  }
`;
