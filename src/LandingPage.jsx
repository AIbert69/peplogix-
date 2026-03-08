import styles from './LandingPage.module.css'

const products = [
  {
    img: '/Image/wolverine.jpg',
    alt: 'Wolverine Blend',
    name: 'BPC-157 / TB-500\nWolverine Blend',
  },
  {
    img: '/Image/tesamorelin.png',
    alt: 'Tesamorelin / Ipamorelin',
    name: 'Tesamorelin /\nIpamorelin',
  },
  {
    img: '/Image/ghk-cu.png',
    alt: 'GHK-Cu Copper Peptide',
    name: 'GHK-Cu\nCopper Peptide 50mg',
  },
  {
    img: '/Image/cjc-1295.png',
    alt: 'CJC-1295 / Ipamorelin',
    name: 'CJC-1295 /\nIpamorelin',
  },
]

export default function LandingPage() {
  return (
    <>
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={`${styles.container} ${styles.navContainer}`}>
          <a href="/" className={styles.logo}>
            <img src="/Image/peplogix-logo.png" alt="Peplogix" height="48" />
          </a>
          <nav className={styles.navCenter}>
            <a href="/" className={styles.navLinkActive}>Home</a>
            <a href="#products" className={styles.navLink}>Products</a>
            <a href="#science" className={styles.navLink}>Science</a>
            <a href="#about" className={styles.navLink}>About Us</a>
            <a href="/portal/dashboard" className={styles.navLink}>Provider Login</a>
          </nav>
          <div className={styles.navRight}>
            <a href="/portal/dashboard" className={styles.btnContact}>Provider Login</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeading}>
              ADVANCED PEPTIDE SOLUTIONS FOR PROFESSIONAL RESEARCH.
            </h1>
            <p className={styles.heroSubtext}>
              High-Purity Blends and Compounds<br />for Targeted Applications.
            </p>
            <a href="#products" className={styles.btnHero}>EXPLORE PEPTIDES</a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>OUR FEATURED PRODUCTS</h2>
          <div className={styles.productGrid}>
            {products.map((p) => (
              <div key={p.alt} className={styles.productCard}>
                <div className={styles.productImg}>
                  <img src={p.img} alt={p.alt} />
                </div>
                <h3 className={styles.productName}>
                  {p.name.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < p.name.split('\n').length - 1 && <br />}</span>
                  ))}
                </h3>
                <a href="#products" className={styles.btnOutline}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section id="science" className={styles.scienceSection}>
        <div className={`${styles.container} ${styles.scienceGrid}`}>
          <div className={styles.scienceImg}>
            <img src="/Image/hero-bg.png" alt="Science of Peptides" />
          </div>
          <div className={styles.scienceContent}>
            <h2 className={styles.scienceHeading}>THE SCIENCE BEHIND PEPTIDES</h2>
            <ul className={styles.scienceList}>
              <li>Targeted Cellular Signaling</li>
              <li>Enhanced Tissue Repair</li>
              <li>Optimized Biological Functions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Difference */}
      <section id="about" className={styles.differenceSection}>
        <div className={styles.container}>
          <h2 className={styles.differenceHeading}>THE PEPLOGIX DIFFERENCE</h2>
          <p className={styles.differenceText}>
            Every batch is guaranteed 99%+ purity, independently verified by Janoshik and Shimadzu
            analytical laboratories. Our U.S.-based manufacturing facilities use advanced HPLC/MS
            validation and third-party quality assurance at every step — from synthesis to packaging
            to cold-chain delivery. We publish certificates of analysis for every product and maintain
            full supply chain transparency.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerGrid}`}>
          <div className={styles.footerCol}>
            <a href="/" className={styles.footerLogo}>
              <img src="/Image/peplogix-logo.png" alt="Peplogix" height="32" />
            </a>
            <div className={styles.footerContact}>
              3943 Irvine Blvd., Suite 510<br />
              Irvine, CA 92602<br />
              <a href="mailto:info@peplogix.com" className={styles.footerEmail}>info@peplogix.com</a><br />
              Shipping: Mon–Thurs (excl. holidays)<br />
              Orders after 12PM PST ship next business day
            </div>
          </div>
          <div className={`${styles.footerCol} ${styles.footerLinks}`}>
            <a href="#products">Products</a>
            <a href="#about">About Us</a>
            <a href="#science">Science</a>
            <a href="mailto:info@peplogix.com">Contact</a>
          </div>
          <div className={`${styles.footerCol} ${styles.footerLinks}`}>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">YouTube</a>
          </div>
          <div className={`${styles.footerCol} ${styles.footerLinks}`}>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className={`${styles.footerCol} ${styles.footerDisclaimer}`}>
            &copy; {new Date().getFullYear()} Peplogix. All materials are supplied exclusively for
            research and analytical use. Peplogix does not sell products for human or veterinary
            administration. Peplogix is not a compounding pharmacy or chemical compounding facility
            as defined under 503a of the federal food, drug, and cosmetic act. Peplogix is not an
            outsourcing facility as defined under 503b of the federal food, drug, and cosmetic act.
          </div>
        </div>
      </footer>
    </>
  )
}
