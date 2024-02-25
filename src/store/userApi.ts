import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './types'
import { prepareQuery } from '../utils'

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
