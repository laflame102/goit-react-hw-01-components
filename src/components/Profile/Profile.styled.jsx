import styled from '@emotion/styled';

export const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 150px;
  margin: 0 auto;
`;

export const Username = styled.p`
  font-size: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
  padding: 40px;
`;

export const Tag = styled.p`
  color: gray;
  font-size: 30px;
`;

export const Stats = styled.ul`
  width: 335px;
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  border: 1px solid black;
  width: 100%;
  text-align: center;
`;
