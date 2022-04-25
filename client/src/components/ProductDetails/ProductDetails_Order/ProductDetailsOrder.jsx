import { useState } from 'react';
import ProductDetailsHeading from '../ProductDetails_Heading/ProductDetails_Heading';
import SelectAmount from '../../Input/SelectAmount/SelectAmount';
import './styles.scss';

const ProductDetailsOrder = () => {
  const [amountForAdult, setAmountForAdult] = useState(1);
  const [amountForChildren, setAmountForChildren] = useState(1);

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
            <td className='text-right'>2.000.000d</td>
            <td className='total text-right'>2.000.000d</td>
          </tr>
          <tr>
            <td>Trẻ em</td>
            <td className='d-flex justify-content-center'>
              <SelectAmount value={amountForChildren} setAmount={setAmountForChildren} />
            </td>
            <td className='text-right'>1.000.000d</td>
            <td className='total text-right'>1.000.000d</td>
          </tr>
        </tbody>
      </table>
      <div className='total-order'>
        <h5>Tổng tiền</h5>
        <p>2.000.000d</p>
      </div>
      <div className='product-order__btn'>
        <input type='date'></input>
        <button>ĐẶT TOUR</button>
      </div>
    </div>
  )
};

export default ProductDetailsOrder;
