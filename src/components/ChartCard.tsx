import React from 'react'

type Props = {
  header: string
  price: string
  bg: string
  month: string
  img: any
  bgStle?: React.CSSProperties
}

const ChartCard = (props: Props) => {
  return (
    <div className='flex flex-1  h-[10rem] bg-white mt-8 p-4 border border-[#EAEBF0] drop-shadow-[0_1px_2px_rgba(16, 24, 40, 0.04)] rounded-xl'>
      <div className='flex flex-col flex-1'>
        <span className='text-[1.1rem] mb-5 text-black'>{props.header}</span>
        <span className='text-2xl font-medium'>&#8358; {props.price}</span>
        <div className='flex gap-2 mt-3'>
          <span
            className='text-red-600 text-center rounded-md bg-[#FFF2F0] px-2 py-[1px] mt-1'
            style={props.bgStle}
          >
            {props.bg}
          </span>
          <span className='text-[#5F6D7E] text-md mt-1 px-2 '>
            {props.month}
          </span>
        </div>
      </div>

      <img
        src={props.img}
        alt=''
        className='inline-block w-[40%] h-[4rem] mt-[4rem] ml-[0.5rem] '
      />
    </div>
  )
}

export default ChartCard
