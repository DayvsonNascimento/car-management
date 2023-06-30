import styled from 'styled-components';

interface TableContentProps {
  $hasData: boolean;
}

export const Container = styled.div`
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0 1px 1px 1px #e3e3e3;
  border-radius: 5px;
  margin-bottom: 2rem;
  overflow-x: auto;
`;

export const TableContent = styled.table<TableContentProps>`
  width: 100%;
  border-collapse: collapse;
  min-width: 650px;

  ${({ $hasData }) => ($hasData ? '' : 'height: 400px')}
`;

export const HeaderCell = styled.th`
  padding: 1rem 0;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  width: 15.5%;
  color: #1b3a57;
`;

export const HeaderRow = styled.tr`
  border-bottom: 1px solid #e3e3e3;
  height: 70px;

  th:nth-child(3) {
    width: 14%;
  }

  th:nth-child(4) {
    width: 12%;
  }

  th:nth-child(6) {
    width: 18%;
  }
`;

export const TableHeader = styled.thead``;

export const SpinnerContainer = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  height: 350px;
  .spinner {
    color: rgb(29, 161, 242);
    width: 4rem;
    height: 4rem;
  }
`;

export const TableBody = styled.tbody``;
