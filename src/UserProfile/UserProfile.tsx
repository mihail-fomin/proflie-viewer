import styles from './UserProfile.module.scss'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/index'

const UserProfile = () => {
  const activeUser = useSelector((state: RootState) => state.user.activeUser)

  return (
    <div className={styles.userProfile}>
      {activeUser ? (
        <>
          <h2>{activeUser.username}</h2>
          <p>{activeUser.email}</p>
        </>
      ) : (
        <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
      )}
    </div>
  )
}

export default UserProfile
