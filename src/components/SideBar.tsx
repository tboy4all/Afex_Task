/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { links, bottomIcons } from '../data/sideBarLinks'
import logo from '../assets/images/afexlogo.png'

const Sidebar = () => {
  return (
    <div className='-mt-[3rem] w-[50px] h-full bg-white border-1 border-r-[#EAEBF0]'>
      <nav>
        <ul>
          <li className='text-xs py-5 flex flex-col items-center justify-center'>
            <img className='h-[20px] w-[35px] ' src={logo} alt='comX' />
          </li>

          <div className=''>
            <div className='flex flex-col items-center justify-center'>
              {links.map((item, ind) => (
                <li key={ind} className='py-6 '>
                  <img src={item.image} alt='' className='w-[2rem] h-[2rem]' />
                </li>
              ))}
            </div>

            <div className='flex flex-col items-center mt-[52rem]'>
              {bottomIcons.map((Icon, ind) => (
                <li key={ind} className='py-6 '>
                  <Icon.icon size={20} />
                </li>
              ))}
            </div>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
