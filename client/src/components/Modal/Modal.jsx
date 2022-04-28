import './styles.scss';

const Modal = ({ open, children, toggle }) => {
  if(!open) return null

  return (
    <>
    <div className='overlay'>
      <div className='modal-main'>
        <button className='modal-main__close' onClick={toggle}><i class="fa-solid fa-xmark"></i></button>
        {children}
      </div>
    </div>
    </>
  )
};

export default Modal;
