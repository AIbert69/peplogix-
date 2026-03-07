import styles from './Categories.module.css'

const categories = [
  {
    name: 'GLP-1 Agonists',
    description: 'Metabolic regulation and glucagon-like peptide receptor compounds.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="6" cy="21" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="21" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10.5" y1="13.5" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="17.5" y1="13.5" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Growth Hormone Peptides',
    description: 'GH axis modulators, secretagogues, and somatotropin analogs.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4 L14 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 10 L14 4 L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 18 L10 14 L14 18 L18 14 L22 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Thymic Peptides',
    description: 'Immune modulation compounds targeting thymus-derived peptide activity.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 5 C9 5 5 9 5 14 C5 19 9 23 14 23 C19 23 23 19 23 14 C23 9 19 5 14 5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 9 L14 19 M9 14 L19 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Melanocortin Peptides',
    description: 'MC receptor agonists and antagonists for targeted receptor research.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1="14" y1="4" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="22" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="14" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Healing & Repair',
    description: 'Tissue repair, injury recovery, and cellular regeneration peptides.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 6 L16 12 L22 12 L17 16 L19 22 L14 18 L9 22 L11 16 L6 12 L12 12 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Cognitive & Neural',
    description: 'Neurotropic and nootropic compounds for central nervous system research.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M10 20 C10 20 6 18 6 13 C6 9 9 6 14 6 C19 6 22 9 22 13 C22 18 18 20 18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 20 L10 22 L18 22 L18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="22" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="22" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="11" x2="14" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="9" r="1" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function Categories() {
  return (
    <section className={styles.section} id="catalog" aria-labelledby="categories-heading">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <p className={styles.overline}>Research Catalog</p>
          <h2 className={styles.heading} id="categories-heading">
            Peptide categories
          </h2>
          <p className={styles.subtext}>
            Browse our complete catalog of research-grade peptide compounds, organized
            by receptor target and research application.
          </p>
        </header>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <a key={cat.name} href="#catalog" className={styles.card}>
              <div className={styles.iconWrap}>{cat.icon}</div>
              <h3 className={styles.cardName}>{cat.name}</h3>
              <p className={styles.cardDesc}>{cat.description}</p>
              <span className={styles.cardLink}>
                Browse
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
