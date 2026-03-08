import styles from './Footer.module.css'

const catalogLinks = [
  { label: 'GLP-1 Agonists', href: '#catalog' },
  { label: 'Growth Hormone Peptides', href: '#catalog' },
  { label: 'Thymic Peptides', href: '#catalog' },
  { label: 'Melanocortin Peptides', href: '#catalog' },
  { label: 'Healing & Repair', href: '#catalog' },
  { label: 'Cognitive & Neural', href: '#catalog' },
  { label: 'New Arrivals', href: '#new-products' },
]

const providerLinks = [
  { label: 'Provider Overview', href: '#providers' },
  { label: 'Request Access', href: '#provider-access' },
  { label: 'Provider Portal', href: '#login' },
  { label: 'Compliance Docs', href: '#compliance' },
  { label: 'COA Lookup', href: '#coa' },
]

const companyLinks = [
  { label: 'About Peplogix', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Shipping Policy', href: '#shipping' },
  { label: 'Terms of Use', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Main columns */}
        <div className={styles.columns}>

          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
            <a href="/" className={styles.logoLink} aria-label="Peplogix home">
              <img
                src="/Image/peplogix-logo-white.png"
                alt="Peplogix"
                className={styles.logo}
                width="160"
                height="36"
              />
            </a>
            <p className={styles.tagline}>
              Research-grade peptide supply for verified providers, laboratories, and research institutions.
            </p>
            <div className={styles.portals}>
              <a href="https://portal.peplogix.com" className={styles.portalLink}>
                Provider Portal
              </a>
              <a href="https://sync.peplogix.com" className={styles.portalLink}>
                Clinic Sync
              </a>
            </div>
          </div>

          {/* Column 2: Catalog */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Catalog</h4>
            <ul className={styles.linkList}>
              {catalogLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Providers */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Providers</h4>
            <ul className={styles.linkList}>
              {providerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Company</h4>
            <ul className={styles.linkList}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>
            <strong>Research Use Only.</strong> All compounds offered by Peplogix are
            intended solely for in-vitro research and preclinical study purposes. These
            products are not approved by the FDA and are not intended for human administration,
            therapeutic use, or clinical application. Peplogix does not manufacture
            503A or 503B compounded pharmaceutical preparations. Access to our catalog
            requires verified provider credentials. By placing an order, purchasers confirm
            compliance with all applicable federal, state, and local regulations governing
            the acquisition, possession, and use of research chemicals.
          </p>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Peplogix. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#terms" className={styles.bottomLink}>Terms</a>
            <a href="#privacy" className={styles.bottomLink}>Privacy</a>
            <a href="#contact" className={styles.bottomLink}>Contact</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
