// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const harvestAPI = createApi({
  reducerPath: "harvestAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://code-commando.com/api/v1" }),
  endpoints: (builder) => ({
    getProductCategory: builder.query({
      query: () => "/category",
    }),
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProductDetails: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductCategoryQuery,
  useGetProductsQuery,
  useGetProductDetailsQuery,
} = harvestAPI;
