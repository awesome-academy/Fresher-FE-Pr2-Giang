import { useEffect } from 'react';
import './styles.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Order from './Order/Order';
import { getOrders } from '../../../../redux/slices/ordersSlice';
import UserTab from '../UserTab';

const UserOrders = () => {
  const { user } = useSelector(state => state.users);
  const { orders } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(user.id));
  }, []);

  return (
    <UserTab title='đơn hàng của bạn'>
      <div className='user-orders'>
        <table>
          <thead>
            <tr>
              <td>Đơn hàng</td>
              <td>Ngày</td>
              <td>Giá trị đơn hàng</td>
              <td>TT thanh toán</td>
              <td>Tình trạng</td>
            </tr>
          </thead>
          <tbody>
            {orders && orders.map(order => (
              <Order {...order} address={user.address} />
            ))}
          </tbody>
        </table>
      </div>
    </UserTab>
  )
};

export default UserOrders;
