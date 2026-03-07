import { useState } from 'react'
import { physicians as allDoctors } from '../data/mockData'
import styles from './Physicians.module.css'

const PAGE_SIZE = 15

function Toggle({ on, onToggle }) {
  return (
    <label className={styles.toggle}>
      <input type="checkbox" className={styles.toggleInput} checked={on} onChange={onToggle} />
      <span className={styles.toggleSlider} />
    </label>
  )
}

export default function Physicians() {
  const [docs, setDocs] = useState(allDoctors)
  const [search, setSearch] = useState('')
  const [stateFilter, setStateFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [page, setPage] = useState(1)

  const toggleAccess = (id) => setDocs(ds => ds.map(d => d.id === id ? { ...d, active: !d.active } : d))
  const toggleTax = (id) => setDocs(ds => ds.map(d => d.id === id ? { ...d, taxExempt: !d.taxExempt } : d))

  const filtered = docs.filter(d => {
    const q = search.toLowerCase()
    const mQ = !q || d.name.toLowerCase().includes(q) || d.email.toLowerCase().includes(q) || d.salesRep.toLowerCase().includes(q)
    const mSt = stateFilter === 'All' || d.state === stateFilter
    const mAc = statusFilter === 'All' || (statusFilter === 'Active' && d.active) || (statusFilter === 'Inactive' && !d.active)
    return mQ && mSt && mAc
  })

  const pages = Math.ceil(filtered.length / PAGE_SIZE)
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.pageTitle}>Physicians</div>
          <div className={styles.pageSubtitle}>{docs.length} physicians — {docs.filter(d => d.active).length} active</div>
        </div>
        <button className={styles.inviteBtn}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/></svg>
          Invite Physician
        </button>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableToolbar}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>
            <input className={styles.searchInput} placeholder="Search physicians..." value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} />
          </div>
          <select className={styles.filterSelect} value={stateFilter} onChange={e => { setStateFilter(e.target.value); setPage(1) }}>
            <option value="All">All States</option>
            {['FL','NJ','CA','AZ','GA','CO'].map(s => <option key={s}>{s}</option>)}
          </select>
          <select className={styles.filterSelect} value={statusFilter} onChange={e => { setStatusFilter(e.target.value); setPage(1) }}>
            <option value="All">All Status</option>
            <option>Active</option><option>Inactive</option>
          </select>
          <button className={styles.exportBtn}>
            <svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            Export CSV
          </button>
          <div className={styles.tableCount}>{filtered.length} results</div>
        </div>

        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Physician</th><th>Phone</th><th>Sales Rep</th>
                <th>State</th><th>Tax Exempt</th><th>Payment</th><th>Access</th>
              </tr>
            </thead>
            <tbody>
              {visible.map(d => (
                <tr key={d.id}>
                  <td>
                    <div className={styles.docName}>{d.name}</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 2 }}>{d.licenseNo}</div>
                  </td>
                  <td>{d.phone}</td>
                  <td style={{ color: '#6B7280' }}>{d.salesRep}</td>
                  <td><span className={styles.stateBadge}>{d.state}</span></td>
                  <td><Toggle on={d.taxExempt} onToggle={() => toggleTax(d.id)} /></td>
                  <td><span className={styles.payTermBadge}>{d.paymentTerms}</span></td>
                  <td><Toggle on={d.active} onToggle={() => toggleAccess(d.id)} /></td>
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
            {Array.from({length: Math.min(pages, 7)}, (_, i) => {
              const pg = page <= 4 ? i+1 : page - 3 + i
              if (pg < 1 || pg > pages) return null
              return <button key={pg} className={`${styles.pageBtn} ${page===pg?styles.pageBtnActive:''}`} onClick={() => setPage(pg)}>{pg}</button>
            })}
            <button className={styles.pageBtn} onClick={() => setPage(p => Math.min(pages,p+1))} disabled={page===pages}>→</button>
          </div>
        </div>
      </div>
    </div>
  )
}
