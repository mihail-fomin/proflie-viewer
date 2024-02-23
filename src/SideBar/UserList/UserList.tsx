import React from 'react'
import styles from './UserList.module.scss'
import UserItem from '../UserItem/UserItem'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, useGetUsersByIdsQuery } from '../../store/userApi'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Box } from './SkeletonContainer'

interface Props {
  searchQuery: string
}

const UserList: React.FC<Props> = ({ searchQuery }) => {
  const dispatch = useDispatch()
  
  // считать неавлидной строку, состоящую только из "," и " "
  const isInvalid = /^[, ]*$/.test(searchQuery)
  const skip = !searchQuery || isInvalid

  const activeUser = useSelector((state: RootState) => state.user.activeUser)
  const {
    data: users,
    error,
    isLoading,
    isFetching,
    isUninitialized,
  } = useGetUsersByIdsQuery(searchQuery, { skip })


  return (
    <>
      {error ? (
        <>Ошибка</>
      ) : isUninitialized ? (
        <p>начните поиск</p>
      ) : isLoading ? (
        <Skeleton height='4.5rem'/>
      ) : users.length === 0 ? (
        <p>ничего не найдено</p>
      ) : isFetching ? (
          <Box>
            <Skeleton height='4.5rem' count={searchQuery.split(',').length}/>
          </Box>
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
  )
}

export default UserList
