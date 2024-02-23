import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './types'

interface UserState {
  activeUser: User | null
}

const initialState: UserState = {
  activeUser: null,
}

const prepareQuery = (searchString: string): string => {
  const searchItems = searchString.split(',')
  // Массив для хранения условий поиска
  const conditions: string[] = []

  // Проходимся по каждому элементу и проверяем, является ли он числом (id) или строкой (username)
  searchItems.forEach((item) => {
    // Убираем пробелы с начала и конца строки
    const trimmedItem = item.trim()
    // Если элемент представляет собой число, то добавляем условие поиска по id
    if (!isNaN(Number(trimmedItem))) {
      conditions.push(`id=${trimmedItem}`)
    } else {
      // Если элемент не является числом, то добавляем условие поиска по username
      conditions.push(`username=${trimmedItem}`)
    }
  })

  // Объединяем все условия поиска с помощью "и" (&)
  const query = conditions.join('&')
  // Возвращаем сформированную строку запроса
  return `users?${query}`
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    // endpoint для поиска одного пользователя по id
    getUsersByIds: builder.query<User[], string>({
      query: (searchString) => prepareQuery(searchString),
    }),
  }),
})

export const { useGetUsersByIdsQuery } = userApi

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<User | null>) => {
      state.activeUser = action.payload
    },
  },
})

export const { setActiveUser } = userSlice.actions

export default userSlice.reducer
