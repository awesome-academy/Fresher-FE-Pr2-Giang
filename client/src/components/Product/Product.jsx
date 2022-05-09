import './styles.scss';
import { convertMoney } from '../../helpers/convertMoney';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Product = ({ title, transportation, startingDate, duration, mainImg, price, id }) => {
  const { t } = useTranslation();

  return (
    <div className='product'>
      <Link to={`/product/${id}`}><img src={mainImg} alt='product-img'></img></Link>
      <div className='product__info'>
        <h5>{title}</h5>
        <div className='product__transport'>
          {transportation?.map(transportType => {
            if(transportType === "1"){
              return <i class="fa-solid fa-bus-simple"></i>
            } else if(transportType === "2"){
              return <i class="fa-solid fa-ship"></i>
            } else {
              return <i class="fa-solid fa-plane"></i>
            }
          })}
        </div>
        <p><i class="fa-solid fa-clock"></i>Lịch khởi hành: <span>{startingDate}</span></p>
        <p><i class="fa-solid fa-calendar"></i>Thời gian: <span>{duration}</span></p>
        <div className='product__price'>
          <h4>{convertMoney(price)}</h4>
          <Link to={`/product/${id}`}><button>{t('book')}</button></Link>
        </div>
      </div>
    </div>
  )
};

export default Product;
