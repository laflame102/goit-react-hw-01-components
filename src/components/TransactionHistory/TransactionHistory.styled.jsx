import styled from '@emotion/styled';

export const Table = styled.table`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const TableHead = styled.th`
  color: white;
  background-color: #26dcf5;
  width: 200px;
  height: 30px;
`;

export const TableItem = styled.td`
  color: gray;
  background-color: ${props => (props.index % 2 !== 0 ? '#CFD7D8' : 'white')};
  width: 200px;
  height: 30px;
`;
