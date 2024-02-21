import React from 'react'
import styles from './SideBar.module.scss'
import userImage from '../assets/userImage.svg'
import classNames from 'classnames'
import { useGetUsersQuery } from '../store/userApi';


const SideBar = () => {
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(null)
  const { data: users = [], error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: </div>;


  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId) // Обновляем состояние при клике на пользователя
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
              [styles.sidebar__user_active]: selectedUserId === user.id,
            })}
            onClick={() => handleUserClick(user.id)} // Вызываем функцию при клике на пользователя
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
