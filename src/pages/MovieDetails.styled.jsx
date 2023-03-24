import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 0 0 30px 0;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 5px;

  &.active {
    background-color: #9a000d;
  }
`;
