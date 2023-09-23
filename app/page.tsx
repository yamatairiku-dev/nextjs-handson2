import { Search } from '@/lib/component/Serach';
import { getRamdomPhotos } from '@/lib/unsplash';

const Home = async () => {
  const randomPhotos = await getRamdomPhotos();
  return (
    <div>
      <Search randomPhotos={randomPhotos} />
    </div>
  );
};

export default Home;
