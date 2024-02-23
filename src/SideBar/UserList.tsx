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
  const skip = !!!searchQuery
  const activeUser = useSelector((state: RootState) => state.user.activeUser)
  const { data: users, error, isLoading, isUninitialized } = useGetUserByIdQuery(searchQuery, {skip})
  console.log('users: ', users);

  return (
    <>
      {error ? (
        <>Ошибка</>
      ) : isUninitialized ? (
        <p>начните поиск</p>
      ) : isLoading ? (
        <>Loading...</>
      ) : users.length === 0 ? (
        <p>ничего не найдено</p>
      ) : (
        <ul className={styles.userList}>
          {users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              isActive={activeUser?.id === user.id}
              onClick={() => dispatch(setActiveUser(user))}
            />
          ))}
        </ul>
      )}
    </>
  );
  
}

export default UserList
