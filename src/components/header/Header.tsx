import React from "react";
import "./header.css";
import {
  RiArrowDropDownLine,
  RiArrowRightSLine,
  RiArrowUpDownLine,
} from "react-icons/ri";
import SubTable from "../SubTable";
import {
  FullTableSection,
  HeaderTableDiv,
  TableSection,
} from "./header.styles";
import FullTable from "../FullTable";

const Header = () => {
  return (
    <div className="ml-[5rem] h-[40px] ">
      <div className="flex gap-1 py-7 text-gray-500 text-sm bg-slate-800 ">
        <span>Home</span>
        <RiArrowRightSLine size={18} className="-mt-[0.1rem]" />
        <span className="text-[#D71E0E]">Market</span>
        {/* <img className='h-[40px] w-[55px] ' src='./commx.png' alt='comX' /> */}
      </div>
      <section className="flex justify-between mr-8 mt-2">
        <div>
          <h1 className="text-[28px] font-medium">Market</h1>
          <p className="text-gray-500 text-[14px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. ab.
          </p>
        </div>
        <div className="flex gap-4 mt-2">
          <button className="flex items-center justify-center h-[2.5rem] w-[9rem] border-2 rounded-md">
            Page Setting
            <RiArrowUpDownLine size={14} className="ml-1" />
          </button>
          <button className="flex items-center justify-center h-[2.5rem] w-[6rem] border-2 rounded-md">
            Demo
            <RiArrowDropDownLine size={20} />
          </button>
        </div>
      </section>

      {/* Chart Section */}
      <section className="flex gap-6 mr-8">
        <div className="flex flex-1 flex-col  h-[10rem] bg-white mt-8 p-4 border border-[#EAEBF0] drop-shadow-[0_1px_2px_rgba(16, 24, 40, 0.04)] rounded-xl">
          <span className="text-[1rem] mb-5 text-black">Cash Balance</span>
          <span className="text-2xl font-medium">&#8358; 8,374,763</span>
          <div className="flex gap-2 mt-3">
            <span className="text-red-600">
              <button className="rounded-md bg-[#FFF2F0] w-[54px] h-[22px]">
                Decline
              </button>
            </span>
            <span className="text-[#5F6D7E] text-sm mt-1">
              <p>Monitored Monthly</p>
            </span>
          </div>

          <div className="absolute left-[20rem] right-0 bottom-[28rem] ">
            <img src="./Line.png" alt="" className="object-cover w-20" />
          </div>
        </div>

        <div className="flex flex-1 flex-col  h-[10rem] bg-white mt-8 p-4 border border-[#EAEBF0] drop-shadow-[0_1px_2px_rgba(16, 24, 40, 0.04)] rounded-xl">
          <span className="text-[1rem] mb-5 text-black">Cash Balance</span>
          <span className="text-2xl font-medium">&#8358; 8,374,763</span>
          <div className="flex gap-2 mt-3">
            <span className="text-red-600">
              <button className="rounded-md bg-[#FFF2F0] w-[54px] h-[22px]">
                Decline
              </button>
            </span>
            <span className="text-[#5F6D7E] text-sm mt-1">
              <p>Monitored Monthly</p>
            </span>
          </div>

          {/* <div className='absolute left-[20rem] right-0 bottom-[28rem] '>
            <img src='./Line.png' alt='' className='object-cover w-20' />
          </div> */}
        </div>

        <div className="flex flex-col flex-1 h-[10rem] bg-white mt-8 p-4 border border-[#EAEBF0] drop-shadow-[0_1px_2px_rgba(16, 24, 40, 0.04)] rounded-xl">
          <span className="text-[1rem] mb-5 text-black">Cash Balance</span>
          <span className="text-2xl font-medium">&#8358; 8,374,763</span>
          <div className="flex gap-2 mt-3">
            <span className="text-red-600">
              <button className="rounded-md bg-[#FFF2F0] w-[54px] h-[22px]">
                Decline
              </button>
            </span>
            <span className="text-[#5F6D7E] text-sm mt-1">
              <p>Monitored Monthly</p>
            </span>
          </div>

          {/* <div className='absolute left-[20rem] right-0 bottom-[28rem] '>
            <img src='./Line.png' alt='' className='object-cover w-20' />
          </div> */}
        </div>
      </section>

      <section>
        <div className="flex gap-5 mt-10 border-b-[1px] ">
          <span className="text-gray-500 text-[15px] hover:text-black hover:border-b-[1px] border-black pb-6">
            Product View
          </span>
          <span className="text-red-500 text-[15px] cursor-pointer hover:text-red-500 hover:border-b-[1px] border-red-600 pb-6">
            Order Book
          </span>
          <span className="text-gray-500 text-[15px] hover:text-black hover:border-b-[1px] border-black pb-6">
            Price History
          </span>

          <div className="CustomOver flex gap-3  hover:border-b-[1px] border-black pb-6">
            <span className="childHoverTwo text-gray-500 text-[15px]  ">
              Open Orders
            </span>
            <span className="childHover flex items-center justify-center bg-gray-300 rounded-[8px] px-[6px] w-[29px] h-[18px] mt-1 hover:bg-black hover:text-white">
              10
            </span>
          </div>

          <div className="CustomOver flex gap-3  hover:border-b-[1px] border-black pb-6">
            <span className="childHoverTwo text-gray-500 text-[15px]">
              Closed Trades
            </span>
            <span className="childHover flex items-center justify-center bg-gray-300 rounded-[8px] px-[6px] w-[29px] h-[18px] mt-1 hover:bg-black hover:text-white">
              20
            </span>
          </div>

          <div className="CustomOver flex gap-3  hover:border-b-[1px] border-black pb-6">
            <span className="childHoverTwo text-gray-500 text-[15px]">
              Canceled Trades
            </span>
            <span className="childHover flex items-center justify-center bg-gray-300 rounded-[8px] px-[6px] w-[29px] h-[18px] mt-1 hover:bg-black hover:text-white">
              20
            </span>
          </div>
        </div>
      </section>

      <TableSection>
        <HeaderTableDiv>
          <div className={"dashboardlastGridTwoDiv"}>
            <SubTable
              subTableArr={subtableOne}
              subTableButtonDetails={"Buy"}
              headerDetails={"Buy Board"}
            />
          </div>
          <div className={"dashboardlastGridTwoDiv"}>
            <SubTable
              headerDetails={"Sell Board"}
              subTableArr={subtableTwo}
              subTableButtonDetails={"Sell"}
            />
          </div>
        </HeaderTableDiv>

        <FullTableSection>
          <div className="Table">
            <FullTable headerDetails={"Sell Board"} subTableArr={fullTable} />
          </div>
        </FullTableSection>
      </TableSection>
    </div>
  );
};

