import styled from 'styled-components';

type CellProps = {
    $isEditing: boolean;
  };

export const RowCell = styled.td`
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;

export const CellInput = styled.input<CellProps>`
  background-color: ${({ $isEditing }) => ($isEditing ? '#f6f8fa' : 'transparent')};
  border: none;
  width: 91%;
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;

export const CellSelect = styled.select<CellProps>`
  background-color: ${({ $isEditing }) => ($isEditing ? '#f6f8fa' : 'transparent')};
  border: none;
  width: 91%;
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;
