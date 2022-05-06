import './styles.scss';
import Modal from '../../../../components/Modal/Modal';
import useToggle from '../../../../customHooks/useToggle';
import UserDetails from './UserDetails/UserDetails';

const User = ({ firstName, lastName, phoneNumber, email, address, id }) => {
  const [isModalOpen, setIsModalOpen] = useToggle();

  return (
    <>
      <tr className='admin-user' onClick={setIsModalOpen}>
        <td>{`${firstName} ${lastName}`}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
        <td>{address}</td>
      </tr>
      <Modal open={isModalOpen} toggle={setIsModalOpen}>
        <UserDetails
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          email={email}
          address={address}
          id={id} />
      </Modal>
    </>
  )
};

export default User;
