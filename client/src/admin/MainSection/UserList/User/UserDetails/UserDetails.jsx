import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { getOrders } from '../../../../../redux/slices/ordersSlice';
import { useEffect } from 'react';
import UserOrder from '../UserOrder/UserOrder';

const UserDetails = ({ lastName, firstName, email, phoneNumber, address, id }) => {
  const { orders } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(id));
  }, []);

  const userOrders = orders.map(order => {
    return {id: order.id, orders: order.orders};
  });

  return (
    <div className='user-details'>
      <p><span>Họ tên:</span> {`${lastName} ${firstName}`}</p>
      <p><span>Email:</span> {email}</p>
      <p><span>Điện thoại:</span> {phoneNumber}</p>
      <p><span>Địa chỉ:</span> {address}</p>
      <div className='user-details__orders'>
        {userOrders.length > 0 ? userOrders.map(({ id, orders }) => (
          <div>
            <h4>ORDER: #{id}</h4>
            <UserOrder orders={orders} />
          </div>
        )) : <div className='empty-cart'>Hiện chưa có sản phẩm nào trong giỏ hàng.</div>}
      </div>
  </div>
  )
};

export default UserDetails;
