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
        {tab.map((link) => (
          <div
            onClick={() => handleTabClick(link.name)}
            key={link.name}
            className={`CustomOver transition-all duration-300 flex gap-3 pb-6  ${
              activeTab === link.name
                ? 'text-red-600 border-red-600 border-b-2 pb-6'
                : 'text-black hover:border-b-[1px] border-black'
            } `}
          >
            <span className='pb-6'>{link.name}</span>
            {link.hasCount && (
              <span className='childHover flex items-center justify-center bg-gray-300 rounded-[8px] px-[6px] w-[29px] h-[18px] hover:text-white'>
                {link.count}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tab
