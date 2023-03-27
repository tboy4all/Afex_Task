import ChartCard from './ChartCard'
import Tab from './tab/Tab'
import Table from './table/Table'

import chart1 from '../assets/images/Fill.png'
import chart2 from '../assets/images/fill2.png'
import chart3 from '../assets/images/fill3.png'
import TableTradeLog from './table/TableTradeLog'
import { tableData, tableData1 } from '../data/tableData'

const Main = () => {
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
          bgStle={{ backgroundColor: '#F0FAF0', color: 'green' }}
          bg='Increment'
          month='Monitored Monthly'
          img={chart3}
        />
      </section>
      {/* Tab Section */}
      <Tab />
      {/* Table Two Column Section */}
      <section className='grid grid-cols-2 gap-6 mr-8'>
        <Table sell='Buy Board' style={{ color: 'green' }} data={tableData} />
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
