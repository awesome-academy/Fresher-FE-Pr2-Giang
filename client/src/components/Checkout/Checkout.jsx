import TextInput from '../Input/TextInput.jsx/TextInput';
import './styles.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import RadioInput from '../Input/RadioInput/RadioInput';
import { getDataFromLocalStorage } from '../../helpers/getLocalStorage';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import { convertMoney } from '../../helpers/convertMoney';
import { Link } from 'react-router-dom';
import { RE_STRING } from '../../data/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAllCartItem } from '../../redux/slices/cartSlice';

const schema = yup.object().shape({
  fullname: yup.string().matches(RE_STRING, "Only alphabets are allowed for this field").required(),
  phoneNumber: yup.string().min(10).required(),
  address: yup.string().required(),
});

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user } = useSelector(state => state.users);

  const cartList = JSON.parse(getDataFromLocalStorage('cart'));

  const totalPayment = cartList.reduce((total, item) => total + item.total, 0);

  const receivingInfo = [
    {
      label: 'họ và tên',
      name: 'fullname',
      type: 'text',
      placeholder: 'Nhập họ và tên',
    },
    {
      label: 'số điện thoại',
      name: 'phoneNumber',
      type: 'text',
      placeholder: 'Nhập số điện thoại',
    },
    {
      label: 'địa chỉ nhận hàng',
      name: 'address',
      type: 'text',
      placeholder: 'Nhập địa chỉ',
    },
  ];

  const handleCheckout = (data) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...data})
    });
    dispatch(deleteAllCartItem());
    navigate('/checkout-success');
  };

  return (
    <section className='checkout'>
      <div className='container-xl'>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <div className='row justify-content-between'>
          <div className='col-lg-4'>
            <h5>Thông tin nhận hàng</h5>
            {receivingInfo.map((input) => (
              <TextInput {...input} register={register} errors={errors} />
            ))}
          </div>
          <div className='col-lg-4'>
            <h5>Vận chuyển</h5>
            <RadioInput text1='Giao hàng tận nơi' text2='40.000đ'/>
            <h5>Thanh toán</h5>
            <RadioInput text1='Thanh toán khi giao hàng (COD)' />
          </div>
          <div className='col-lg-4 checkout__right'>
            <div className='checkout__right-title'>
              <h5>Đơn hàng</h5>
              <small>({cartList.length} sản phẩm)</small>
            </div>
            <div className='checkout__list'>
                {cartList.length > 0 && cartList.map(item => (
                  <CheckoutItem {...item} />
                ))}  
              </div>
              <div className='checkout__total'>
                <div>
                  <p>Tạm tính:</p>
                  <p>{convertMoney(totalPayment)}</p>
                </div>
                <div>
                  <p>Phí vận chuyển:</p>
                  <p>{convertMoney(40000)}</p>
                </div>
              </div>
              <div className='checkout__order'>
                <div>
                  <h5>Tổng cộng</h5>
                  <h4>{convertMoney(totalPayment + 40000)}</h4>
                </div>
                <div>
                  <Link to='/cart'><p><i class="fa-solid fa-chevron-left"></i> Quay về giỏ hàng</p></Link>
                  <button type='submit' onClick={handleCheckout}>ĐẶT HÀNG</button>
                </div>
              </div>
          </div>
        </div>
        </form>
      </div>
    </section>
  )
};

export default Checkout;
