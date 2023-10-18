import { Outlet } from 'react-router-dom';
import CategoryDirectory from '../../components/category-directory/category-directory.component';

const Home = () => {
  return (
    <>
      <CategoryDirectory />
      <Outlet />
    </>
  );
};

export default Home;
