import { useState } from 'react'
import styles from './SideBar.module.scss'
import UserList from './UserList'
import SearchInput from './SearchInput'

const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <nav className={styles.sidebar}>
      <h2>Поиск сотрудников</h2>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <h2>Результаты</h2>
      <UserList searchQuery={searchQuery} />
    </nav>
  )
}

export default SideBar
