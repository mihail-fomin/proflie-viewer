import { useSelector } from 'react-redux'
import styles from './Header.module.scss'
import { RootState } from '../store'

const Header = () => {
  const activeUser = useSelector((state: RootState) => state.user.activeUser)

  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>Жилфонд</h1>
      <div className={styles.header__user}>
        {activeUser ? activeUser.username : 'Пользователь'}
      </div>
    </header>
  )
}

export default Header
