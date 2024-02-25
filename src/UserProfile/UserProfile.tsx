import styles from './UserProfile.module.scss'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/index'
import userImage from '../assets/svg/userImage.svg'

const UserProfile = () => {
  const activeUser = useSelector((state: RootState) => state.user.activeUser)

  return (
    <section className={styles.wrapper}>
      {activeUser ? (
        <div className={styles.userCard}>
          <img className={styles.avatar} src={userImage} alt="user avatar" />
          <div className={styles.info}>
            <h2 className={styles.username}>{activeUser.name}</h2>
            <p className={styles.email}>
              <span>email: </span>
              {activeUser.email}
            </p>
            <p className={styles.phone}>
              <span>phone: </span>
              {activeUser.phone}
            </p>
            <label htmlFor="about">О себе: </label>
            <p className={styles.about} id="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      ) : (
        <p className={styles.infoMessage}>
          Выберите сотрудника, чтобы посмотреть его профиль
        </p>
      )}
    </section>
  )
}

export default UserProfile
