import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 77.75rem;
  display: flex;
  margin: 0px auto;
  align-items: center;
  margin-top: 2rem;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
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
      background-color: rgb(230 234 236);
    }
`;

export const Title = styled.h1`
  text-align: center;
  color: #1b3a57;
`;
