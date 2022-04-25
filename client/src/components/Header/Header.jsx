import { useState } from 'react';
import SearchInput from '../Input/SearchInput/SearchInput';
import './Header.scss';
import HeaderOption from './Header_options/Header_option';
import logo from '../../assets/images/header_logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='container-xl'>
      <div className='header'>
        <img className='header__logo' src={logo} alt='header-logo'></img>
        <div className='header__search'>
          <SearchInput />
        </div>
        <div className='header__right'>
          <div className='header__user' onClick={handleToggle}>
            <HeaderOption icon="fa-solid fa-user" text='Tài khoản' />
            {isOpen && (
              <ul>
              <li>Đăng nhập</li>
              <li>Đăng ký</li>
            </ul>
            )}
          </div>
          <HeaderOption icon="fa-solid fa-heart" text='Yêu thích' />
          <HeaderOption icon="fa-solid fa-bag-shopping" />
        </div>
      </div>
    </header>
  )
};

export default Header;
