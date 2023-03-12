import styled from "styled-components";

export const HeaderTableDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 25px 0px;

  @media (max-width: 750px) {
    flex-direction: column;
  }

  .dashboardlastGridTwoDiv {
    width: 49%;
    padding-right: 20px;

    @media (max-width: 750px) {
      width: 100%;
    }
  }
`;

export const TableSection = styled.div`
  height: 45vh;
  overflow-y: scroll;
  padding-bottom: 90px;
`;

export const FullTableSection = styled.div`
  @media (max-width: 720px) {
    overflow-x: auto;
  }

  .Table {
    margin-right: 20px;
  }
`;
