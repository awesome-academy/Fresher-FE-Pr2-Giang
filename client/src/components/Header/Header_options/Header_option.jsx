import './styles.scss';
import { Link } from 'react-router-dom';

const HeaderOption = ({ icon, text }) => {
  return (
    <Link to='' className="header__option">
      <i class={icon}></i>
      <span>{text}</span>
    </Link>
  )
}

export default HeaderOption;
