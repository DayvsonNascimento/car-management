import styled from 'styled-components';

const ERROR_COLOR = '#e02924';
const STANDARD_COLOR = '#6e7781';

interface InputProps {
  $error: boolean;
  $active?: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label<InputProps>`
  text-align: left;
  margin-bottom: 2px;

  z-index: 2;
  position: absolute;
  left: 0.5rem;
  font-weight: 400;
  top: 1rem;
  font-size: ${({ $active }) => ($active ? '.7rem' : '0.85rem')};
  color: ${({ $error }) => ($error ? ERROR_COLOR : STANDARD_COLOR)};
  letter-spacing: 0.005625rem;
  pointer-events: none;
  transition: all 0.2s ease-in;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    width: 88%;
    background: #fff;
  }

  transform: ${({ $active }) => ($active ? ' translateY(-.5rem)' : '')};
`;

export const Input = styled.input<InputProps>`
  margin: 5px 0px 15px 0px;
  padding: 11px 8px 0 6.5px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  font-size: 14px;
  cursor: text;

  ${({ $error }) => ($error ? 'border-color: red;' : '')}
`;

export const Select = styled.select<InputProps>`
  margin: 5px 0px 15px 0px;
  padding: 11px 8px 0 7.5px;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
  font-size: 14px;

  ${({ $error }) => ($error ? 'border-color: red;' : '')}
`;

export const ErrorText = styled.div`
  margin-top: 0;
  font-size: 14px;
  text-align: left;
  color: #f02849;
  margin-bottom: 5px;
  margin-top: -14px;
`;
