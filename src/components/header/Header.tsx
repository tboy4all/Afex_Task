import React, { useState } from 'react'
import './header.css'
import {
  RiArrowDropDownLine,
  RiArrowRightSLine,
  RiArrowUpDownLine,
} from 'react-icons/ri'
import ChartCard from '../ChartCard'
import Modal from '../../components/modal/Modal'
import Table from '../table/Table'
import { tableData1, tableData } from '../../data/tableData'
import Tab from '../tab/Tab'

import chart1 from '../../assets/images/Fill.png'
import chart2 from '../../assets/images/fill2.png'
import chart3 from '../../assets/images/fill3.png'
import TableTradeLog from '../table/TableTradeLog'

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
      <section className='flex gap-6 mr-8'>
        <ChartCard
          price='8,374,763'
          header='Cash Balance'
          bg='Decline'
          month='Monitored Monthly'
          img={chart1}
        />

        <ChartCard
          price='8,374,763'
          header='Securities Value'
          bg='Decline'
          month='Monitored Monthly'
          img={chart2}
        />

        <ChartCard
          price='8,374,763'
          header='Loan Balance'
          bg='Decline'
          month='Monitored Monthly'
          img={chart3}
        />
      </section>

      {/* Tab Section */}
      <Tab />

      {/* Table Two Column Section */}
      <section className='grid grid-cols-2 gap-6 mr-8'>
        <Table sell='Buy Board' data={tableData} />
        <Table
          data={tableData1}
          sell='Sell Board'
          style={{ color: 'red' }}
          bgStle={{ backgroundColor: '#FFF2F0', color: '#E2341D' }}
        />
      </section>

      <section><TableTradeLog /></section>

      <Modal openModal={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default Header
