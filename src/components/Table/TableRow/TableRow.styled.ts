import styled from 'styled-components';

type CellInputPros = {
  $isEditing: boolean;
};

export const Container = styled.tr`
  border-bottom: 1px solid #e3e3e3;

  &:hover {
    background-color: rgba(135, 158, 207, 0.1);
  }
`;

export const RowCell = styled.td`
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;

export const CellInput = styled.input<CellInputPros>`
  background-color: ${({ $isEditing }) => ($isEditing ? '#f6f8fa' : 'transparent')};
  border: none;
  width: 91%;
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;
