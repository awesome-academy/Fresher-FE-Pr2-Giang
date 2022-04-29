import './styles.scss';
import { convertMoney } from '../../../helpers/convertMoney';

const CheckoutItem = ({ mainImg, title, total }) => {
  return (
    <div className='checkout-item'>
      <div className='checkout-item__left'>
        <img src={mainImg}></img>
        <p className='checkout-item__title'>
          {title}
        </p>
      </div>
      {total && <p className='checkout-item__total'>{convertMoney(total)}</p>}
    </div>
  )
};

export default CheckoutItem;
