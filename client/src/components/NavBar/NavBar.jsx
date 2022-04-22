import './styles.scss';
import { navLinks } from '../../data/navBar';

const NavBar = () => {
  return (
    <nav>
      <ul className='container-xl'>
        {navLinks.map(({title, toggle}) => (
          <li>
            <span>{title}</span>
            {toggle && <i class="fa-solid fa-angle-down"></i>}
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default NavBar;
