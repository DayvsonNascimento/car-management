import styled from 'styled-components';

interface TableBodyProps {
  $hasData: boolean;
}

export const Container = styled.div`
  padding: 24px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 1px 1px #e3e3e3;
  border-radius: 5px;
`;

export const TableContent = styled.table`
  width: 100%;
  border-collapse: collapse;
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

  th:nth-child(4) {
    width: 12%;
  }

  th:nth-child(6) {
    width: 17%;
  }
`;

export const TableHeader = styled.thead``;

export const SpinnerContainer = styled.div`
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

export const TableBody = styled.tbody<TableBodyProps>`
  ${({ $hasData }) => ($hasData ? '' : 'height:350px')}
`;
