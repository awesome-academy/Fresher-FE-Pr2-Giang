import { useEffect } from 'react';
import './styles.scss';
import User from './User/User';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/slices/usersSlice'; 

const UserList = () => {
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  return (
    <div className='user-list'>
      <table className='user-list__table'>
        <thead>
          <td>USERNAME</td>
          <td>PHONE</td>
          <td>EMAIL</td>
          <td>ADDRESS</td>
        </thead>
        {users && users.map(user => (
          <User {...user} />
        ))}
      </table>
    </div>
  )
};

export default UserList;
