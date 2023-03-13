import React, { useState } from 'react'
import './header.css'
import {
  RiArrowDropDownLine,
  RiArrowRightSLine,
  RiArrowUpDownLine,
} from 'react-icons/ri'

import Modal from '../../components/modal/Modal'

import Main from '../Main'

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className='ml-[6rem] h-[40px] '>
      <div className='flex gap-1 py-7 text-gray-500 text-sm '>
        <span>Home</span>
        <RiArrowRightSLine size={18} className='-mt-[0.1rem]' />
        <span className='text-[#D71E0E]'>Market</span>
      </div>
      <section className='flex justify-between mr-8 mt-2'>
        <div>
          <h1 className='text-[28px] font-medium'>Market</h1>
          <p className='text-gray-500 text-[14px]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. ab.
          </p>
        </div>
        <div className='flex gap-4 mt-2'>
          <button
            onClick={() => setShowModal(true)}
            className='flex items-center justify-center h-[2.5rem] w-[9rem] border-2 rounded-md'
          >
            Page Setting
            <RiArrowUpDownLine size={14} className='ml-1' />
          </button>
          <button className='flex items-center justify-center h-[2.5rem] w-[6rem] border-2 rounded-md'>
            Demo
            <RiArrowDropDownLine size={20} />
          </button>
        </div>
      </section>

      {/* Chart Section */}
      <Main />
      <Modal openModal={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Header
