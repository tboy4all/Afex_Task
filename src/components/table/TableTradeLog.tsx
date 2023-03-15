import React, { useEffect, useState } from 'react'
import styles from './Table.module.css'
// import { tradeLogData } from '../../data/tableData'
import { cipher } from '../../utils/utils'

const { decrypt } = cipher

// console.log(
//   'Decrypted',
//   decrypt('FtgeAiaT84hYXWOesgnW1w==')
// )

const TableTradeLog = () => {
  const [tradeLog, setTradeLog] = useState<any[]>([])

  // console.log('Decryt Data', decrypt(tradeLog))

  useEffect(() => {
    getData('wss://comx-sand-api.afex.dev/stream/trades')
  }, [])

  function getData(endpoint: any) {
    const socket = new WebSocket(endpoint)

    // Listen for the open event
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened')
    })

    // Listen for messages from the server
    socket.addEventListener('message', (event) => {
      try {
        const encryptedObj = JSON.parse(event.data).messages
        const decryptedObj = decrypt(encryptedObj)
        // @ts-ignore
        setTradeLog(decryptedObj)
        // console.log('Decrypted Data', decryptedObj)
      } catch (err) {
        console.error('Invalid JSON received', err)
      }
    })

    // Listen for errors
    socket.addEventListener('error', (event) => {
      console.error('WebSocket error:', event)
    })

    // Listen for the close event
    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed')
    })

    return () => {
      // Clean up the WebSocket connection when the component unmounts
      socket.close()
    }
  }

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })

  tradeLog.map((logData) => console.log('Data', logData))

  // const dates = tradeLog.map(dateString => new Date(dateString))
  return (
    <div className={`${styles.tableContainer} mr-8`}>
      <h3 className={styles.heading}>TradeLog</h3>
      <table className={`${styles.table} ${styles.sticky}`}>
        <thead>
          <tr>
            <th>Security</th>
            <th>Board</th>
            <th>Order Type</th>
            <th>Matched Price</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {tradeLog?.map((item) => (
            <tr key={item.tid}>
              <td>{item.security_code}</td>
              <td>{item.board_type}</td>
              <td>{item.order_type}</td>
              <td>{item.order_price.toFixed(2)}</td>
              <td>{item.units}</td>
              <td>{dateFormatter.format(new Date(item.updated))}</td>
              <td>{timeFormatter.format(new Date(item.updated))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableTradeLog
