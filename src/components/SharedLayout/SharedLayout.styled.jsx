import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 20px 50px;
  border-radius: 20px;
  color: #000000;

  &.active {
    background-color: #481875;
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
