import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query({ 
      query: () => 'users',
      transformResponse: (response) => response.map(user => ({
        id: user.id,
        name: user.name.toUpperCase(),
        email: user.email
      })),
      providesTags: ['Users'],
    }),
    getUserById: builder.query({ 
      query: (id) => `users/${id}`,
      transformResponse: (user) => ({
        id: user.id, // 確保 `id` 仍然存在
        name: user.name.toUpperCase(),
        email: user.email,
      }),
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Users' },
        { type: 'Users', id },
      ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApi;