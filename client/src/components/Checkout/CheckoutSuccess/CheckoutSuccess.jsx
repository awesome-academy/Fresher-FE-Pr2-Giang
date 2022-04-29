import { Link } from 'react-router-dom';
import './styles.scss';

const CheckoutSuccess = () => {
  return (
    <section className='checkout-success container-xl'>
      <div>
        <p>Chúc mừng bạn đã đặt hàng thành công!</p>
        <i class="fa-solid fa-circle-check"></i>
        <Link to='/'><button>QUAY TRỞ VỀ TRANG CHỦ</button></Link>
      </div>
    </section>
  )
};

export default CheckoutSuccess;
