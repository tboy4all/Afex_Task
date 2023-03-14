import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import { cipher } from '../../utils/utils'

const { decrypt } = cipher

const Footer = () => {
  const [liveMarketData, setLiveMarketData] = useState<any[]>([])

  // console.log('data', decrypt(liveMarketData))

  useEffect(() => {
    fetch('https://comx-sand-api.afex.dev/api/security-price/live')
      .then((response) => response.json())
      .then((data) => {
        setLiveMarketData(data.data)
      })
  }, [])

  // console.log('data', liveMarketData)

  return (
    <footer className='fixed bottom-0 flex items-center  text-black text-[1rem] bg-white mt-2 h-[3.5rem] ml-[4rem] w-full'>
      <div className='bg-black h-full text-white text-[1.2rem] text-center flex items-center justify-center w-[12rem]'>
        Live Market
      </div>

      <Marquee
        pauseOnClick={true}
        pauseOnHover={true}
        speed={10}
        gradient={false}
      >
        {liveMarketData?.map((item) => (
          <div
            key={item.security_code}
            className='w-full flex flex-col justify-between text-sm items-center text-[#000] font-medium'
          >
            {/* @ts-ignore */}
            <span>{decrypt(item.security_code)}</span>

            {/* @ts-ignore */}
            <span className=''>₦{decrypt(item.price)}</span>
          </div>
        ))}
      </Marquee>
    </footer>
  )
}

export default Footer
