import { Link } from 'react-router-dom';
import './styles.scss';
import FooterNavLink from './NavLink/FooterNavLink';

const NavLinks = ({ title, links }) => {
  return (
    <ul className="navlinks">
      <h5>{title}</h5>
      {links.map(link => <FooterNavLink text={link}/>)}
    </ul>
  )
};

export default NavLinks;
