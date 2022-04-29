import { useSelector } from 'react-redux';
import UserTab from '../UserTab';
import './styles.scss';

const AccountInfo = () => {
  const { user } = useSelector(state => state.users);

  return (
    <UserTab title='thông tin tài khoản'>
      <div className='account-info'>
        {user && (
          <div>
            <p><span>Họ tên:</span> {`${user.lastName} ${user.firstName}`}</p>
            <p><span>Email:</span> {`${user.email}`}</p>
            <p><span>Điện thoại:</span> {`${user.phoneNumber}`}</p>
          </div>
        )}
        {user.address && <p><span>Địa chỉ:</span> {`${user.address}`}</p>}
      </div>
    </UserTab>
  )
};

export default AccountInfo;
