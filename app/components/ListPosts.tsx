"use client";

import React, { useEffect, useState } from "react";
import { Post } from "../generated/prisma";
import PostCard from "./PostCard/PostCard";

export default function ListPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const take = 5;
        // const category = 'thong-bao';

        const params = new URLSearchParams({
          take: take.toString(),
        });

        const res = await fetch(`/api/posts?${params.toString()}`);
        const data = await res.json();

        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch texts", err);
      }
    };

    fetchTexts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          postItem={post}
        />
      ))}
    </>
  );
}
