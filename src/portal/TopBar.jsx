import { useLocation } from 'react-router-dom'
import styles from './TopBar.module.css'

const pageTitles = {
  '/portal/dashboard':         ['Portal', 'Dashboard'],
  '/portal/users/sales-reps':  ['Users', 'Sales Reps'],
  '/portal/users/physicians':  ['Users', 'Physicians'],
  '/portal/products':          ['Portal', 'Products'],
  '/portal/orders':            ['Portal', 'Orders'],
  '/portal/payouts':           ['Portal', 'Payouts'],
  '/portal/inventory':         ['Portal', 'Inventory'],
  '/portal/coupons':           ['Portal', 'Discount Coupons'],
  '/portal/chats':             ['Portal', 'Chats'],
  '/portal/assets':            ['Portal', 'Assets Library'],
  '/portal/faq':               ['Portal', 'FAQ'],
  '/portal/settings':          ['Portal', 'Account Settings'],
}

export default function TopBar() {
  const { pathname } = useLocation()
  const [root, current] = pageTitles[pathname] || ['Portal', 'Page']

  return (
    <header className={styles.topbar}>
      <div className={styles.breadcrumb}>
        <span className={styles.crumbRoot}>{root}</span>
        <span className={styles.crumbSep}>/</span>
        <span className={styles.crumbCurrent}>{current}</span>
      </div>

      <div className={styles.search}>
        <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
        </svg>
        <input className={styles.searchInput} type="text" placeholder="Search..." />
      </div>

      <div className={styles.actions}>
        <button className={styles.iconBtn}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
          </svg>
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.divider} />
        <div className={styles.avatar}>AD</div>
      </div>
    </header>
  )
}
