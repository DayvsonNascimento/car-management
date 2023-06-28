import styled from 'styled-components';

export const Label = styled.label`
  text-align: left;
  margin-bottom: 2px;
  font-size: 14px;
`;

export const Input = styled.input`
  margin: 5px 0px 15px 0px;
  padding-left: 8px;
  padding-right: 8px;
  width: auto;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #d4d4d4;

  cursor: text;
`;

export const Select = styled.select`
  margin: 5px 0px 15px 0px;
  padding-left: 4.5px;
  padding-right: 8px;
  width: auto;
  height: 35px;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
`;

export const ErrorText = styled.div`
  margin-top: 0;
  font-size: 14px;
  text-align: left;
  color: #f02849;
  margin-bottom: 5px;
  margin-top: -14px;
`;
