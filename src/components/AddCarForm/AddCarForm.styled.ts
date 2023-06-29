import styled from 'styled-components';

export const Form = styled.form`
  background-color: #ffffff;
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 24px 60px;
  box-shadow: 0 1px 1px 1px #e3e3e3;
  border-radius: 5px;
  color: #7a7a7a;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1.5rem;
  gap: 1rem;

  .cancel-button {
    background-color: white;
    color: rgb(29, 161, 242);
    border-color: rgb(29, 161, 242);
    border: 1px solid rgb(29, 161, 242);

    &:hover {
      background-color: rgb(244, 246, 246);
    }

    &:disabled {
      background-color: rgb(244, 246, 246);
    }

  }
`;

export const Title = styled.h2`
  margin: 10px 0 20px;
`;
