import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeMain = styled.div`
  padding-top: 150px;
  width: 100%;
  text-align: center;
`;

export const HomeTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;

  span {
    color: rgba(10, 13, 197, 0.9);
    text-shadow: 1px 1px 2px white;
    margin-left: 10px;
  }
`;

export const HomeText = styled.p`
  margin-top: 100px;
  margin-bottom: 30px;

  font-size: 25px;
  font-weight: 500;
  color: rgba(10, 13, 197, 0.9);
  text-shadow: 1px 1px 2px white;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  display: inline-flex;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;
  animation-name: spin;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  transition: scale 250ms linear, color 250ms linear, text-shadow 250ms linear;

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: rgba(10, 13, 197, 0.9);
    text-shadow: 1px 1px 2px white;
  }
  
  @keyframes spin {
    0% {
      transform: scale(1);
      color: black;
    }
    50% {
      transform: scale(1.1);
      color: rgba(10, 13, 197, 0.9);
      text-shadow: 1px 1px 2px white;
    }
    100% {
      transform: scale(1);
      color: black;
    }
  }
`;

export const HomeWrap = styled.p`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 150px;
  }
`;
