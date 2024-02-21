import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from './types';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users',
      providesTags: ['Users'],
    }),
  }),
});

// Export the created API for usage in your Redux store setup
export const { useGetUsersQuery } = userApi;
