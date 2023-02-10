import styled from '@emotion/styled';

export const FriendCollection = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  gap: 8px;
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  width: 200px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`;
