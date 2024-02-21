import React from 'react'
import styles from './SideBar.module.scss'
import userImage from '../assets/userImage.svg'
import classNames from 'classnames'

const SideBar = () => {
  const [selectedUserId, setSelectedUserId] = React.useState(null)
  const [users, setUsers] = React.useState([])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json() // Преобразуем ответ в формат JSON
      setUsers(data) // Обновляем состояние с полученными пользователями
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])

  const handleUserClick = (userId) => {
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
