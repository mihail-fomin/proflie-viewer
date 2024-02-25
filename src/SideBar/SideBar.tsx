import { useState } from 'react'
import styles from './SideBar.module.scss'
import UserList from './UserList/UserList'
import SearchInput from './SearchInput/SearchInput'
import { useDebounceValue } from 'usehooks-ts'
import { ArrowLeftIcon, BarsIcon } from '../utils/Icons.js'
import classNames from 'classnames'
import { processSearchQuery } from '../utils/index.js'

const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const processedSearchQuery = processSearchQuery(searchQuery)

  const [debouncedValue] = useDebounceValue(processedSearchQuery, 500)
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <nav
      className={classNames(styles.sidebar, {
        [styles.sidebar_collapsed]: collapsed,
      })}
    >
      <button
        className={styles.toggleNav}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      >
        {collapsed ? <BarsIcon /> : <ArrowLeftIcon />}
      </button>

      <h2>Поиск сотрудников</h2>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <h2>Результаты</h2>
      <UserList searchQuery={debouncedValue} />
    </nav>
  )
}

export default SideBar
