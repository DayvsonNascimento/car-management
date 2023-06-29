import styled from 'styled-components';

type ContaienerProps = {
  $isEditing: boolean;
};

export const Container = styled.tr<ContaienerProps>`
  border-bottom: 1px solid #e3e3e3;

  &:hover {
    ${({ $isEditing }) => (!$isEditing ? 'background-color: rgba(135, 158, 207, 0.1)' : '')};
  }
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
