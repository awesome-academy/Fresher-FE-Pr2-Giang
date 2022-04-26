import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { getProducts } from '../../redux/slices/productsSlice';
import SectionHeading from './SectionHeading/SectionHeading';
import Product from '../Product/Product';
import Banner from '../Banner/Banner';

const Home = () => {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const renderDomesticProducts = (products) => {
    const domesticProducts = products.filter(product => product.type === "domestic");

    return domesticProducts;
  };

  const renderInternationalProducts = (products) => {
    const internationalProducts = products.filter(product => product.type === "international");

    return internationalProducts;
  };

  return (
    <section className='home'>
      <Banner />
      <div className='container-xl'>
        <SectionHeading title='tour trong nước' subTitle='Tour du lịch Trong nước tại Evo Tour. Hành hương đầu xuân - Tận hưởng bản sắc Việt.' />
        <div className='row'>
          {renderDomesticProducts(products).map(product => (
            <div className='col-lg-3'>
              <Product {...product} key={product.id} />
            </div>
          ))}
        </div>
        <SectionHeading title='tour nước ngoài' subTitle='Tour du lịch Nước ngoài tại Evo Tour. Du lịch 5 châu - Trải nghiệm sắc xuân thế giới.' />
        <div className='row'>
          {renderInternationalProducts(products).map((product) => (
            <div className='col-lg-3'>
            <Product {...product} key={product.id} />
          </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Home;
