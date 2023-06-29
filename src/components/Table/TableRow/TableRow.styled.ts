import styled from 'styled-components';

type CellPros = {
  $isEditing: boolean;
};

export const Container = styled.tr<CellPros>`
  border-bottom: 1px solid #e3e3e3;

  &:hover {
    ${({ $isEditing }) => (!$isEditing ? 'background-color: rgba(135, 158, 207, 0.1)' : '')};
  }
`;

export const RowCell = styled.td`
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;

export const CellInput = styled.input<CellPros>`
  background-color: ${({ $isEditing }) => ($isEditing ? '#f6f8fa' : 'transparent')};
  border: none;
  width: 91%;
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;

export const CellSelect = styled.select<CellPros>`
  background-color: ${({ $isEditing }) => ($isEditing ? '#f6f8fa' : 'transparent')};
  border: none;
  width: 91%;
  padding: 12px 0;
  font-size: 16px;
  color: #737373;
`;

export const ErrorContainer = styled.div`
  position: relative;
  height: auto;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 10px;
  position: absolute;
`;
