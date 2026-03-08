import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-heading">
      <div className={styles.container}>

        {/* Left: text content */}
        <div className={styles.content}>
          <p className={styles.overline}>Research-Grade Peptides</p>
          <h1 className={styles.heading} id="hero-heading">
            Advancing research precision with trusted peptide solutions
          </h1>
          <p className={styles.subtext}>
            Verified-purity compounds formulated for research professionals. Every
            batch independently certified — ready for your protocol.
          </p>
          <div className={styles.actions}>
            <a href="#provider-access" className={styles.btnPrimary}>
              Request Provider Access
            </a>
            <a href="#catalog" className={styles.btnOutline}>
              View Catalog
            </a>
          </div>
          <p className={styles.disclaimer}>
            For research use only. Not intended for human use.
          </p>
        </div>

        {/* Right: product image */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.imagePlaceholder}>
            <img
              src="/Image/product-group.png"
              alt="Peplogix research peptide products"
              className={styles.labIllustration}
            />
          </div>

          {/* Floating badges */}
          <div className={styles.badge1}>
            <span className={styles.badgeValue}>99.2%</span>
            <span className={styles.badgeLabel}>Verified Purity</span>
          </div>
          <div className={styles.badge2}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeLabelAlt}>COA Included</span>
          </div>
        </div>

      </div>
    </section>
  )
}
