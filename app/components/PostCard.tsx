"use client";

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  publishedAt: Date;
}

interface PostCardProps {
  postItem: Post;
}

const PostCard: React.FC<PostCardProps> = ({ postItem }) => {
  return (
    <div
      key={postItem.id}
      className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
    >
      <h2 className="text-xl font-semibold text-gray-800">{postItem.title}</h2>
      <p className="text-sm text-gray-600 mt-2">{postItem.category}</p>
      <p className="text-sm text-gray-500 mt-2">
        {new Date(postItem.publishedAt).toLocaleDateString()}
      </p>
      <div
        className="mt-4 text-gray-700"
        dangerouslySetInnerHTML={{ __html: postItem.content.slice(0, 100) + "..." }}
      />
      <a
        href={`/posts/${postItem.id}`}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Đọc thêm
      </a>
    </div>
  );
};

export default PostCard;
