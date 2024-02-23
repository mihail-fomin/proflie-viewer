import React from 'react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
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

  return <input type="text" value={value} onChange={handleChange} />
}

export default SearchInput
