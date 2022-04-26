import ProductDetailsHeading from '../ProductDetails_Heading/ProductDetails_Heading';
import './styles.scss';

const ProductDetailsInfo = ({ subTitles }) => {
  return (
    <div>
      {subTitles.map(title => <p>{title}</p>)}
    </div>
  )
};

const ProductDetailsPolicy = () => {
  const policies = [
    {
      title: 'Giá tour bao gồm',
      subTitles: [
        '- Chi phí xe máy lạnh phục vụ theo chương trình.',
        '- Chi phí ăn - uống theo chương trình',
        '- Chi phí khách sạn tiêu chuẩn 2 khách/phòng.',
        '- Chi phí tham quan, hướng dẫn viên tiếng Việt',
        '*Quà tặng: Nón, nước suối, khăn lạnh, viết…'
      ]
    },
    {
      title: 'Giá tour không bao gồm',
      subTitles: [
        '- Ăn uống ngoài chương trình, giặt ủi, điện thoại và các chi phí cá nhân',
        '- Chi phí di chuyển và xem Show nhạc kịch nước Huyền Thoại Làng Chài',
        '- Chi phí tắm bùn khoáng các loại',
      ]
    },
    {
      title: 'Vé trẻ em',
      subTitles: [
        '- Vé tour: Trẻ em từ  6 đến 11 tuổi mua một nửa giá vé người lớn, trẻ em trên 11 tuổi mua vé như người lớn.',
        '- Đối với trẻ em dưới 6 tuổi, gia đình tự lo cho bé ăn ngủ và tự trả phí tham quan (nếu có). Hai người lớn chỉ được kèm một trẻ em. Từ trẻ thứ 2 trở lên, mỗi em phải 50% giá vé người lớn.',
        '- Tiêu chuẩn 50% giá tour bao gồm: Suất ăn, ghế ngồi và ngủ ghép chung với gia đình.',
      ]
    }
  ]

  return (
    <div>
      <ProductDetailsHeading text='chính sách tour' />
      {policies.map(({ title, subTitles }) => (
        <div>
          <h6>{title}</h6>
          <ProductDetailsInfo subTitles={subTitles} />
        </div>
      ))}
    </div>
  )
};

export default ProductDetailsPolicy;
