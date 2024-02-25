import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveUser } from '../../store/userApi'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const dispatch = useDispatch()
  const [inValid, setInValid] = React.useState<boolean>(false)
  // использовать useEffect, чтобы обновлять конекст при изменении value
  // только после завершения рендеринга компонента SearchInput
  React.useEffect(() => {
    if (!value) {
      dispatch(setActiveUser(null))
    }
  }, [value, dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    // Валидация: допускается вводить латиницу, цифры, запятые и пробелы
    if (!/^[a-zA-Z0-9, ]*$/.test(newValue)) {
      // Показываем тултип с подсказкой о некорректных символах
      setInValid(true)
      return
    }
    // Передаем новое значение обратно в родительский компонент
    onChange(newValue)
    setInValid(false)
    // Очищаем тултип при правильном вводе
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите Id или имя"
        data-tooltip-id="searchInputTooltip"
      />
      <Tooltip id="searchInputTooltip" variant="error" isOpen={inValid}>
        <div>
          <h3>Некорректные символы.</h3>
          <h4>Для ввода доступны только:</h4>
          <ul>
            <li>• латиница</li>
            <li>• цифры</li>
            <li>• запятые или пробелы</li>
          </ul>
        </div>
      </Tooltip>
    </>
  )
}

export default SearchInput
