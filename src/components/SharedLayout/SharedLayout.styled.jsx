import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 10px 50px;
  border-radius: 10px;
  color: #ffffff;

  &.active {
    background-color: #9a000d;
    color: #ffffff;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
