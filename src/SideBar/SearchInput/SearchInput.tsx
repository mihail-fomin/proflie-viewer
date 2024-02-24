import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveUser } from '../../store/userApi'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const dispatch = useDispatch()

  // использовать useEffect, чтобы обновлять конекст при изменении value
  // только после завершения рендеринга компонента SearchInput
  React.useEffect(() => {
    if (!value) {
      dispatch(setActiveUser(null))
    }
  }, [value, dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    // Валидация: докпускается вводить латинницу, цифры, запятые и пробелы
    if (!/^[a-zA-Z0-9, ]*$/.test(newValue)) {
      // Если введены иные символы, игнорируем изменение
      return
    }
    // Передаем новое значение обратно в родительский компонент
    onChange(newValue)
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Введите Id или имя"
    />
  )
}

export default SearchInput
