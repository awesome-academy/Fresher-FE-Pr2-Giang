import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import './styles.scss';
import UserNavBar from './UserNavBar/UserNavBar';

const UserProfile = () => {
  const { user } = useSelector(state => state.users);

  return (
    <section className='user'>
      <div className='container-xl'>
        <div className='d-flex'>
          <div className='user__left'>
            <h5>trang tài khoản</h5>
            <span>Xin chào, {user && `${user.lastName} ${user.firstName}`} !</span>
            <UserNavBar />
          </div>
          <div className='user__right'>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
