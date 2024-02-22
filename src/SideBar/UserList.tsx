import React from 'react'
import styles from './UserList.module.scss'
import UserItem from './UserItem'
import { RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, useGetUserByIdQuery } from '../store/userApi'

interface Props {
  searchQuery: string
}

const UserList: React.FC<Props> = ({ searchQuery }) => {
  const dispatch = useDispatch()
  const activeUser = useSelector((state: RootState) => state.user.activeUser)
  const { data: users } = useGetUserByIdQuery(searchQuery)

  return (
    <ul className={styles.userList}>
      {Array.isArray(users) &&
        users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            isActive={activeUser?.id === user.id}
            onClick={() => dispatch(setActiveUser(user))}
          />
        ))}
    </ul>
  )
}

export default UserList
