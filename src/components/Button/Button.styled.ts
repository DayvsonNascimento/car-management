import styled from 'styled-components';

export const Container = styled.div`
  bottom: 0;
  right: 10px;
  margin-bottom: 15px;
`;

export const CustomButton = styled.button`
  width: 108px;
  background-color: rgb(29, 161, 242);
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  padding: 8px;
  border: none;

  &:disabled {
    cursor: auto;
    background-color: rgb(29, 161, 242, 0.5);
  }

  &:hover {
    background-color: rgb(19 144 221);
  }
`;
