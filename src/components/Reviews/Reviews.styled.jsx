import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid #5c5c5c; */
`;
export const Rewiev = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #5c5c5c;
  border-radius: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  margin: 0 0 10px 0;
`;

export const Text = styled.p`
  color: #d1d1d1;
  font-weight: 400;
  font-style: italic;
`;
