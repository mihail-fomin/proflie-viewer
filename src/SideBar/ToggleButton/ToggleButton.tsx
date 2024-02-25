import React from 'react'
import { BarsIcon, ArrowLeftIcon } from '../../utils/Icons'
import styles from './ToggleButton.module.scss'

interface ToggleButtonProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  collapsed,
  setCollapsed,
}) => {
  return (
    <button
      className={styles.toggleNav}
      onClick={() => {
        setCollapsed(!collapsed)
      }}
    >
      {collapsed ? <BarsIcon /> : <ArrowLeftIcon />}
    </button>
  )
}

export default ToggleButton
