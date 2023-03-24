import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 50px;
  transition: color 300ms linear;

  &:hover,
  &:focus {
    color: orangered;
  }
`;
