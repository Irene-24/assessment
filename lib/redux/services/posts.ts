import { baseApi } from "./base";
import type { Post } from "@/lib/types";

const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
  overrideExisting: true,
});
export const { useGetPostsQuery } = postsApi;
export { postsApi };
