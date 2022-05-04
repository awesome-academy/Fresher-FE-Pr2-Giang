import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CheckoutItem from '../../../../Checkout/CheckoutItem/CheckoutItem';
import './styles.scss';
import { convertMoney } from '../../../../../helpers/convertMoney';

const OrderDetails = () => {
  const { user } = useSelector(state => state.users);
  const { orders } = useSelector(state => state.orders);
  const { id } = useParams();

  const userOrder = orders.find(order => order.id === +id);

  const total = userOrder.orders.reduce((total, item) => total + item.total, 0);

  return (
    <div className='order-details'>
      <h5>Chi tiết đơn hàng</h5>
      <div className='mt-3 d-flex'>
        <p className='mb-2'>Trạng thái thanh toán: <span>Chưa thanh toán</span></p>
      </div>
      <div>
        {userOrder && userOrder.orders.map(order => (
          <CheckoutItem {...order}/>
        ))}
      </div>
      <div>
        <div className='d-flex justify-content-between mb-2 mt-2'><p>Tổng tiền:</p><h5 className='order-details__total'>{convertMoney(total)}</h5></div>
      </div>
    </div>
  )
};

export default OrderDetails;
