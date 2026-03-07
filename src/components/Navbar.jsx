import { useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.css'

const catalogItems = [
  { label: 'GLP-1 Agonists', href: '#catalog' },
  { label: 'Growth Hormone Peptides', href: '#catalog' },
  { label: 'Thymic Peptides', href: '#catalog' },
  { label: 'Melanocortin Peptides', href: '#catalog' },
  { label: 'Healing & Repair', href: '#catalog' },
  { label: 'Cognitive & Neural', href: '#catalog' },
]

const providerItems = [
  { label: 'Provider Overview', href: '#providers' },
  { label: 'Request Provider Access', href: '#providers' },
  { label: 'Provider Portal Login', href: '/portal' },
  { label: 'Compliance & Documentation', href: '#compliance' },
]

function Dropdown({ label, items, isOpen, onToggle, dropdownRef }) {
  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <button
        className={styles.navDropdownTrigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className={styles.dropdown} role="menu">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.dropdownItem}
              role="menuitem"
              onClick={onToggle}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [providersOpen, setProvidersOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const catalogRef = useRef(null)
  const providersRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (catalogRef.current && !catalogRef.current.contains(e.target)) {
        setCatalogOpen(false)
      }
      if (providersRef.current && !providersRef.current.contains(e.target)) {
        setProvidersOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.container}>

          {/* Logo */}
          <a href="/" className={styles.logoLink} aria-label="Peplogix home">
            <img
              src="/peplogix-logo.svg"
              alt="Peplogix"
              className={styles.logo}
              width="180"
              height="40"
            />
          </a>

          {/* Desktop nav links */}
          <div className={styles.navLinks}>
            <Dropdown
              label="Catalog"
              items={catalogItems}
              isOpen={catalogOpen}
              onToggle={() => { setCatalogOpen(o => !o); setProvidersOpen(false) }}
              dropdownRef={catalogRef}
            />
            <Dropdown
              label="Providers"
              items={providerItems}
              isOpen={providersOpen}
              onToggle={() => { setProvidersOpen(o => !o); setCatalogOpen(false) }}
              dropdownRef={providersRef}
            />
            <a href="#contact" className={styles.navLink}>Contact</a>
            <a href="#new-products" className={styles.navLinkHighlight}>New Products</a>
          </div>

          {/* Right actions */}
          <div className={styles.navActions}>
            <a href="/portal" className={styles.loginLink}>Login</a>
            <a href="#provider-access" className={styles.ctaBtn}>Provider Access</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(o => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.line1Open : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.line2Open : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.line3Open : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className={styles.mobileMenu}>
            <p className={styles.mobileSection}>Catalog</p>
            {catalogItems.map((item) => (
              <a key={item.label} href={item.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <p className={styles.mobileSection}>Providers</p>
            {providerItems.map((item) => (
              <a key={item.label} href={item.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className={styles.mobileDivider} />
            <a href="#contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Contact</a>
            <a href="#new-products" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>New Products</a>
            <div className={styles.mobileDivider} />
            <a href="/portal" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Login</a>
            <a href="#provider-access" className={styles.mobileCtaBtn} onClick={() => setMobileOpen(false)}>Provider Access</a>
          </div>
        )}
      </nav>
    </header>
  )
}
