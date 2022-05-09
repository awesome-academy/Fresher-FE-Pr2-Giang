import './styles.scss';
import Modal from '../../../../components/Modal/Modal';
import useToggle from '../../../../customHooks/useToggle';
import UserDetails from './UserDetails/UserDetails';

const User = ({ firstName, lastName, phoneNumber, email, address, id }) => {
  const [isModalOpen, setIsModalOpen] = useToggle();
  const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useToggle();
  const [isDeniedModalOpen, setIsDeniedModalOpen] = useToggle();

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
          id={id}
          setIsAcceptedModalOpen={setIsAcceptedModalOpen} 
          setIsDeniedModalOpen={setIsDeniedModalOpen} />
      </Modal>
      <Modal open={isAcceptedModalOpen} toggle={setIsAcceptedModalOpen}>
        <h4>Đơn hàng đã được chấp nhận.</h4>
      </Modal>
      <Modal className='denied-modal' open={isDeniedModalOpen} toggle={setIsDeniedModalOpen}>
        <h4>Đơn hàng đã bị từ chối.</h4>
      </Modal>
    </>
  )
};

export default User;
