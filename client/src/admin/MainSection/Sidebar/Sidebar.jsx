import { NavLink } from 'react-router-dom';
import SideBarLink from './NavLink/SidebarLink';
import './styles.scss';

const Sidebar = () => {
  return (
    <nav className='admin-sidebar'>
      <ul>
        <li><SideBarLink icon="fa-solid fa-users" title="Tài khoản" path='/admin/users'/></li>
        <li><SideBarLink icon="fa-solid fa-box-open" title="Sản phẩm" path='/admin/products'/></li>
        <li><SideBarLink icon="fa-solid fa-backward" title="Trở về trang chủ" path='/'/></li>
      </ul>
    </nav>
  )
};

export default Sidebar;
