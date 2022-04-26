import Policy from './Policy/Policy';
import './styles.scss';
import { policies } from '../../data/policies';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__img">
        <img src='https://bizweb.dktcdn.net/100/372/532/themes/744930/assets/slider_2.jpg?1649492136927' alt=''></img>
      </div>
      <div className="banner__policy container-xl">
        {policies.map(policy => <Policy {...policy} />)}
      </div>
    </div>
  )
};

export default Banner;
