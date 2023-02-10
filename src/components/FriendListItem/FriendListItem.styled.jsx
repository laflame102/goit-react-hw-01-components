import styled from '@emotion/styled';

export const Status = styled.span`
  margin-top: 15px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Img = styled.img`
  display: block;
  margin-left: 10px;
`;

export const Name = styled.p`
  font-size: 15px;
`;
