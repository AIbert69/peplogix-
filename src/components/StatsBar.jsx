import styles from './StatsBar.module.css'

const stats = [
  { value: '99%+', label: 'Minimum Verified Purity' },
  { value: '250+', label: 'Active Peptide SKUs' },
  { value: '50+', label: 'Research Institutions Served' },
  { value: '48hr', label: 'Average Order Fulfillment' },
]

export default function StatsBar() {
  return (
    <section className={styles.section} aria-label="Key statistics">
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
