import './styles.scss';
import { navLinks } from '../../data/navBar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='container-xl'>
        {navLinks.map(({title, toggle, link}) => (
          <li>
            <Link className='link' to={link}>
              <span>{title}</span>
              {toggle && <i class="fa-solid fa-angle-down"></i>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default NavBar;
