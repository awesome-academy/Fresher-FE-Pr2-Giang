import './styles.scss';

const Policy = ({ img, title, content }) => {
  return (
    <div className="policy">
      <div className="policy__img">
        <img src={img} alt=""></img>
      </div>
      <div className="policy__info">
        <p>{title}</p>
        <small>{content}</small>
      </div>
    </div>
  )
};

export default Policy;
