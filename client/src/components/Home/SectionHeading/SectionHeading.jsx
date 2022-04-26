import './styles.scss';

const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
};

export default SectionHeading;
