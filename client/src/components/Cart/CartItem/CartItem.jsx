import './styles.scss';
import { convertMoney } from '../../../helpers/convertMoney';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../../../redux/slices/cartSlice';

const CartItem = ({ mainImg, title, date, total, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    
    dispatch(deleteCartItem(id));
  };

  return (
    <div className='cart-item'>
      <div className='cart-item__left'>
        <img src={mainImg} alt='cart-item-img'></img>
        <div className='cart-item__info'>
          <p>{title}</p>
          <p>Ngày đi: {date ? date : 'Đang cập nhật'}</p>
          <div className='cart-item__btns'>
            <Link to={`/product/${id}`}><button type='button' className='cart-item__update'>CẬP NHẬT</button></Link>
            <button type='button' className='cart-item__delete' onClick={() => handleDelete(id)}>XÓA</button>
          </div>
        </div>
      </div>
      <div className='cart-item__right'>
        <h5>{convertMoney(total)}</h5>
      </div>
    </div>
  )
};

export default CartItem;
