import React, { useState, useEffect } from 'react'

import { fetchLiveMarket } from '../store/redux/action/action'
import { useDispatch } from 'react-redux'
import { getData } from '../hooks/useSocket'
import { ReadyState } from 'react-use-websocket'

import ChartCard from './ChartCard'
import Tab from './tab/Tab'
import Table from './table/Table'

import chart1 from '../assets/images/Fill.png'
import chart2 from '../assets/images/fill2.png'
import chart3 from '../assets/images/fill3.png'
import TableTradeLog from './table/TableTradeLog'
import { tableData, tableData1 } from '../data/tableData'

const Main = () => {
  const dispatch = useDispatch()
  // const orderData = getData('wss://comx-sand-api.afexnigeria.com/stream/trades')
  // const clientData = getData(
  //   'wss://comx-sand-api.afexnigeria.com/stream/client-positions?cid=9900153747'
  // )

  // console.log(orderData, clientData)

  // listener for order
  // useEffect(() => {
  //   // if(orderData.readyState === ReadyState.OPEN){
  //   if (orderData.messageHistory.length !== 0) {
  //     console.log(orderData.lastMessage, orderData.messageHistory)
  //   }
  // }, [orderData.readyState])

  // // listener for client
  // useEffect(() => {
  //   if (clientData.messageHistory.length !== 0) {
  //     console.log(clientData.lastMessage, clientData.messageHistory)
  //   }
  // }, [clientData.readyState])

  // // fetch default data
  // useEffect(() => {
  //   fetchLiveMarket(dispatch)
  // }, [])
  return (
    <div>
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
      <section>
        <TableTradeLog />
      </section>
    </div>
  )
}

export default Main
