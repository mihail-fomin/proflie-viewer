import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './types'

interface UserState {
  activeUser: User | null
}

const initialState: UserState = {
  activeUser: null,
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    // endpoint для поиска одного пользователя по id
    getUserById: builder.query<User, string>({
      query: (id) => `users?id=${id}`,
    }),
    // endpoint для поиска нескольких пользователей по id
    getUsersByIds: builder.query<User[], number[]>({
      query: (ids) => `users?${ids.map((id) => `id=${id}`).join('&')}`, // Формируем запрос на сервер
    }),
  }),
})

export const { useGetUserByIdQuery, useGetUsersByIdsQuery } = userApi

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
