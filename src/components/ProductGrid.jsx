import styles from './ProductGrid.module.css'

const VialIcon = ({ color = '#4DBFBA' }) => (
  <svg width="56" height="80" viewBox="0 0 56 80" fill="none" aria-hidden="true">
    <rect x="20" y="2" width="16" height="10" rx="2" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
    <rect x="14" y="10" width="28" height="56" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1.2"/>
    <rect x="14" y="42" width="28" height="24" rx="0" fill={color} opacity="0.18"/>
    <rect x="14" y="42" width="28" height="2.5" fill={color} opacity="0.5"/>
    <rect x="14" y="64" width="28" height="2" rx="0" fill={color} opacity="0.4"/>
    <rect x="20" y="18" width="16" height="16" rx="2" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
    <rect x="23" y="21" width="8" height="2" rx="1" fill="#9ca3af"/>
    <rect x="23" y="26" width="10" height="1.5" rx="1" fill="#d1d5db"/>
    <rect x="23" y="30" width="7" height="1.5" rx="1" fill={color} opacity="0.7"/>
  </svg>
)

const products = [
  {
    name: 'Semaglutide',
    tag: 'GLP-1 Agonist',
    purity: '99.2%',
    spec: '5mg / vial',
    vialColor: '#4DBFBA',
    badge: 'Best Seller',
  },
  {
    name: 'BPC-157',
    tag: 'Healing & Repair',
    purity: '99.5%',
    spec: '5mg / vial',
    vialColor: '#4DBFBA',
    badge: null,
  },
  {
    name: 'Ipamorelin',
    tag: 'GH Peptide',
    purity: '98.8%',
    spec: '2mg / vial',
    vialColor: '#9ca3af',
    badge: null,
  },
  {
    name: 'Epithalon',
    tag: 'Thymic Peptide',
    purity: '99.1%',
    spec: '10mg / vial',
    vialColor: '#4DBFBA',
    badge: 'New',
  },
  {
    name: 'Bremelanotide',
    tag: 'Melanocortin',
    purity: '98.9%',
    spec: '10mg / vial',
    vialColor: '#D05A3A',
    badge: null,
  },
  {
    name: 'Selank',
    tag: 'Cognitive & Neural',
    purity: '99.3%',
    spec: '5mg / vial',
    vialColor: '#4DBFBA',
    badge: null,
  },
]

export default function ProductGrid() {
  return (
    <section className={styles.section} id="new-products" aria-labelledby="products-heading">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <p className={styles.overline}>Featured Compounds</p>
          <h2 className={styles.heading} id="products-heading">
            Research-grade peptides
          </h2>
          <p className={styles.subtext}>
            All compounds available exclusively to verified research providers.
            COA documentation included with every order.
          </p>
        </header>

        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.name} className={styles.card}>
              {product.badge && (
                <span className={`${styles.badge} ${product.badge === 'New' ? styles.badgeNew : styles.badgeSeller}`}>
                  {product.badge}
                </span>
              )}

              <div className={styles.purityRow}>
                <span className={styles.purityLabel}>Purity</span>
                <span className={styles.purityValue}>{product.purity}</span>
              </div>

              <div className={styles.vialWrap}>
                <VialIcon color={product.vialColor} />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.tag}>{product.tag}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.spec}>{product.spec}</p>
              </div>

              <a href="#provider-access" className={styles.cardCta}>
                Request Access
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="#catalog" className={styles.viewAll}>
            View full catalog
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
