import React from 'react'
import classNames from 'classnames'
import userPreviewImage from '../../assets/userPreviewImage.svg'
import styles from './UserItem.module.scss'
import { User } from '../../store/types'

interface UserItemProps {
  user: User
  isActive: boolean
  onClick: () => void
}

const UserItem: React.FC<UserItemProps> = ({ user, isActive, onClick }) => {
  return (
    <li
      className={classNames(styles.userItem, {
        [styles.userItem_active]: isActive,
      })}
      onClick={onClick}
    >
      <img src={userPreviewImage} alt="user avatar" />
      <div className={styles.userInfo}>
        <h3 className={styles.username}>{user.username}</h3>
        <p className={styles.email}>{user.email}</p>
      </div>
    </li>
  )
}

export default UserItem
