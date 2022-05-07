import { Link } from 'react-router-dom';
import './styles.scss';
import { convertMoney } from '../../../../../helpers/convertMoney';

const Order = ({ createdAt, id, orders, status }) => {
  const total = orders.reduce((total, item) => total + item.total, 0);

  return (
    <tr className='order'>
      <td className='order-id'><Link to={`/user/order-details/${id}`}>#{id}</Link></td>
      <td>{createdAt}</td>
      <td>{convertMoney(total)}</td>
      <td>Chưa thanh toán</td>
      {status ? <td>{status}</td> : <td>Đang đợi xử lí</td>}
    </tr>
  )
};

export default Order;
