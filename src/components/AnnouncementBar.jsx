import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  return (
    <div className={styles.bar} role="banner">
      <p className={styles.text}>
        Free shipping on verified provider orders above $300
      </p>
    </div>
  )
}
