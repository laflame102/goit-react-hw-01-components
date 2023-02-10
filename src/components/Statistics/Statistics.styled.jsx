import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  width: 335px;
  margin: 0 auto;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  border: 1px solid black;
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
