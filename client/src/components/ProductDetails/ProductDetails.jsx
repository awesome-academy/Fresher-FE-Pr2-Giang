import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetailsHeading from './ProductDetails_Heading/ProductDetails_Heading';
import ProductDetailsPolicy from './ProductDetails_Policy/ProductDetails_Policy';
import './styles.scss';
import { convertMoney } from '../../helpers/convertMoney';
import ProductDetailsOrder from './ProductDetails_Order/ProductDetailsOrder';
import { useEffect } from 'react';
import { getProducts } from '../../redux/slices/productsSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const product = products.find(product => product.id === +id);

  const renderItinerary = (itinerary) => {
    const processedIti = itinerary.split('/n');

    return (
      <div>
        <img src={product.mainImg} alt='productDetails-img'></img>
        <ProductDetailsHeading text='chương trình tour' />
        {processedIti.map(sentence => {
          if(sentence.includes("NGÀY")){
            return <h6>{sentence}</h6>
          } else if(sentence.includes("https")){
            return <img src={sentence} alt='product-img'></img>
          } else {
            return <p>{sentence}</p>
          }
        })}
      </div>
    )
  };

  return (
    <section className='product-details'>
      <div className='container-xl'>
        <div className='row'>
          <div className='col-lg-8 product-details__left'>
            {product?.itinerary ? renderItinerary(product.itinerary) : <div className='product-not-found'>Sản phẩm hiện chưa có chương trình cụ thể</div>}
            {product?.itinerary && (
              <div>
                <ProductDetailsPolicy />
                <ProductDetailsOrder price={product.price} />
              </div>
            )}
          </div>
          <div className='col-lg-4'>
            <div className='product-details__right'> 
              <h4>{product?.title}</h4>
              <h3>{product && convertMoney(product.price)}</h3>
              <button className='print-btn'><i class="fa-solid fa-print"></i> In chương trình tour</button>
              {product && product.transportation.map(transportType => {
                if(transportType === 1){
                  return <p><i class="fa-solid fa-bus-simple"></i>Di chuyển: <span>Ô tô</span></p>
                } else if(transportType === 2){
                  return <p><i class="fa-solid fa-ship"></i>Di chuyển: <span>Tàu thủy</span></p>
                } else {
                  return <p><i class="fa-solid fa-plane"></i>Di chuyển: <span>Máy bay</span></p>
                }
              })}
              <p><i class="fa-solid fa-clock"></i>Lịch khởi hành: <span>{product?.startingDate}</span></p>
              <p><i class="fa-solid fa-calendar"></i>Thời gian: <span>{product?.duration}</span></p>
              <button className='order-btn'>ĐẶT TOUR</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetails;
