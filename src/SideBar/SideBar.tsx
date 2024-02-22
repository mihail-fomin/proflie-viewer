import styles from './SideBar.module.scss'
import userImage from '../assets/userImage.svg'
import classNames from 'classnames'
import { setActiveUser, useGetUsersQuery } from '../store/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { User } from '../store/types'
import { RootState } from '../store'

const SideBar = () => {
  const dispatch = useDispatch()
  const { data: users = [], error, isLoading } = useGetUsersQuery()
  const activeUser = useSelector((state: RootState) => state.user.activeUser)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  const handleUserClick = (user: User) => {
    dispatch(setActiveUser(user))
  }

  return (
    <nav className={styles.sidebar}>
      <h2>Поиск сотрудников</h2>
      <input placeholder="Введите Id или имя" />
      <h2>Результаты</h2>
      <ul className={styles.sidebar__userlist}>
        {users.map((user) => (
          <li
            key={user.id}
            className={classNames(styles.sidebar__user, {
              [styles.sidebar__user_active]: activeUser?.id === user.id,
            })}
            onClick={() => handleUserClick(user)}
          >
            <img src={userImage} alt="user avatar" />
            <div className={styles.sidebar__userInfo}>
              <p className={styles.sidebar__username}>{user.username}</p>
              <p className={styles.sidebar__email}>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideBar
