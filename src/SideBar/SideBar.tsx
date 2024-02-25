import { useState } from 'react'
import styles from './SideBar.module.scss'
import UserList from './UserList/UserList'
import SearchInput from './SearchInput/SearchInput'
import { useDebounceValue } from 'usehooks-ts'
import { ArrowLeftIcon, BarsIcon } from '../utils/Icons.js'
import classNames from 'classnames'

const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [debouncedValue] = useDebounceValue(searchQuery, 500)
  const [collapsed, setCollapsed] = useState(false)

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
