import { payouts, orderSummary } from '../data/mockData'
import styles from './Payouts.module.css'

function pill(status) {
  const map = { Paid:'pillGreen', Partial:'pillAmber', Unpaid:'pillRed' }
  return styles[map[status] || 'pillGray']
}

export default function Payouts() {
  const totalEarned = payouts.reduce((s, p) => s + p.earned, 0)
  const totalPaid = payouts.reduce((s, p) => s + p.paid, 0)
  const totalOut = payouts.reduce((s, p) => s + p.outstanding, 0)

  return (
    <div className={styles.page}>
      <div>
        <div className={styles.pageTitle}>Payouts</div>
        <div className={styles.pageSubtitle}>Commission ledger — {payouts.length} active representatives</div>
      </div>

      <div className={styles.summaryRow}>
        <div className={styles.sumCard}><div className={styles.sumVal}>${(totalEarned/1000).toFixed(1)}K</div><div className={styles.sumLbl}>Total Commission Earned</div></div>
        <div className={styles.sumCard}><div className={`${styles.sumVal} ${styles.sumValGreen}`}>${(totalPaid/1000).toFixed(1)}K</div><div className={styles.sumLbl}>Paid to Date</div></div>
        <div className={styles.sumCard}><div className={`${styles.sumVal} ${styles.sumValAmber}`}>${(totalOut/1000).toFixed(1)}K</div><div className={styles.sumLbl}>Outstanding</div></div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div className={styles.tableTitle}>Commission by Sales Rep</div>
          <button className={styles.exportBtn}>
            <svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            Export CSV
          </button>
        </div>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Sales Rep</th><th>Rate</th><th>Orders</th>
                <th>Earned</th><th>Paid</th><th>Outstanding</th>
                <th>Progress</th><th>Status</th><th></th>
              </tr>
            </thead>
            <tbody>
              {payouts.map(p => {
                const pct = Math.round((p.paid / p.earned) * 100)
                return (
                  <tr key={p.repId}>
                    <td className={styles.name}>{p.name}</td>
                    <td><span className={styles.commBadge}>{p.commission}%</span></td>
                    <td style={{ color:'#6B7280' }}>{p.orders}</td>
                    <td><span className={styles.amtEarned}>${p.earned.toLocaleString()}</span></td>
                    <td><span className={styles.amtPaid}>${p.paid.toLocaleString()}</span></td>
                    <td><span className={styles.amtOut}>${p.outstanding.toLocaleString()}</span></td>
                    <td>
                      <div className={styles.progress}>
                        <div className={styles.progressBar} style={{ width: `${pct}%` }} />
                      </div>
                    </td>
                    <td><span className={`${styles.pill} ${pill(p.status)}`}>{p.status}</span></td>
                    <td>
                      {p.status !== 'Paid' && (
                        <button className={styles.payBtn}>Mark Paid</button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
