import './styles.scss';
import Banner from '../../../assets/images/account-banner.jpg';

const BannerSide = () => {
  return (
    <div className='login-banner'>
      <img src={Banner}></img>
      <div>
        <h5>quyền lợi thành viên</h5>
        <p><i class="fa-solid fa-circle-check"></i> Tour chọn lọc chất lượng nhất</p>
        <p><i class="fa-solid fa-circle-check"></i> Đội ngũ tư vấn chi tiết và tận tình</p>
        <p><i class="fa-solid fa-circle-check"></i> Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</p>
      </div>
    </div>
  )
};

export default BannerSide;
