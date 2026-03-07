import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Sidebar.module.css'

const BASE = '/portal'

function Icon({ name }) {
  const icons = {
    dashboard: <svg viewBox="0 0 20 20" fill="currentColor"><rect x="2" y="2" width="7" height="7" rx="1.5"/><rect x="11" y="2" width="7" height="7" rx="1.5"/><rect x="2" y="11" width="7" height="7" rx="1.5"/><rect x="11" y="11" width="7" height="7" rx="1.5"/></svg>,
    users: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>,
    products: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/></svg>,
    orders: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>,
    payouts: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/></svg>,
    box: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" clipRule="evenodd"/></svg>,
    tag: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>,
    chat: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/></svg>,
    folder: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/></svg>,
    question: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>,
    settings: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>,
    rep: <svg viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM3.882 15.854A7.002 7.002 0 016 9.07V7.5a.5.5 0 011 0V9h7V7.5a.5.5 0 011 0v1.57a7.002 7.002 0 012.118 6.784.75.75 0 01-.733.646H4.615a.75.75 0 01-.733-.646z"/></svg>,
    doctor: <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>,
  }
  return <span className={styles.icon}>{icons[name] || icons.dashboard}</span>
}

export default function Sidebar() {
  const [usersOpen, setUsersOpen] = useState(true)
  const { pathname } = useLocation()

  const isActive = (path) => pathname === path || pathname.startsWith(path + '/')
  const navCls = (path) => `${styles.navItem} ${isActive(path) ? styles.navItemActive : ''}`
  const subCls = (path) => `${styles.subItem} ${pathname === path ? styles.subItemActive : ''}`

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoArea}>
        <Link to="/" className={styles.logoLink}>
          <img src="/peplogix-logo.svg" alt="Peplogix" className={styles.logoImg} />
          <span className={styles.portalBadge}>Portal</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <NavLink to={`${BASE}/dashboard`} className={navCls(`${BASE}/dashboard`)}>
          <Icon name="dashboard" /> Dashboard
        </NavLink>

        <button className={navCls(`${BASE}/users`)} onClick={() => setUsersOpen(o => !o)}>
          <Icon name="users" />
          Users
          <svg className={`${styles.chevron} ${usersOpen ? styles.chevronOpen : ''}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </button>

        {usersOpen && (
          <div className={styles.subNav}>
            <NavLink to={`${BASE}/users/sales-reps`} className={subCls(`${BASE}/users/sales-reps`)}>
              <Icon name="rep" /> Sales Reps
            </NavLink>
            <NavLink to={`${BASE}/users/physicians`} className={subCls(`${BASE}/users/physicians`)}>
              <Icon name="doctor" /> Physicians
            </NavLink>
          </div>
        )}

        <NavLink to={`${BASE}/products`} className={navCls(`${BASE}/products`)}>
          <Icon name="products" /> Products
        </NavLink>
        <NavLink to={`${BASE}/orders`} className={navCls(`${BASE}/orders`)}>
          <Icon name="orders" /> Orders
        </NavLink>
        <NavLink to={`${BASE}/payouts`} className={navCls(`${BASE}/payouts`)}>
          <Icon name="payouts" /> Payouts
        </NavLink>

        <div className={styles.divider} />
        <div className={styles.sectionLabel}>Management</div>

        <NavLink to={`${BASE}/inventory`} className={navCls(`${BASE}/inventory`)}>
          <Icon name="box" /> Inventory
        </NavLink>
        <NavLink to={`${BASE}/coupons`} className={navCls(`${BASE}/coupons`)}>
          <Icon name="tag" /> Discount Coupons
        </NavLink>
        <NavLink to={`${BASE}/chats`} className={navCls(`${BASE}/chats`)}>
          <Icon name="chat" /> Chats
        </NavLink>
        <NavLink to={`${BASE}/assets`} className={navCls(`${BASE}/assets`)}>
          <Icon name="folder" /> Assets Library
        </NavLink>
        <NavLink to={`${BASE}/faq`} className={navCls(`${BASE}/faq`)}>
          <Icon name="question" /> FAQ
        </NavLink>
        <NavLink to={`${BASE}/settings`} className={navCls(`${BASE}/settings`)}>
          <Icon name="settings" /> Account Settings
        </NavLink>
      </nav>

      <div className={styles.bottomArea}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>AD</div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>Admin User</div>
            <div className={styles.userRole}>Super Admin</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
