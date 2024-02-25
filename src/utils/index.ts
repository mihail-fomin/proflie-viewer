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
