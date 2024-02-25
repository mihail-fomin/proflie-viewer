/**
 * Обрабатывает строку запроса для поиска, удаляя запятую или пробелы -
 * необходимо, чтобы не слать запросы при вводе этих символов.
 * @param {string} query - Строка запроса для обработки.
 * @returns {string} - Обработанная строка запроса.
 */
export const processSearchQuery = (query: string): string => {
  return query.trim().endsWith(',') || query.trim().endsWith(' ')
    ? query.trim().slice(0, -1)
    : query.trim()
}

/**
 * Функция для формирования строки запроса, проходит по каждому элементу,
 * делает необходимые проверки для дальнейшего их объединения.
 * @param {string} searchString - Строка запроса для обработки.
 * @returns {string} - Обработанная строка запроса.
 */
export const prepareQuery = (searchString: string): string => {
  const searchItems = searchString.split(',')
  // Массив для хранения условий поиска
  const conditions: string[] = []

  // Проходимся по каждому элементу и проверяем, является ли он числом (id) или строкой (username)
  searchItems.forEach((item) => {
    // Убираем пробелы с начала и конца строки
    const trimmedItem = item.trim()

    if (!trimmedItem) return
    // Если элемент представляет собой число, то добавляем условие поиска по id
    if (!isNaN(Number(trimmedItem))) {
      conditions.push(`id=${trimmedItem}`)
    } else {
      // Если элемент не является числом, то добавляем условие поиска по username
      conditions.push(`username=${trimmedItem}`)
    }
  })

  // Объединяем все условия поиска
  const query = conditions.join('&')
  // Возвращаем сформированную строку запроса
  return `users?${query}`
}