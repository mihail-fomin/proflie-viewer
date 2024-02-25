import { useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'
import classNames from 'classnames'

import styles from './SideBar.module.scss'
import UserList from './UserList/UserList'
import SearchInput from './SearchInput/SearchInput'
import { processSearchQuery } from '../utils/index.js'
import ToggleButton from './ToggleButton/ToggleButton.js'

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
      <ToggleButton collapsed={collapsed} setCollapsed={setCollapsed} />
      <h2>Поиск сотрудников</h2>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <h2>Результаты</h2>
      <UserList searchQuery={debouncedValue} />
    </nav>
  )
}

export default SideBar
