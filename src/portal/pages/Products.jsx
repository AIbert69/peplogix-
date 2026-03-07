import { useState } from 'react'
import { products as productData } from '../data/mockData'
import styles from './Products.module.css'

const TABS = ['Peptides', 'Peptide Strips', 'Exosomes', 'Supplies', 'Pharmacy']

function VialIcon({ size = 48 }) {
  return (
    <svg className={styles.vialSvg} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="18" y="4" width="12" height="4" rx="2" fill="currentColor" opacity="0.4"/>
      <path d="M16 8h16v6l8 22a4 4 0 01-3.76 5.33H11.76A4 4 0 018 36.33L16 14V8z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25"/>
      <path d="M16 26h16" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <rect x="16" y="26" width="16" height="14" rx="0" fill="currentColor" opacity="0.12"/>
      <text x="24" y="38" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.5" fontFamily="monospace">Rx</text>
    </svg>
  )
}

function Toggle({ on, onToggle }) {
  return (
    <label className={styles.toggle}>
      <input type="checkbox" className={styles.toggleInput} checked={on} onChange={onToggle} />
      <span className={styles.toggleSlider} />
    </label>
  )
}

export default function Products() {
  const [tab, setTab] = useState('Peptides')
  const [viewMode, setViewMode] = useState('grid')
  const [items, setItems] = useState(productData)

  const toggleComingSoon = (tab, id) => {
    setItems(prev => ({
      ...prev,
      [tab]: prev[tab].map(p => p.id === id ? { ...p, comingSoon: !p.comingSoon } : p)
    }))
  }

  const current = items[tab] || []

  return (
    <div className={styles.page}>
      <div>
        <div className={styles.pageTitle}>Products</div>
        <div className={styles.pageSubtitle}>
          {Object.values(productData).flat().length} products across {TABS.length} categories
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.tabs}>
          {TABS.map(t => (
            <button key={t} className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className={styles.viewToggle}>
          <button className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.viewBtnActive : ''}`} onClick={() => setViewMode('grid')}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          </button>
          <button className={`${styles.viewBtn} ${viewMode === 'list' ? styles.viewBtnActive : ''}`} onClick={() => setViewMode('list')}>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/></svg>
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className={styles.grid}>
          {current.map(p => (
            <div key={p.id} className={styles.card}>
              <div className={styles.cardImage}>
                <VialIcon size={52} />
                {p.comingSoon && (
                  <div className={styles.comingSoonOverlay}>
                    <span className={styles.comingSoonText}>Coming Soon</span>
                  </div>
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.catTag}>{p.category}</div>
                <div className={styles.cardName}>{p.name}</div>
                <div className={styles.cardFooter}>
                  <div>
                    <div className={styles.priceLabel}>CC Base Price</div>
                    <div className={styles.price}>${p.price}</div>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4 }}>
                    <Toggle on={!p.comingSoon} onToggle={() => toggleComingSoon(tab, p.id)} />
                    <span className={styles.toggleLabel}>{p.comingSoon ? 'Hidden' : 'Active'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.list}>
          {current.map(p => (
            <div key={p.id} className={styles.listItem}>
              <div className={styles.listThumb}><VialIcon size={28} /></div>
              <div className={styles.listInfo}>
                <div className={styles.listName}>{p.name}</div>
                <div className={styles.listCat}>{p.category} {p.comingSoon ? '· Coming Soon' : ''}</div>
              </div>
              <div className={styles.listOrders}>{p.orders > 0 ? `${p.orders} orders` : '—'}</div>
              <div className={styles.listPrice}>${p.price}</div>
              <Toggle on={!p.comingSoon} onToggle={() => toggleComingSoon(tab, p.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
