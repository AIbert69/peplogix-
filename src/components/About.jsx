import styles from './About.module.css'

const blocks = [
  {
    title: 'Verified Purity Standards',
    body: 'Every compound we supply is tested by accredited third-party laboratories using HPLC, mass spectrometry, and NMR analysis. Certificate of Analysis documents accompany all orders.',
  },
  {
    title: 'Research-First Supply',
    body: 'Our entire catalog is formulated exclusively for in-vitro and preclinical research applications. We supply only to verified research institutions, licensed professionals, and approved laboratories.',
  },
  {
    title: 'Provider Accountability',
    body: 'Access to our full catalog requires completion of our verification process. We maintain strict provider accountability to ensure appropriate use and full regulatory compliance.',
  },
]

export default function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-heading">
      <div className={styles.container}>

        {/* Left: image */}
        <div className={styles.imageCol} aria-hidden="true">
          <div className={styles.imagePlaceholder}>
            <svg viewBox="0 0 440 520" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.labSvg}>
              <rect width="440" height="520" fill="#f9fafb"/>
              {/* Background grid */}
              <defs>
                <pattern id="aboutGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e5e7eb" strokeWidth="0.6"/>
                </pattern>
              </defs>
              <rect width="440" height="520" fill="url(#aboutGrid)"/>

              {/* Lab bench */}
              <rect x="40" y="380" width="360" height="10" rx="2" fill="#d1d5db"/>
              <rect x="40" y="390" width="360" height="60" fill="#f3f4f6"/>

              {/* Large flask */}
              <path d="M160 160 L160 260 C160 260 120 320 120 340 C120 360 136 380 160 380 L280 380 C304 380 320 360 320 340 C320 320 280 260 280 260 L280 160 Z" fill="white" stroke="#d1d5db" strokeWidth="1.5"/>
              <path d="M160 260 C160 260 120 320 120 340 C120 360 136 380 160 380 L280 380 C304 380 320 360 320 340 C320 320 280 260 280 260 Z" fill="rgba(77,191,186,0.12)"/>
              <line x1="160" y1="310" x2="320" y2="310" stroke="rgba(77,191,186,0.3)" strokeWidth="1"/>
              <rect x="175" y="148" width="90" height="18" rx="3" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              <line x1="175" y1="200" x2="265" y2="200" stroke="#e5e7eb" strokeWidth="1"/>
              <line x1="175" y1="230" x2="265" y2="230" stroke="#e5e7eb" strokeWidth="1"/>

              {/* Small beaker left */}
              <path d="M60 290 L60 360 C60 372 70 380 80 380 L110 380 C120 380 130 372 130 360 L130 290 Z" fill="white" stroke="#d1d5db" strokeWidth="1.5"/>
              <path d="M60 345 L130 345" fill="none" stroke="rgba(208,90,58,0.25)" strokeWidth="1"/>
              <rect x="60" y="340" width="70" height="20" rx="0" fill="rgba(208,90,58,0.1)"/>
              <rect x="72" y="280" width="46" height="14" rx="2" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>

              {/* Vials right side */}
              <rect x="340" y="300" width="20" height="80" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1.2"/>
              <rect x="340" y="340" width="20" height="40" rx="0" fill="rgba(77,191,186,0.2)"/>
              <rect x="346" y="292" width="8" height="10" rx="1" fill="#e5e7eb" stroke="#d1d5db"/>

              <rect x="368" y="310" width="20" height="70" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1.2"/>
              <rect x="368" y="352" width="20" height="28" rx="0" fill="rgba(208,90,58,0.15)"/>
              <rect x="374" y="302" width="8" height="10" rx="1" fill="#e5e7eb" stroke="#d1d5db"/>

              {/* Molecule cluster top */}
              <circle cx="80" cy="100" r="16" fill="none" stroke="#4DBFBA" strokeWidth="1.5"/>
              <circle cx="120" cy="65" r="11" fill="none" stroke="#9ca3af" strokeWidth="1.2"/>
              <circle cx="155" cy="95" r="13" fill="none" stroke="#4DBFBA" strokeWidth="1.2"/>
              <circle cx="120" cy="125" r="10" fill="none" stroke="#9ca3af" strokeWidth="1"/>
              <line x1="80" y1="100" x2="120" y2="65" stroke="#4DBFBA" strokeWidth="1" opacity="0.5"/>
              <line x1="120" y1="65" x2="155" y2="95" stroke="#9ca3af" strokeWidth="1" opacity="0.4"/>
              <line x1="155" y1="95" x2="120" y2="125" stroke="#4DBFBA" strokeWidth="1" opacity="0.5"/>
              <line x1="120" y1="125" x2="80" y2="100" stroke="#9ca3af" strokeWidth="1" opacity="0.4"/>

              {/* COA / data label */}
              <rect x="290" y="100" width="110" height="120" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
              <rect x="290" y="100" width="110" height="28" rx="4" fill="#1E2D3D" opacity="0.06"/>
              <rect x="290" y="124" width="110" height="4" fill="#1E2D3D" opacity="0.06"/>
              <rect x="302" y="107" width="60" height="4" rx="1" fill="#1E2D3D" opacity="0.4"/>
              <rect x="302" y="114" width="40" height="3" rx="1" fill="#9ca3af"/>
              <rect x="302" y="136" width="86" height="3" rx="1" fill="#d1d5db"/>
              <rect x="302" y="144" width="70" height="2" rx="1" fill="#d1d5db"/>
              <rect x="302" y="151" width="78" height="2" rx="1" fill="#d1d5db"/>
              <rect x="302" y="158" width="60" height="2" rx="1" fill="#d1d5db"/>
              <rect x="302" y="165" width="72" height="2" rx="1" fill="#d1d5db"/>
              <rect x="302" y="174" width="86" height="3" rx="1" fill="#4DBFBA" opacity="0.5"/>
              <rect x="302" y="182" width="50" height="2" rx="1" fill="#9ca3af"/>
              <circle cx="364" cy="200" r="10" fill="none" stroke="#4DBFBA" strokeWidth="1.5" opacity="0.6"/>
              <path d="M359 200 L363 204 L370 196" stroke="#4DBFBA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
            </svg>
          </div>
          <div className={styles.imageBadge}>
            <span className={styles.imageBadgeText}>Independently Certified</span>
          </div>
        </div>

        {/* Right: text blocks */}
        <div className={styles.textCol}>
          <p className={styles.overline}>Our Approach</p>
          <h2 className={styles.heading} id="about-heading">
            Built on rigor. Trusted by researchers.
          </h2>
          <div className={styles.blocks}>
            {blocks.map((block, i) => (
              <div key={i} className={styles.block}>
                <div className={styles.blockNumber}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.blockContent}>
                  <h3 className={styles.blockTitle}>{block.title}</h3>
                  <p className={styles.blockBody}>{block.body}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#provider-access" className={styles.cta}>
            Learn about provider access
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
