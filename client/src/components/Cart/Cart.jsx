import './styles.scss';
import CartItem from './CartItem/CartItem';
import { convertMoney } from '../../helpers/convertMoney';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import useToggle from '../../customHooks/useToggle';

const Cart = () => {
  const { cart: cartList} = useSelector(state => state.cart);
  const { user } = useSelector(state => state.users);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useToggle();
  const totalPayment = cartList.reduce((total, item) => total + item.total, 0);

  const handleCheckoutProceed = () => {
    if(user) {
      navigate('/checkout');
    } else {
      setIsModalOpen();
    }
  };

  return (
    <section className='cart'>
      <div className='container-xl'>
        <div className='cart__title'>
          <h3>GIỎ HÀNG</h3>
          <small>({cartList && cartList.length} tour)</small>
        </div>
        <div className='cart__list'>
          {cartList && cartList.map(item => (
            <CartItem {...item} />
          ))}
        </div>
        {cartList.length > 0 && (
          <div className='cart__checkout'>
            <Link to='/'><p className='cart__keep-buying'>Tiếp tục mua hàng</p></Link>
            <div className='cart__checkout-right'> 
              <div className='cart__total'>
                <p>Tạm tính:</p>
                <h6>{convertMoney(totalPayment)}</h6>
              </div>
              <div className='cart__total'>
                <p>Thành tiền:</p>
                <h4>{convertMoney(totalPayment)}</h4>
              </div>
              <button type='button' onClick={handleCheckoutProceed}>THANH TOÁN NGAY</button>
            </div>
          </div>
        )}
      </div>
      <Modal open={isModalOpen} toggle={setIsModalOpen}>
        <h5 className='mb-3'>Log in or sign up to continue!</h5>
        <div>
          <Link to='/login'><button className='modal-login'>Log In</button></Link>
          <Link to='/signup'><button className='modal-signup'>Create an account</button></Link>
        </div>
      </Modal>
    </section>
  )
};

export default Cart;
