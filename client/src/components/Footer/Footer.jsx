import './styles.scss';
import { socialMediaIcon } from '../../data/socialIcon';
import { payments } from '../../data/payments';
import NavLinks from './NavLinks/NavLinks';
import { navLinks } from '../../data/navLinks';
import logo from '../../assets/images/footer_logo.png';
import SubcribeInput from '../Input/SubcribeInput/SubcribeInput';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container-xl'>
        <div className='footer__top d-flex'>
            <div className='footer__left'>
              <div className='footer__socialMedia'>
                {socialMediaIcon.map(icon => <i className={icon}></i>)}
              </div>
            </div>
            <div className='footer__right d-flex'>
              <div className='footer__register'>
                <h4>đăng ký nhận tin</h4>
                <p>Các deal du lịch giảm giá đến 60% sẽ được gửi đến bạn</p>
              </div>
              <SubcribeInput />
            </div>
        </div>
        <div className='footer__bottom d-flex'>
          <div className='footer__left'>
            <div className='footer__left-container'>
              <div className='footer__logo-container'>
                <img className='footer__logo' src={logo} alt='footer-logo'></img>
              </div>
              <div className='footer__info'>
                <p><strong>Địa chỉ:</strong> 70 Lu Gia, Ward 15, District 11, Ho Chi Minh city</p>
                <p><strong>Email:</strong> support@evo.vn</p>
                <p><strong>Điện thoại:</strong> 1900 6750</p>
                <p><strong>Zalo:</strong> 1900 6750</p>
                <small>Giấy phép kinh doanh số 000000 do sở KH&ĐT TP Hà Nội cấp ngày 00/00/0000</small>
              </div>
              <div className='footer__payment'>
                {payments.map(img => <img src={img}></img>)}
              </div>
            </div>
          </div>
          <div className='footer__right d-flex'>
            {navLinks.map(compound => <NavLinks {...compound} />)}
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
