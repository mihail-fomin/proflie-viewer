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
    getUsers: builder.query<User[], void>({
      query: () => 'users',
      providesTags: ['Users'],
    }),
  }),
})

export const { useGetUsersQuery } = userApi

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
