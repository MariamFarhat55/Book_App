import styles from '../css/header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>كتب د. عماد رشاد عثمان</h1>
      <p className={styles.sub}>تأملات في التعافي والنمو الشخصي</p>
      <div className={styles.line}></div>
    </header>
  )
}

export default Header