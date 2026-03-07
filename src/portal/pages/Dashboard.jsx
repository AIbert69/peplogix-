import { Link } from 'react-router-dom'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip as PieTip
} from 'recharts'
import { monthlyOrders, topProducts, orders } from '../data/mockData'
import styles from './Dashboard.module.css'

const stats = [
  { label:'Total Users',  value:'391', trend:'+12%', up:true,  color:'#EFF6FF', iconColor:'#1D4ED8',
    icon:<svg viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg> },
  { label:'Sales Reps',   value:'40',  trend:'+3',   up:true,  color:'#F0FDF4', iconColor:'#15803D',
    icon:<svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg> },
  { label:'Physicians',   value:'343', trend:'+28',  up:true,  color:'#FFF7ED', iconColor:'#C2410C',
    icon:<svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg> },
  { label:'Admins',       value:'8',   trend:'–',    up:false, color:'#F5F3FF', iconColor:'#6D28D9',
    icon:<svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"/></svg> },
]

const recentOrders = orders.slice(0, 6)

function statusPill(status) {
  const map = { Paid:'pillGreen', Unpaid:'pillRed', Pending:'pillAmber', Packed:'pillBlue', Delivered:'pillGreen', Partial:'pillAmber' }
  return styles[map[status] || 'pillGray']
}

export default function Dashboard() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <div className={styles.pageTitle}>Dashboard</div>
        </div>
        <div className={styles.pageDate}>March 7, 2026</div>
      </div>

      {/* Stat cards */}
      <div className={styles.statsGrid}>
        {stats.map(s => (
          <div key={s.label} className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon} style={{ backgroundColor: s.color, color: s.iconColor }}>
                {s.icon}
              </div>
              <span className={`${styles.statTrend} ${s.up ? styles.trendUp : styles.trendNeutral}`}>
                {s.trend}
              </span>
            </div>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className={styles.chartsRow}>
        {/* Bar chart */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <div className={styles.chartTitle}>Monthly Orders</div>
              <div className={styles.chartSubtitle}>Jan–Dec 2025</div>
            </div>
            <div className={styles.chartTotal}>
              <span className={styles.chartTotalValue}>269</span>
              <span className={styles.chartTotalLabel}>total</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyOrders} barSize={18} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 4, border: '1px solid #E5E7EB', boxShadow: 'none' }}
                cursor={{ fill: 'rgba(77,191,186,0.06)' }}
              />
              <Bar dataKey="orders" fill="#4DBFBA" radius={[3, 3, 0, 0]} name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donut chart */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <div className={styles.chartTitle}>Top Selling Products</div>
              <div className={styles.chartSubtitle}>By order volume</div>
            </div>
          </div>
          <div className={styles.donutWrap}>
            <div className={styles.donutChart}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={topProducts} cx="50%" cy="50%" innerRadius={58} outerRadius={88}
                    dataKey="value" paddingAngle={2} startAngle={90} endAngle={-270}>
                    {topProducts.map((entry, i) => (
                      <Cell key={i} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <PieTip
                    contentStyle={{ fontSize: 12, borderRadius: 4, border: '1px solid #E5E7EB', boxShadow: 'none' }}
                    formatter={(v, n, p) => [`${v} orders`, p.payload.name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.legend}>
              {topProducts.map(p => (
                <div key={p.name} className={styles.legendItem}>
                  <div className={styles.legendDot} style={{ backgroundColor: p.color }} />
                  <span className={styles.legendName}>{p.name}</span>
                  <span className={styles.legendValue}>{p.value}</span>
                  <span className={styles.legendPct}>{p.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent orders */}
      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div className={styles.tableTitle}>Recent Orders</div>
          <Link to="/portal/orders" className={styles.viewAll}>View all 269 orders</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th><th>Physician</th><th>Sales Rep</th>
              <th>Amount</th><th>Method</th><th>Payment</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(o => (
              <tr key={o.id}>
                <td style={{ fontWeight: 600, color: '#1E2D3D' }}>{o.id}</td>
                <td>{o.physician}</td>
                <td style={{ color: '#6B7280' }}>{o.salesRep}</td>
                <td style={{ fontWeight: 600 }}>${o.amount.toLocaleString()}</td>
                <td style={{ color: '#6B7280' }}>{o.paymentMethod}</td>
                <td><span className={`${styles.pill} ${statusPill(o.paymentStatus)}`}>{o.paymentStatus}</span></td>
                <td><span className={`${styles.pill} ${statusPill(o.orderStatus)}`}>{o.orderStatus}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
