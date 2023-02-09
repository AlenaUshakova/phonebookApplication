import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;

  font-weight: 500;
  border-radius: 5px;
  border: 1px solid transparent;
  text-decoration: none;
  color: black;

  transition: text-shadow 250ms linear, box-shadow 250ms linear, scale 250ms linear, border-color 250ms linear, color 250ms linear, background-color 250ms linear;

  &.active {
    border-color: rgba(86, 88, 241, 0.9);
    color: rgba(86, 88, 241, 0.9);
    background-color: rgb(243, 243, 245);
    box-shadow: 1px 11px 11px -4px rgba(21, 35, 97, 0.47);
  }
  
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: rgba(86, 88, 241, 0.9);
    text-shadow: 1px 1px 2px white;
    scale: 1.1;
  }
`;