const subtableOne = [
  { product: "Soybeans (SSBS)", Quantity: "2003", Bid_Price: "1736.92" },
  { product: "Paddy Rice (SPRL)", Quantity: "11293", Bid_Price: "3627.00" },
  { product: "Maize (SMAZ)", Quantity: "1832", Bid_Price: "8294.01" },
  { product: "Sorghum (SSGM)", Quantity: "3212", Bid_Price: "1736.92" },
  {
    product: "Fair Trade ETC (FETC)",
    Quantity: "29102",
    Bid_Price: "8192.00",
  },
];

const subtableTwo = [
  { product: "Soybeans (SSBS)", Quantity: "2003", Bid_Price: "1736.92" },
  { product: "Paddy Rice (SPRL)", Quantity: "11293", Bid_Price: "3627.00" },
  { product: "Maize (SMAZ)", Quantity: "1832", Bid_Price: "8294.01" },
  { product: "Sorghum (SSGM)", Quantity: "3212", Bid_Price: "1736.92" },
  {
    product: "Fair Trade ETC (FETC)",
    Quantity: "29102",
    Bid_Price: "8192.00",
  },
];

const fullTable = [
  {
    Security: "Soybeans (SSBS)",
    Board: "2003",
    OrderType: "1736.92",
    Matched: "1736.92",
    Quantity: "1736.92",
    Date: "1736.92",
    Time: "1736.92",
  },
  {
    Security: "Soybeans (SSBS)",
    Board: "2003",
    OrderType: "1736.92",
    Matched: "1736.92",
    Quantity: "1736.92",
    Date: "1736.92",
    Time: "1736.92",
  },
  {
    Security: "Soybeans (SSBS)",
    Board: "2003",
    OrderType: "1736.92",
    Matched: "1736.92",
    Quantity: "1736.92",
    Date: "1736.92",
    Time: "1736.92",
  },
  {
    Security: "Soybeans (SSBS)",
    Board: "2003",
    OrderType: "1736.92",
    Matched: "1736.92",
    Quantity: "1736.92",
    Date: "1736.92",
    Time: "1736.92",
  },
  {
    Security: "Soybeans (SSBS)",
    Board: "2003",
    OrderType: "1736.92",
    Matched: "1736.92",
    Quantity: "1736.92",
    Date: "1736.92",
    Time: "1736.92",
  },
  {
    Security: "Soybeans (SSBS)",
    Board: "2003",
    OrderType: "1736.92",
    Matched: "1736.92",
    Quantity: "1736.92",
    Date: "1736.92",
    Time: "1736.92",
  },
  {
    Security: "Soybeans (SSBS)",
    Board: "2003",
    OrderType: "1736.92",
    Matched: "1736.92",
    Quantity: "1736.92",
    Date: "1736.92",
    Time: "1736.92",
  },
];

export default Header;
