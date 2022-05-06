import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../../redux/slices/productsSlice';
import Product from './Product/Product';
import Modal from '../../../components/Modal/Modal';
import useToggle from '../../../customHooks/useToggle';
import ProductEdit from './ProductEdit/ProductEdit';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const [isModalOpen, setIsModalOpen] = useToggle();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className='product-list'>
      <div className='product-list__add'>
        <button onClick={setIsModalOpen}><i class="fa-solid fa-circle-plus"></i> ADD PRODUCT</button>
      </div>
      <div className='row'>
        {products && products.map(product => (
          <div className='col-lg-3'>
            <Product {...product} key={product.id} />
          </div>
        ))}
      </div>
      <Modal open={isModalOpen} toggle={setIsModalOpen}>
        <ProductEdit isAddFunction={true} />
      </Modal>
    </div>  
  )
};

export default ProductList;
