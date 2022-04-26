import { useState } from 'react';
import SearchInput from '../Input/SearchInput/SearchInput';
import './Header.scss';
import HeaderOption from './Header_options/Header_option';
import logo from '../../assets/images/header_logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { signOutUser } from '../../redux/slices/usersSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(signOutUser());
      navigate('/');
    }).catch((error) => {

    });
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
            {<HeaderOption icon="fa-solid fa-user" text={user ? `Xin chào ${user.lastName} ${user.firstName}` : 'Tài khoản'} />}
            {isOpen && user ? (
              <ul>
                <li onClick={handleSignOut}>Đăng xuất</li>
            </ul>
            ) : isOpen ? (
              <ul>
                <li><Link to='/login'>Đăng nhập</Link></li>
                <li><Link to='/signup'>Đăng ký</Link></li>
            </ul>
            ) : null}
          </div>
          <HeaderOption icon="fa-solid fa-heart" text='Yêu thích' />
          <HeaderOption icon="fa-solid fa-bag-shopping" />
        </div>
      </div>
    </header>
  )
};

export default Header;
