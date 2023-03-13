import React from 'react'

const Tab = () => {
  return (
    <section>
    <div className='flex gap-5 mt-14 border-b-[1px] '>
      <span className='text-gray-500 text-[15px] hover:text-black hover:border-b-[1px] border-black pb-6'>
        Product View
      </span>
      <span className='text-red-500 text-[15px] cursor-pointer hover:text-red-500 hover:border-b-[1px] border-red-600 pb-6'>
        Order Book
      </span>
      <span className='text-gray-500 text-[15px] hover:text-black hover:border-b-[1px] border-black pb-6'>
        Price History
      </span>

      <div className='CustomOver flex gap-3  hover:border-b-[1px] border-black pb-6'>
        <span className='childHoverTwo text-gray-500 text-[15px]  '>
          Open Orders
        </span>
        <span className='childHover flex items-center justify-center bg-gray-300 rounded-[8px] px-[6px] w-[29px] h-[18px] mt-1 hover:bg-black hover:text-white'>
          10
        </span>
      </div>

      <div className='CustomOver flex gap-3  hover:border-b-[1px] border-black pb-6'>
        <span className='childHoverTwo text-gray-500 text-[15px]'>
          Closed Trades
        </span>
        <span className='childHover flex items-center justify-center bg-gray-300 rounded-[8px] px-[6px] w-[29px] h-[18px] mt-1 hover:bg-black hover:text-white'>
          20
        </span>
      </div>

      <div className='CustomOver flex gap-3  hover:border-b-[1px] border-black pb-6'>
        <span className='childHoverTwo text-gray-500 text-[15px]'>
          Canceled Trades
        </span>
        <span className='childHover flex items-center justify-center bg-gray-300 rounded-[8px] px-[6px] w-[29px] h-[18px] mt-1 hover:bg-black hover:text-white'>
          20
        </span>
      </div>
    </div>
  </section>
  )
}

export default Tab