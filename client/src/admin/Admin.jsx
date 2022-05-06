import AdminHeader from './AdminHeader/AdminHeader';
import './styles.scss';
import Sidebar from './MainSection/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <main className='main'>
      <div className='main__left'>
        <Sidebar />
      </div>
      <div className='main__right'>
        <Outlet />
      </div>
    </main>
    </div>
  )
}

export default Admin;