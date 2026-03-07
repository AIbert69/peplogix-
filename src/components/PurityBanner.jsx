import styles from './PurityBanner.module.css'

export default function PurityBanner() {
  return (
    <section className={styles.section} aria-labelledby="purity-heading">
      <div className={styles.container}>
        <div className={styles.labLogos} aria-hidden="true">
          <div className={styles.labBadge}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Janoshik Analytical
          </div>
          <div className={styles.labDivider} aria-hidden="true" />
          <div className={styles.labBadge}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Shimadzu HPLC
          </div>
        </div>

        <h2 className={styles.heading} id="purity-heading">
          Every batch independently certified
        </h2>

        <p className={styles.body}>
          All Peplogix peptides undergo rigorous third-party analysis through Janoshik Analytical
          and Shimadzu HPLC instrumentation. Our multi-method verification protocol — including
          HPLC purity testing, mass spectrometry confirmation, and residual solvent analysis —
          ensures every compound meets or exceeds stated specifications. Certificate of Analysis
          available on request for all orders.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>HPLC</span>
            <span className={styles.statLabel}>Purity Verification</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>MS/MS</span>
            <span className={styles.statLabel}>Identity Confirmation</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>COA</span>
            <span className={styles.statLabel}>With Every Order</span>
          </div>
        </div>
      </div>
    </section>
  )
}
