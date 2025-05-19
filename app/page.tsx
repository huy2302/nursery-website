import CurrentTime from './components/CurrentTime';
import ListPosts from './components/ListPosts';
import ScrollingText from './components/ScrollingText';

const Home = async () => {
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Trang Chủ</h1>
      <div className="max-w-screen-lg mx-auto p-4">
        <CurrentTime />
        <ScrollingText />

        {/* render list */}
        <div className='pt-10'>
          {/* <LeftMenu /> */}
          <ListPosts />
        </div>
      </div>
    </div>
  );
};

export default Home;
