import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid black;
  box-shadow: 4px 20px 15px -11px rgba(21, 35, 97, 0.3);

  > nav {
    display: flex;
  }
`;
