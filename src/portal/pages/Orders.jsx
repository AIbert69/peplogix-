import { useState } from 'react'
import { orders as allOrders, orderSummary } from '../data/mockData'
import styles from './Orders.module.css'

const PAGE_SIZE = 12

function pill(status) {
  const map = { Paid:'pillGreen', Unpaid:'pillRed', Pending:'pillAmber', Packed:'pillBlue', Delivered:'pillGreen' }
  return styles[map[status] || 'pillGray']
}

export default function Orders() {
  const [search, setSearch] = useState('')
  const [payFilter, setPayFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = allOrders.filter(o => {
    const q = search.toLowerCase()
    const mQ = !q || o.id.toLowerCase().includes(q) || o.physician.toLowerCase().includes(q) || o.salesRep.toLowerCase().includes(q)
    const mP = payFilter === 'All' || o.paymentStatus === payFilter
    const mS = statusFilter === 'All' || o.orderStatus === statusFilter
    return mQ && mP && mS
  })

  const pages = Math.ceil(filtered.length / PAGE_SIZE)
  const visible = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE)

  return (
    <div className={styles.page}>
      <div>
        <div className={styles.pageTitle}>Orders</div>
        <div className={styles.pageSubtitle}>Showing 50 of {orderSummary.total} orders — demo dataset</div>
      </div>

      <div className={styles.summaryRow}>
        <div className={styles.sumCard}><div className={styles.sumVal}>{orderSummary.total}</div><div className={styles.sumLbl}>Total Orders</div></div>
        <div className={styles.sumCard}><div className={styles.sumVal}>${(orderSummary.revenue/1000).toFixed(0)}K</div><div className={styles.sumLbl}>Total Revenue</div></div>
        <div className={styles.sumCard}><div className={styles.sumVal}>${orderSummary.avgOrder}</div><div className={styles.sumLbl}>Avg Order Value</div></div>
        <div className={styles.sumCard}><div className={styles.sumVal}>${(orderSummary.commission/1000).toFixed(1)}K</div><div className={styles.sumLbl}>Total Commission</div></div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.toolbar}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>
            <input className={styles.searchInput} placeholder="Search orders..." value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} />
          </div>
          <select className={styles.filterSelect} value={payFilter} onChange={e => { setPayFilter(e.target.value); setPage(1) }}>
            <option value="All">Payment: All</option>
            <option>Paid</option><option>Unpaid</option>
          </select>
          <select className={styles.filterSelect} value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1) }}>
            <option value="All">Status: All</option>
            <option>Pending</option><option>Packed</option><option>Delivered</option>
          </select>
          <div className={styles.count}>{filtered.length} orders</div>
        </div>

        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Order ID</th><th>Physician</th><th>Sales Rep</th><th>Date</th>
                <th>Amount</th><th>Products</th><th>Method</th><th>Notes</th>
                <th>Payment</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {visible.map(o => (
                <tr key={o.id}>
                  <td><span className={styles.orderId}>{o.id}</span></td>
                  <td>
                    <div className={styles.physicianBadge}>{o.physician.replace('Dr. ', '')}</div>
                  </td>
                  <td style={{ color:'#6B7280', fontSize:12 }}>{o.salesRep}</td>
                  <td style={{ color:'#6B7280', fontSize:12, whiteSpace:'nowrap' }}>{o.date}</td>
                  <td><span className={styles.amount}>${o.amount.toLocaleString()}</span></td>
                  <td style={{ maxWidth:160, fontSize:12, color:'#374151' }}>{o.products}</td>
                  <td style={{ fontSize:12, color:'#6B7280', whiteSpace:'nowrap' }}>{o.paymentMethod}</td>
                  <td><span className={styles.noteText}>{o.note || '—'}</span></td>
                  <td><span className={`${styles.pill} ${pill(o.paymentStatus)}`}>{o.paymentStatus}</span></td>
                  <td><span className={`${styles.pill} ${pill(o.orderStatus)}`}>{o.orderStatus}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <div className={styles.paginationInfo}>
            Showing {Math.min((page-1)*PAGE_SIZE+1, filtered.length)}–{Math.min(page*PAGE_SIZE, filtered.length)} of {filtered.length}
          </div>
          <div className={styles.paginationBtns}>
            <button className={styles.pageBtn} onClick={() => setPage(p => Math.max(1,p-1))} disabled={page===1}>←</button>
            {Array.from({length: pages}, (_, i) => (
              <button key={i+1} className={`${styles.pageBtn} ${page===i+1?styles.pageBtnActive:''}`} onClick={() => setPage(i+1)}>{i+1}</button>
            ))}
            <button className={styles.pageBtn} onClick={() => setPage(p => Math.min(pages,p+1))} disabled={page===pages}>→</button>
          </div>
        </div>
      </div>
    </div>
  )
}
