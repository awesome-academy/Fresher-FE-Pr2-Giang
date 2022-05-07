import { useDispatch, useSelector } from 'react-redux';
import useToggle from '../../../../customHooks/useToggle';
import Modal from '../../../../components/Modal/Modal';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductEdit from '../ProductEdit/ProductEdit';
import './styles.scss';
import { deleteProduct } from '../../../../redux/slices/productsSlice';

const Product = ({ title, transportation, startingDate, duration, mainImg, price, id, itinerary, type }) => {
  const [isItineraryOpen, setIsItineraryOpen] = useToggle();
  const [isEditOpen, setIsEditOpen] = useToggle();
  const [isDeleteOpen, setIsDeleteOpen] = useToggle();
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className='product'>
      <img src={mainImg} alt='product-img'></img>
      <div className='product__info'>
        <h5>{title}</h5>
        <div className='product__btns'>
          <button onClick={setIsEditOpen}><i class="fa-solid fa-pen-to-square"></i></button>
          <button onClick={setIsDeleteOpen}><i class="fa-solid fa-trash-can"></i></button>
          <button onClick={setIsItineraryOpen}><i class="fa-solid fa-eye"></i></button>
        </div>
      </div>
      <Modal open={isItineraryOpen} toggle={setIsItineraryOpen}>
        <ProductDetails mainImg={mainImg} itinerary={itinerary} />
      </Modal>
      <Modal open={isEditOpen} toggle={setIsEditOpen}>
        <ProductEdit 
          transportation={transportation} 
          title={title} 
          startingDate={startingDate} 
          duration={duration} 
          mainImg={mainImg} 
          price={price} 
          itinerary={itinerary} 
          type={type} 
          id={id}/>
      </Modal>
      <Modal open={isDeleteOpen} toggle={setIsDeleteOpen}>
        <h5>Bạn có chắc chắn muốn xóa sản phẩm</h5>
        <div className='d-flex justify-content-center'>
          <button className='product__delete' onClick={handleDeleteProduct}>DELETE</button>
        </div>
      </Modal>
    </div>
  )
};

export default Product;
