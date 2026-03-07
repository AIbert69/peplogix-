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

        {/* Right: image / visual placeholder */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.imagePlaceholder}>
            <svg
              className={styles.labIllustration}
              viewBox="0 0 480 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Background subtle grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.8"/>
                </pattern>
              </defs>
              <rect width="480" height="400" fill="#f9fafb"/>
              <rect width="480" height="400" fill="url(#grid)"/>

              {/* Vial 1 - large */}
              <rect x="80" y="120" width="54" height="180" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5"/>
              <rect x="80" y="200" width="54" height="100" rx="0" fill="rgba(77,191,186,0.18)"/>
              <rect x="80" y="200" width="54" height="4" fill="rgba(77,191,186,0.5)"/>
              <rect x="92" y="110" width="30" height="16" rx="2" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              <rect x="80" y="296" width="54" height="4" rx="0" fill="#4DBFBA" opacity="0.6"/>
              {/* Vial 1 label */}
              <rect x="86" y="145" width="42" height="44" rx="2" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1"/>
              <rect x="90" y="150" width="22" height="3" rx="1" fill="#9ca3af"/>
              <rect x="90" y="157" width="34" height="2" rx="1" fill="#d1d5db"/>
              <rect x="90" y="163" width="28" height="2" rx="1" fill="#d1d5db"/>
              <rect x="90" y="169" width="32" height="2" rx="1" fill="#d1d5db"/>
              <rect x="90" y="176" width="20" height="3" rx="1" fill="#4DBFBA" opacity="0.7"/>

              {/* Vial 2 - medium */}
              <rect x="170" y="150" width="44" height="150" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5"/>
              <rect x="170" y="230" width="44" height="70" rx="0" fill="rgba(208,90,58,0.12)"/>
              <rect x="170" y="230" width="44" height="3" fill="rgba(208,90,58,0.4)"/>
              <rect x="180" y="141" width="24" height="14" rx="2" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              <rect x="170" y="296" width="44" height="4" rx="0" fill="#D05A3A" opacity="0.5"/>
              {/* Vial 2 label */}
              <rect x="176" y="172" width="32" height="40" rx="2" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1"/>
              <rect x="180" y="177" width="16" height="3" rx="1" fill="#9ca3af"/>
              <rect x="180" y="184" width="24" height="2" rx="1" fill="#d1d5db"/>
              <rect x="180" y="190" width="20" height="2" rx="1" fill="#d1d5db"/>
              <rect x="180" y="196" width="22" height="2" rx="1" fill="#d1d5db"/>
              <rect x="180" y="203" width="14" height="2" rx="1" fill="#D05A3A" opacity="0.6"/>

              {/* Vial 3 - small */}
              <rect x="250" y="170" width="38" height="130" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5"/>
              <rect x="250" y="240" width="38" height="60" rx="0" fill="rgba(77,191,186,0.12)"/>
              <rect x="250" y="240" width="38" height="3" fill="rgba(77,191,186,0.4)"/>
              <rect x="259" y="162" width="20" height="12" rx="2" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              <rect x="250" y="296" width="38" height="4" rx="0" fill="#4DBFBA" opacity="0.5"/>
              {/* Vial 3 label */}
              <rect x="256" y="188" width="26" height="36" rx="2" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1"/>
              <rect x="259" y="193" width="14" height="3" rx="1" fill="#9ca3af"/>
              <rect x="259" y="200" width="18" height="2" rx="1" fill="#d1d5db"/>
              <rect x="259" y="206" width="14" height="2" rx="1" fill="#d1d5db"/>
              <rect x="259" y="212" width="16" height="2" rx="1" fill="#d1d5db"/>
              <rect x="259" y="218" width="10" height="2" rx="1" fill="#4DBFBA" opacity="0.6"/>

              {/* Lab bench surface */}
              <rect x="40" y="300" width="360" height="8" rx="2" fill="#e5e7eb"/>
              <rect x="40" y="308" width="360" height="40" rx="0" fill="#f3f4f6"/>

              {/* Molecular structure top right */}
              <circle cx="360" cy="100" r="12" fill="none" stroke="#4DBFBA" strokeWidth="2"/>
              <circle cx="400" cy="72" r="9" fill="none" stroke="#4DBFBA" strokeWidth="2"/>
              <circle cx="430" cy="110" r="11" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
              <circle cx="390" cy="138" r="8" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
              <circle cx="350" cy="145" r="7" fill="none" stroke="#4DBFBA" strokeWidth="1.5"/>
              <line x1="360" y1="100" x2="400" y2="72" stroke="#4DBFBA" strokeWidth="1.5" opacity="0.5"/>
              <line x1="400" y1="72" x2="430" y2="110" stroke="#9ca3af" strokeWidth="1" opacity="0.4"/>
              <line x1="430" y1="110" x2="390" y2="138" stroke="#9ca3af" strokeWidth="1" opacity="0.4"/>
              <line x1="390" y1="138" x2="350" y2="145" stroke="#4DBFBA" strokeWidth="1.5" opacity="0.5"/>
              <line x1="350" y1="145" x2="360" y2="100" stroke="#4DBFBA" strokeWidth="1.5" opacity="0.5"/>

              {/* COA badge */}
              <rect x="320" y="200" width="118" height="76" rx="4" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5"/>
              <rect x="320" y="200" width="118" height="22" rx="4" fill="#4DBFBA" opacity="0.15"/>
              <rect x="320" y="218" width="118" height="4" rx="0" fill="#4DBFBA" opacity="0.15"/>
              <rect x="330" y="206" width="60" height="4" rx="1" fill="#1E2D3D" opacity="0.5"/>
              <rect x="330" y="232" width="80" height="3" rx="1" fill="#9ca3af"/>
              <rect x="330" y="240" width="64" height="2" rx="1" fill="#d1d5db"/>
              <rect x="330" y="247" width="72" height="2" rx="1" fill="#d1d5db"/>
              <rect x="330" y="254" width="56" height="2" rx="1" fill="#d1d5db"/>
              <rect x="330" y="261" width="66" height="2" rx="1" fill="#d1d5db"/>
              <circle cx="422" cy="236" r="14" fill="none" stroke="#4DBFBA" strokeWidth="1.5" opacity="0.5"/>
              <path d="M415 236 L420 242 L430 228" stroke="#4DBFBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            </svg>
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
