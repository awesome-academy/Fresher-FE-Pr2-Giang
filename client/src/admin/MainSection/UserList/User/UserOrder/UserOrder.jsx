import CheckoutItem from '../../../../../components/Checkout/CheckoutItem/CheckoutItem';
import './styles.scss';
import { ORDER_API_URL } from '../../../../../data/constants';

const UserOrder = ({ orders, id, setIsAcceptedModalOpen, setIsDeniedModalOpen }) => {
  const handleAcceptOrder = () => {
    fetch(`${ORDER_API_URL}/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({status: 'Đơn hàng đã được chấp thuận'})
      });
    setIsAcceptedModalOpen();
  };

  const handleDenyOrder = () => {
    fetch(`${ORDER_API_URL}/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({status: 'Đơn hàng bị từ chối'})
      });
    setIsDeniedModalOpen();
  };

  return (
    <div className='user-orders'>
      {orders && orders.map(order => (
        <CheckoutItem {...order} />
      ))}
      <div>
        <button onClick={handleAcceptOrder} className='user-orders__accept'>CHẤP NHẬN</button>
        <button onClick={handleDenyOrder} className='user-orders__deny'>TỪ CHỐI</button>
      </div>
    </div>
  )
};

export default UserOrder;
