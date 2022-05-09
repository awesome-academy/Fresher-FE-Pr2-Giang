import { useState } from 'react';
import ProductDetailsHeading from '../ProductDetails_Heading/ProductDetails_Heading';
import SelectAmount from '../../Input/SelectAmount/SelectAmount';
import './styles.scss';
import { convertMoney } from '../../../helpers/convertMoney';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/slices/cartSlice';
import { useTranslation } from 'react-i18next';
import useToggle from '../../../customHooks/useToggle';
import Modal from '../../Modal/Modal';
import CheckoutItem from '../../Checkout/CheckoutItem/CheckoutItem';

const ProductDetailsOrder = ({ price, title, duration, mainImg, id }) => {
  const { t } = useTranslation();
  const [amountForAdult, setAmountForAdult] = useState(1);
  const [amountForChildren, setAmountForChildren] = useState(0);
  const [date, setDate] = useState(null);
  const dispatch = useDispatch();
  const [isBooked, setIsBooked] = useToggle();
  const [isDateChosen, setIsDateChosen] = useToggle();

  const getTotal = (price) => {
    return (price * amountForAdult) + ((price*0.5) * amountForChildren);
  };

  const handleOrder = () => {
    if(date){
      const addedProduct = {
        title, duration, mainImg, amountForAdult, amountForChildren, date, id, total: getTotal(price)
      };
  
      dispatch(addToCart({ addedProduct, id }));
      setIsBooked();
    } else {
      setIsDateChosen();
    }
  };

  return (
    <div className='product-order'>
      <ProductDetailsHeading text='đặt tour' /> 
      <table>
        <thead>
          <td>Loại khách</td>
          <td className='text-center'>Số người</td>
          <td className='text-right'>Đơn giá</td>
          <td className="text-right">Tổng giá</td>
        </thead>
        <tbody>
          <tr>
            <td>Người lớn</td>
            <td className='d-flex justify-content-center'>
              <SelectAmount value={amountForAdult} setAmount={setAmountForAdult} />
            </td>
            <td className='text-right'>{convertMoney(price)}</td>
            <td className='total text-right'>{convertMoney(price * amountForAdult)}</td>
          </tr>
          <tr>
            <td>Trẻ em</td>
            <td className='d-flex justify-content-center'>
              <SelectAmount value={amountForChildren} setAmount={setAmountForChildren} />
            </td>
            <td className='text-right'>{convertMoney(price*0.5)}</td>
            <td className='total text-right'>{convertMoney((price*0.5) * amountForChildren)}</td>
          </tr>
        </tbody>
      </table>
      <div className='total-order'>
        <h5>Tổng tiền</h5>
        <p>{convertMoney(getTotal(price))}</p>
      </div>
      <div className='product-order__btn'>
        <input type='date' value={date} onChange={(e) => setDate(e.target.value)} required></input>
        <button type='button' onClick={handleOrder}>{t('book')}</button>
      </div>
      <Modal open={isBooked} toggle={setIsBooked}>
        <p>Bạn đã book tour du lịch:</p>
        <div>
          <CheckoutItem mainImg={mainImg} title={title} amountForAdult={amountForAdult} amountForChildren={amountForChildren} />
        </div>
      </Modal>
      <Modal open={isDateChosen} toggle={setIsDateChosen}>
        <h4>Departure date needs to be chosen!</h4>
      </Modal>
    </div>
  )
};

export default ProductDetailsOrder;
