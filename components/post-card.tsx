"use client";

import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Post } from "@/lib/types";
import Image from "next/image";

interface PostCardProps {
  post: Post;
  isFavourite: boolean;
  onToggleFavourite: (postId: number) => void;
}

export default function PostCard({
  post,
  isFavourite,
  onToggleFavourite,
}: PostCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="aspect-video w-full mb-4 bg-gray-100 rounded-md relative overflow-hidden">
          <Image
            fill
            src={"/images/login-bg.png"}
            alt={`Post ${post.id} thumbnail`}
            className="object-center object-cover"
            sizes="200px"
          />
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">{post.body}</p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        <span className="text-xs text-gray-500">Post #{post.id}</span>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => onToggleFavourite(post.id)}
          aria-label={
            isFavourite ? "Remove from favorites" : "Add to favorites"
          }
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavourite ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
