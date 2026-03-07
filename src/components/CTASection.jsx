import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <div className={styles.inner}>
          <p className={styles.overline}>Get Started</p>
          <h2 className={styles.heading} id="cta-heading">
            Have questions about verified provider access?
          </h2>
          <p className={styles.body}>
            Our team is available to answer questions about provider verification,
            catalog availability, bulk ordering, or custom research requirements.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              Contact Our Team
            </a>
            <a href="#catalog" className={styles.btnOutline}>
              View Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
