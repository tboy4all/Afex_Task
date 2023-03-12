import React from 'react'
import { FiBriefcase, FiUsers, FiSettings } from 'react-icons/fi'
import { RiDashboardLine } from 'react-icons/ri'
import { AiOutlineLineChart, AiOutlineFile } from 'react-icons/ai'
import { CiLogout } from 'react-icons/ci'

const Sidebar = () => {
  return (
    <div className='-mt-[3rem] w-[50px] h-full bg-white border-1 border-r-[#EAEBF0]'>
      <nav>
        <ul className='flex flex-col items-center'>
          <li className='text-xs py-5 flex flex-col items-center justify-center'>
            <img className='h-[20px] w-[35px] ' src='./commx.png' alt='comX' />
          </li>
          <li className='py-8 flex flex-col items-center justify-center'>
            <RiDashboardLine size={20} />
          </li>
          <span className='flex items-center justify-center w-[3rem] h-[3rem] bg-[#F3F9FE] rounded-md'>
            <li className='py-6 flex flex-col items-center justify-center text-red-800'>
              <AiOutlineLineChart size={20} />
            </li>
          </span>

          <li className='py-6 flex flex-col items-center justify-center'>
            <FiBriefcase size={20} />
          </li>
          <li className=' py-6 flex flex-col items-center justify-center'>
            <FiUsers size={20} />
          </li>
          <li className=' py-6 flex flex-col items-center justify-center'>
            <AiOutlineFile size={20} />
          </li>
          <span className='mt-[25rem]'>
            <li className='py-6 flex flex-col items-center justify-center'>
              <FiSettings size={20} />
            </li>
            <li className='py-6 flex flex-col items-center justify-center mt'>
              <CiLogout size={20} />
            </li>
          </span>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
