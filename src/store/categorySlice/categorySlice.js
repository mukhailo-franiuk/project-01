import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Helper function to generate providesTags for categories
const providesCategoryTags = (result) =>
    result
        ? [
            ...result.map(({ id }) => ({ type: 'Categories', id })),
            { type: 'Categories', id: 'LIST' },
        ]
        : [{ type: 'Categories', id: 'LIST' }];

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: ['Categories'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => 'categories',
            providesTags: providesCategoryTags,
        }),
        getSubCategories: build.query({
            query: () => 'sub-categories',
            providesTags: providesCategoryTags,
        }),
        addCategory: build.mutation({
            query: (body) => ({
                url: 'categories',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Categories', id: 'LIST'}]
        }),
        
    })
});

export const { useGetCategoriesQuery , useGetSubCategoriesQuery, useAddCategoryMutation } = categoryApi;