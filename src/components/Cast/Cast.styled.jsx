import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 200px;
  border: 1px solid #5c5c5c;
  border-radius: 20px;
  text-align: center;
`;
