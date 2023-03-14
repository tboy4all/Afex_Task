import React, { useState } from 'react'
import { tab } from '../../data/tab'

const Tab = () => {
  const [activeTab, setActiveTab] = useState('Order Book')

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab)
  }
  return (
    <section>
      <div className='flex gap-5 mt-14 border-b-[1px] cursor-pointer '>
        {tab.map((item, ind) => (
          <div
            onClick={() => handleTabClick(item.name)}
            key={ind}
            className={`CustomOver flex gap-3 pb-6  ${
              activeTab === item.name
                ? 'text-red-600 border-red-500 hover:border-b-[1px] pb-6'
                : 'text-black hover:border-b-[1px] border-black'
            } `}
          >
            <span className='pb-6'>{item.name}</span>
            {item.hasCount && (
              <span className='childHover flex items-center justify-center bg-gray-300 rounded-[8px] px-[6px] w-[29px] h-[18px] hover:text-white'>
                {item.count}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tab
