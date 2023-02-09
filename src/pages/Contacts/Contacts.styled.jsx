import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  color: rgb(44, 43, 43);
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.4rem;
`;

export const ContactStart = styled.p`
  color: rgba(10, 13, 197, 0.9);
  text-shadow: 1px 1px 2px white;
`;

export const ContactWrap = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
`;
