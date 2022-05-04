import './styles.scss';

const ProductDetails = ({ mainImg, itinerary }) => {
  const renderItinerary = (itinerary) => {
    const processedIti = itinerary.split('/n');

    return (
      <div>
        <img src={mainImg} alt='productDetails-img'></img>
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
    <div className='product-details__admin'>
      {itinerary ? renderItinerary(itinerary) : <div>Chương trình đang cập nhật</div>}
    </div>
  )
};

export default ProductDetails;
