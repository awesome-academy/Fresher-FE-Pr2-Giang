import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import './styles.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;
