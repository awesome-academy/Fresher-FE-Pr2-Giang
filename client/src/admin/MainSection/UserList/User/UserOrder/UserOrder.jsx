import CheckoutItem from '../../../../../components/Checkout/CheckoutItem/CheckoutItem';
import './styles.scss';

const UserOrder = ({ orders }) => {
  return (
    <div className='user-orders'>
      {orders && orders.map(order => (
        <CheckoutItem {...order} />
      ))}
    </div>
  )
};

export default UserOrder;
