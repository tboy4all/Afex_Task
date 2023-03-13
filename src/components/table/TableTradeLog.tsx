import React from 'react'
import styles from './Table.module.css'
import { tradeLogData } from '../../data/tableData'

const TableTradeLog = () => {
  return (
    <div className={`${styles.tableContainer} mr-8`}>
      <h3 className={styles.heading}>TradeLog</h3>
      <table className={`${styles.table} ${styles.sticky}`}>
        <thead>
          <tr className=''>
            <th className=''>Security</th>
            <th>Board</th>
            <th>Order Type</th>
            <th>Matched Price</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {tradeLogData.map((item, index) => (
            <tr key={index}>
              <td>{item.Security}</td>
              <td>{item.Board}</td>
              <td>{item['Order Type']}</td>
              <td>{item['Matched Price']}</td>
              <td>{item.Quantity}</td>
              <td>{item.Date}</td>
              <td>{item.Time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableTradeLog
