import React from "react";
import { SubTableDiv } from "./subtable.style";

interface SubTableProps {
  theme?: any;
  headerDetails?: String;
  subTableArr: {
    Security: string;
    Board: string;
    OrderType: string;
    Matched: string;
    Quantity: string;
    Date: string;
    Time: string;
  }[];
}

const FullTable = ({ subTableArr, theme, headerDetails }: SubTableProps) => {
  return (
    <SubTableDiv color={theme}>
      <div className="table_header">
        <h2>{headerDetails}</h2>
      </div>

      <div className="subTabble_arrangement">
        <p>Security</p>
        <p>Board</p>
        <p>OrderType</p>
        <p>Matched Price</p>
        <p>Quantity</p>
        <p>Date</p>
        <p>Time</p>
      </div>

      {subTableArr?.map((item, key) => (
        <div key={key} className={"subTablebody"}>
          <p>{item.Security}</p>
          <p className={"center"}>{item.Board}</p>
          <p className={"center"}>{item.OrderType}</p>
          <p className={"center"}>{item.Matched}</p>
          <p className={"center"}>{item.Quantity}</p>
          <p className={"center"}>{item.Date}</p>
          <p className={"center"}>{item.Time}</p>
        </div>
      ))}
    </SubTableDiv>
  );
};

export default FullTable;
