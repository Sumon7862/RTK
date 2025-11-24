// src/store/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://dummyjson.com';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Products', 'Product'],
  endpoints: (build) => ({
    // GET all products (with optional query params)
    getProducts: build.query({
      query: (params) => {
        if (!params) return { url: '/products' };
        const searchParams = new URLSearchParams();
        if (params.limit != null) searchParams.append('limit', String(params.limit));
        if (params.skip != null) searchParams.append('skip', String(params.skip));
        if (params.select) searchParams.append('select', params.select);
        if (params.sortBy) searchParams.append('sortBy', params.sortBy);
        if (params.order) searchParams.append('order', params.order);
        if (params.category) return { url: `/products/category/${params.category}?${searchParams.toString()}` };
        const queryString = searchParams.toString();
        return { url: `/products${queryString ? '?' + queryString : ''}` };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useAddToCartMutation,
} = productsApi;
