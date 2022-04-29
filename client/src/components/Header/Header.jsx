import SearchInput from '../Input/SearchInput/SearchInput';
import './Header.scss';
import HeaderOption from './Header_options/Header_option';
import logo from '../../assets/images/header_logo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { signOutUser } from '../../redux/slices/usersSlice';
import { useNavigate } from 'react-router-dom';
import { getDataFromLocalStorage } from '../../helpers/getLocalStorage';
import i18n from '../../i18n';
import useToggle from '../../customHooks/useToggle';

const Header = () => {
  const [isUserOpen, setIsUserOpen] = useToggle();
  const [isLangOpen, setIsLangOpen] = useToggle();
  const { user } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const lang = getDataFromLocalStorage('lang', 'en');

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(signOutUser());
      navigate('/');
    }).catch((error) => {

    });
  };

  const handleLang = (e) => {
    localStorage.setItem('lang', e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className='container-xl'>
      <div className='header'>
        <img className='header__logo' src={logo} alt='header-logo'></img>
        <div className='header__search'>
          <SearchInput />
        </div>
        <div className='header__right'>
          <div className='header__user' onClick={setIsLangOpen}>
            {<HeaderOption icon="fa-solid fa-globe" text='Language' />}
            {isLangOpen ? (
              <select onChange={handleLang} value={lang}>
                <option value='en'>English</option>
                <option value='vie'>Vietnamese</option>
              </select>
            ) : null}
          </div>
          <div className='header__user' onClick={setIsUserOpen}>
            {<HeaderOption icon="fa-solid fa-user" text={user ? `Xin chào ${user.lastName} ${user.firstName}` : 'Tài khoản'} />}
            {isUserOpen && user ? (
              <ul>
                <li onClick={handleSignOut}>Đăng xuất</li>
            </ul>
            ) : isUserOpen ? (
              <ul>
                <li><Link to='/login'>Đăng nhập</Link></li>
                <li><Link to='/signup'>Đăng ký</Link></li>
            </ul>
            ) : null}
          </div>
          <HeaderOption icon="fa-solid fa-heart" text='Yêu thích' />
          <Link to='/cart'><HeaderOption icon="fa-solid fa-bag-shopping" /></Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
