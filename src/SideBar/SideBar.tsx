import { useState } from 'react'
import styles from './SideBar.module.scss'
import UserList from './UserList/UserList'
import SearchInput from './SearchInput/SearchInput'
import { useDebounceValue } from 'usehooks-ts'

const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [debouncedValue] = useDebounceValue(searchQuery, 500)

  return (
    <nav className={styles.sidebar}>
      <h2>Поиск сотрудников</h2>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <h2>Результаты</h2>
      <UserList searchQuery={debouncedValue} />
    </nav>
  )
}

export default SideBar
