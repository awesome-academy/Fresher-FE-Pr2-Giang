import { NavLink } from 'react-router-dom';
import './styles.scss';

const SideBarLink = ({ icon, title, path }) => {
  const navLinkActive = (navLinkStatus) => {
    return navLinkStatus.isActive ? 'navlink-active sidebar-link' : 'sidebar-link';
  };

  return (
    <NavLink className={navLinkActive} to={path} ><i class={icon}></i><p>{title}</p></NavLink>
  )
};

export default SideBarLink;
