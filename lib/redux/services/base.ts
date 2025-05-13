import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
});

const baseApi = createApi({
  baseQuery,
  reducerPath: "baseApi",
  endpoints: () => ({}),
});

export { baseApi };
