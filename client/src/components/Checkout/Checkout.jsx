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
import { updateUser } from '../../redux/slices/usersSlice';
import { USER_API_URL } from '../../data/constants';
import { ORDER_API_URL } from '../../data/constants';

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
    if(user) {
      fetch(`${USER_API_URL}/${user.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      fetch(`${ORDER_API_URL}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({userId: user.id, orders: [...cartList], createdAt: new Date().toDateString()})
      });
      dispatch(updateUser(data))
      dispatch(deleteAllCartItem());
      navigate('/checkout-success');
    } else {
      navigate('/signup');
    }
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
              </div>
              <div className='checkout__order'>
                <div>
                  <h5>Tổng cộng</h5>
                  <h4>{convertMoney(totalPayment)}</h4>
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
