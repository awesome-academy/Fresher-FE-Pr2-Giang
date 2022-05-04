import './styles.scss';
import { convertMoney } from '../../../helpers/convertMoney';

const CheckoutItem = ({ mainImg, title, total, amountForAdult, amountForChildren }) => {
  return (
    <div className='checkout-item'>
      <div className='checkout-item__left'>
        <img src={mainImg}></img>
        <div>
          <p className='checkout-item__title'>
            {title}
          </p>
          <p>Người lớn: <span>{amountForAdult}</span></p>
          <p>Trẻ em: <span>{amountForChildren}</span></p>
        </div>
      </div>
      {total && <p className='checkout-item__total'>{convertMoney(total)}</p>}
    </div>
  )
};

export default CheckoutItem;
