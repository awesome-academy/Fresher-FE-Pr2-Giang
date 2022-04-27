import { useState } from 'react';
import ProductDetailsHeading from '../ProductDetails_Heading/ProductDetails_Heading';
import SelectAmount from '../../Input/SelectAmount/SelectAmount';
import './styles.scss';
import { convertMoney } from '../../../helpers/convertMoney';

const ProductDetailsOrder = ({ price }) => {
  const [amountForAdult, setAmountForAdult] = useState(1);
  const [amountForChildren, setAmountForChildren] = useState(0);
  const [date, setDate] = useState(null);

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
        <p>{convertMoney((price * amountForAdult) + ((price*0.5) * amountForChildren))}</p>
      </div>
      <div className='product-order__btn'>
        <input type='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
        <button>ĐẶT TOUR</button>
      </div>
    </div>
  )
};

export default ProductDetailsOrder;
