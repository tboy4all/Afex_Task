import React from 'react'
import Marquee from 'react-fast-marquee'
import { liveData } from '../../data/liveData'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 flex items-center  text-black text-[1rem] bg-white mt-2 h-[3rem] ml-[4rem] '>
      <div className='bg-black h-full text-white text-[1rem] text-center flex items-center justify-center w-[12rem]'>
        Live Market
      </div>

      <Marquee>
        {liveData.map((item, index) => (
          <div className='flex flex-col mr-16 text-sm items-center text-[#000] font-medium'>
            <span>{item.title}</span>
            <span className='text-sm'>{item.amount}</span>
          </div>
        ))}
      </Marquee>
    </footer>
  )
}

export default Footer
