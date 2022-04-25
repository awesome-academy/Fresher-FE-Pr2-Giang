import './styles.scss';
import { Link } from 'react-router-dom';

const HeaderOption = ({ icon, text }) => {
  return (
    <div className="header__option">
      <i class={icon}></i>
      <span>{text}</span>
    </div>
  )
}

export default HeaderOption;
