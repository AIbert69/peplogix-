import styles from './Shipping.module.css'

const features = [
  {
    title: 'Cold Chain Compliance',
    description:
      'Temperature-controlled packaging maintains compound integrity from dispatch to delivery. Insulated containers with validated cold packs for sensitive peptide compounds.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 12H26" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 16H14M18 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 20V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="1" fill="currentColor"/>
        <path d="M10 8V6M22 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Discreet Delivery',
    description:
      'No external product identification on packaging. Plain, unmarked outer packaging for all shipments. Contents listed only on internal documentation.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="10" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 14L16 20L27 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 10L16 6L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 16H20M12 19H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Expedited Processing',
    description:
      '48-hour standard order fulfillment for verified provider accounts. Priority processing available for institutional standing orders and laboratory supply agreements.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 10V16L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 6L4 4M25 6L28 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Tracked Worldwide',
    description:
      'Full end-to-end logistics tracking on all domestic and international shipments. Real-time carrier tracking with automated delivery notifications to verified account holders.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="13" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 8V4M16 22C16 22 7 16 7 13C7 8 11 5 16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0"/>
        <path d="M10.5 17.5C8 15.5 7 13 7 13C7 8.5 11 5 16 5C21 5 25 8.5 25 13C25 13 24 15.5 21.5 17.5L16 26L10.5 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="16" cy="13" r="2.5" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
]

export default function Shipping() {
  return (
    <section className={styles.section} aria-labelledby="shipping-heading">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <p className={styles.overline}>Fulfillment & Logistics</p>
          <h2 className={styles.heading} id="shipping-heading">
            Reliable shipping for research compounds
          </h2>
          <p className={styles.subtext}>
            Purpose-built logistics for sensitive peptide compounds — from cold-chain
            packaging to discreet delivery and real-time tracking.
          </p>
        </header>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.iconWrap}>{feature.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
