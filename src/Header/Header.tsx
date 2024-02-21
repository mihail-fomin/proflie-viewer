import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>Жилфонд</h1>
      <div className={styles.header__user}>Пользователь</div>
    </header>
  )
}

export default Header
