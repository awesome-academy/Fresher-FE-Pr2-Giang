import { NavLink } from 'react-router-dom';
import './styles.scss';

const UserNavBar = () => {
  const navLinkActive = (navLinkStatus) => {
    return navLinkStatus.isActive ? 'navlink-active' : '';
  };

  return (
    <ul className='user-navbar'>
      <li><NavLink className={navLinkActive} to='/user/info'>Thông tin tài khoản</NavLink></li>
      <li><NavLink className={navLinkActive} to='/user/orders'>Đơn hàng của bạn</NavLink></li>
      <li><NavLink className={navLinkActive} to='/user/change-password'>Đổi mật khẩu</NavLink></li>
    </ul>
  )
};

export default UserNavBar;
