import styled from "styled-components";

interface ColorShow {
  setColor?: string;
  sidebar?: string;
  color: {
    body: string;
    PrimaryColor: string;
    SecondaryColor: string;
  };
}

export const SubTableDiv = styled.div`
  width: 100%;
  border: 1px solid #e4e3e3;
  background-color: #fff;
  border-radius: 8px 8px 0px 0px;

  .table_header {
    padding: 18px 15px;

    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 16px;
    }
  }

  .subTabble_arrangement {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 15px;
    border-top: 1px solid #e4e3e3;

    p {
      width: 25%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 16px;
      opacity: 0.7;
    }
  }

  .subTablebody {
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 1px solid #e4e3e3;
    padding: 10px 15px;

    p {
      width: 25%;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: rgba(0, 0, 0, 0.897);
    }

    .center {
      text-align: left;
    }

    .cols {
      color: ${({ setColor }: ColorShow) =>
        setColor === "Buy" ? "#259A2E" : setColor === "Sell" && "red"};
    }

    .button_sections {
      width: 25%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      button {
        background-color: transparent;
        outline: none;
        background-color: ${({ setColor }: ColorShow) =>
          setColor === "Buy" ? "#E7FDE9" : setColor === "Sell" && "#FFF2F0"};
        /* border: 1px solid
          ${({ setColor }: ColorShow) =>
          setColor === "Buy" ? "#bad5c0" : setColor === "Sell" && "red"}; */
        color: ${({ setColor }: ColorShow) =>
          setColor === "Buy" ? "#259A2E" : setColor === "Sell" && "red"};
        padding: 4px 10px;
        border-radius: 15px;
      }
    }
  }
`;
