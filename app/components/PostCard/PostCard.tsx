"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./PostCard.module.css";
import clsx from "clsx";

interface PostCardProps {
  postItem: {
    id: number | string;
    title: string;
    category: string;
    publishedAt: string | Date;
    content: string;
    image?: string | null;
  };
}

const PostCard: React.FC<PostCardProps> = ({ postItem }) => {
  return (
    <article
      className={clsx(
        "max-w-md mx-auto bg-white overflow-hidden rounded-2xl hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row mb-6",
        styles.cardContainer
      )}
    >
      <div className={clsx(styles.leftContent)}>
        {postItem.image && (
          <img
            src={postItem.image}
            alt={postItem.title}
            className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-2xl"
            loading="lazy"
          />
        )}
      </div>

      <div
        className={clsx(
          "p-6 flex flex-col justify-between md:w-2/3",
          styles.rightContent
        )}
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer mb-2">
            <a href={`/posts/${postItem.id}`}>{postItem.title}</a>
          </h2>

          <div className="flex items-center text-sm text-gray-500 space-x-3 mb-4">
            <span className="italic capitalize">{postItem.category}</span>
            <span>•</span>
            <time dateTime={new Date(postItem.publishedAt).toISOString()}>
              {new Date(postItem.publishedAt).toLocaleDateString()}
            </time>
          </div>

          <p
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: postItem.content.slice(0, 150) + "...",
            }}
          />
        </div>

        <Link
          href={`/posts/${postItem.id}`}
          className={clsx(
            "mt-6 inline-block bg-white text-red-600 font-semibold px-5 py-2 rounded-lg hover:bg-white-700 transition-colors",
            styles.readMoreBtn
          )}
          aria-label={`Đọc thêm bài viết: ${postItem.title}`}
        >
          Đọc thêm →
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
