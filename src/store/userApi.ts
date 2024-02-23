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
  // Разбить строку по запятым и удалить пробелы
  const ids = searchString.split(',').map((id) => id.trim())
  // Отфильтровать пустые строки
  const validIds = ids.filter((id) => id)
  // Сформировать строку запроса для каждого id
  const query = validIds.map((id) => `id=${id}`).join('&')
  // Вернуть сформированный запрос
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
