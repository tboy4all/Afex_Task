import React from "react";
import { SubTableDiv } from "./subtable.style";

interface SubTableProps {
  theme?: any;
  headerDetails?: String;
  subTableButtonDetails: string;
  subTableArr: {
    product: string;
    Quantity: string;
    Bid_Price: string;
  }[];
}

const SubTable = ({
  subTableArr,
  subTableButtonDetails,
  theme,
  headerDetails,
}: SubTableProps) => {
  return (
    <SubTableDiv color={theme} setColor={subTableButtonDetails}>
      <div className="table_header">
        <h2>{headerDetails}</h2>
      </div>

      <div className="subTabble_arrangement">
        <p>Product</p>
        <p>Quantity</p>
        <p>Bid Price</p>
        <p>Action</p>
      </div>

      {subTableArr?.map((item, key) => (
        <div key={key} className={"subTablebody"}>
          <p>{item.product}</p>
          <p className={"center"}>{item.Quantity}</p>
          <p className={"center cols"}>{item.Bid_Price}</p>

          <div className="button_sections">
            <button>{subTableButtonDetails}</button>
          </div>
        </div>
      ))}
    </SubTableDiv>
  );
};

export default SubTable;
