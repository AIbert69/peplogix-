import { useState } from 'react'
import { salesReps as allReps } from '../data/mockData'
import styles from './SalesReps.module.css'

const PAGE_SIZE = 10

function Toggle({ on, onToggle }) {
  return (
    <label className={styles.toggle}>
      <input type="checkbox" className={styles.toggleInput} checked={on} onChange={onToggle} />
      <span className={styles.toggleSlider} />
    </label>
  )
}

function InviteModal({ onClose }) {
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', phone:'', commission:12, paidBy:'NuLife' })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>Invite Sales Rep</div>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>First Name</label>
              <input className={styles.formInput} placeholder="Michael" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name</label>
              <input className={styles.formInput} placeholder="Thompson" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input className={styles.formInput} type="email" placeholder="rep@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input className={styles.formInput} placeholder="(305) 555-0100" value={form.phone} onChange={e => set('phone', e.target.value)} />
          </div>
          <div className={styles.sliderWrap}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>Commission %</span>
              <span className={styles.sliderValue}>{form.commission}%</span>
            </div>
            <input type="range" className={styles.slider} min={0} max={100} value={form.commission} onChange={e => set('commission', +e.target.value)} />
          </div>
          <div className={styles.formGroup}>
            <label>Paid By</label>
            <select className={styles.formSelect} value={form.paidBy} onChange={e => set('paidBy', e.target.value)}>
              <option>NuLife</option>
              <option>Sales Rep</option>
            </select>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.btnCancel} onClick={onClose}>Cancel</button>
          <button className={styles.btnSend} onClick={onClose}>Send Invite</button>
        </div>
      </div>
    </div>
  )
}

export default function SalesReps() {
  const [reps, setReps] = useState(allReps)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)

  const toggleAccess = (id) => setReps(rs => rs.map(r => r.id === id ? { ...r, active: !r.active } : r))

  const filtered = reps.filter(r => {
    const q = search.toLowerCase()
    const matchQ = !q || r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q)
    const matchF = filter === 'All' || (filter === 'Active' && r.active) || (filter === 'Inactive' && !r.active)
    return matchQ && matchF
  })

  const pages = Math.ceil(filtered.length / PAGE_SIZE)
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const active = reps.filter(r => r.active).length
  const totalRevenue = reps.reduce((s, r) => s + r.revenue, 0)
  const totalPhysicians = reps.reduce((s, r) => s + r.physicians, 0)
  const avgComm = Math.round(reps.reduce((s, r) => s + r.commission, 0) / reps.length)

  return (
    <div className={styles.page}>
      {showModal && <InviteModal onClose={() => setShowModal(false)} />}

      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.pageTitle}>Sales Reps</div>
          <div className={styles.pageSubtitle}>{reps.length} representatives — {active} active</div>
        </div>
        <button className={styles.inviteBtn} onClick={() => setShowModal(true)}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/></svg>
          Invite Sales Rep
        </button>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statCard}><div className={styles.statVal}>{reps.length}</div><div className={styles.statLbl}>Total Reps</div></div>
        <div className={styles.statCard}><div className={styles.statVal}>{active}</div><div className={styles.statLbl}>Active</div></div>
        <div className={styles.statCard}><div className={styles.statVal}>{totalPhysicians}</div><div className={styles.statLbl}>Physicians Covered</div></div>
        <div className={styles.statCard}><div className={styles.statVal}>${(totalRevenue/1000).toFixed(0)}K</div><div className={styles.statLbl}>Total Revenue Influenced</div></div>
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableToolbar}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>
            <input className={styles.searchInput} placeholder="Search by name or email..." value={search} onChange={e => { setSearch(e.target.value); setPage(1) }} />
          </div>
          <select className={styles.filterSelect} value={filter} onChange={e => { setFilter(e.target.value); setPage(1) }}>
            <option>All</option><option>Active</option><option>Inactive</option>
          </select>
          <div className={styles.tableCount}>{filtered.length} reps</div>
        </div>

        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Name</th><th>Phone</th><th>Email</th>
                <th>Commission</th><th>Paid By</th><th>Assigned To</th>
                <th>Physicians</th><th>Access</th>
              </tr>
            </thead>
            <tbody>
              {visible.map(r => (
                <tr key={r.id}>
                  <td className={styles.name}>{r.name}</td>
                  <td>{r.phone}</td>
                  <td className={styles.email}>{r.email}</td>
                  <td><span className={styles.commBadge}>{r.commission}%</span></td>
                  <td>
                    <span className={r.paidBy === 'NuLife' ? styles.paidBadge : styles.paidBadgeSR}>
                      {r.paidBy}
                    </span>
                  </td>
                  <td style={{ color: '#6B7280' }}>{r.assignedTo}</td>
                  <td style={{ color: '#6B7280' }}>{r.physicians}</td>
                  <td><Toggle on={r.active} onToggle={() => toggleAccess(r.id)} /></td>
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
