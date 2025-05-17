/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import PostCard from "@/components/post-card";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { useGetPostsQuery } from "@/services/posts";
import { getFavourites, toggleFavourite } from "@/slices/favourites";

export default function Page() {
  const { data = [], isFetching, isError, isSuccess } = useGetPostsQuery();

  const dispatch = useAppDispatch();
  const favouriteIds = useAppSelector(getFavourites);

  const handleToggleFavourite = (postId: number) => {
    dispatch(toggleFavourite(postId));
  };

  if (isFetching) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse text-lg">Loading posts...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center min-h-[50vh]">
        <div className="text-lg">Error loading posts</div>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            isFavourite={favouriteIds?.[post.id]}
            onToggleFavourite={handleToggleFavourite}
          />
        ))}
      </div>
    </main>
  );
}
