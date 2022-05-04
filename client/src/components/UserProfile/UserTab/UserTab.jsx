import AccountInfo from './AccountInfo/AccountInfo';
import ChangePassword from './ChangePassword/ChangePassword';
import './styles.scss';
import UserOrders from './UserOrders/UserOrders';

const UserTab = ({ title, children }) => {
  return (
    <div className='tab'>
      <h5>{title}</h5>
      {children}
    </div>
  )
};

export default UserTab;
