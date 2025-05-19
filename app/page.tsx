import CurrentTime from './components/CurrentTime';
import PostCard from './components/PostCard';
import ScrollingText from './components/ScrollingText';
import { getAllPosts } from './lib/postService';

const Home = async () => {
  const posts = await getAllPosts();
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Trang Chủ</h1>
      <div className="max-w-screen-lg mx-auto p-4">
        <CurrentTime />
        <ScrollingText />
        {posts.map((post) => (
          <PostCard key={post.id} postItem={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
