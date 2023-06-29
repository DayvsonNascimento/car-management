import styled from 'styled-components';

type CellProps = {
  $isEditing: boolean;
};

export const RowCell = styled.td`
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
  -webkit-text-fill-color: #737373
`;

export const CellInput = styled.input<CellProps>`
  background-color: ${({ $isEditing }) => ($isEditing ? '#f6f8fa' : 'transparent')};
  border: none;
  border-radius: 6px;
  width: 91%;
  padding: 12px 0;
  font-size: 16px;
  color: #737373;

`;

export const CellSelect = styled.select<CellProps>`
  background-color: ${({ $isEditing }) => ($isEditing ? '#f6f8fa' : 'transparent')};
  border: none;
  border-radius: 6px;
  width: 91%;
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;
