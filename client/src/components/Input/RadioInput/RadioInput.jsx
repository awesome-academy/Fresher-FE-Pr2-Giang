import './styles.scss';

const RadioInput = ({ text1, text2 }) => {
  return (
    <div className='radio-input'>
      <div className='radio-input__left'>
        <input type='radio'></input>
        <p>{text1}</p>
      </div>
      <div className='radio-input__right'>
        <p>{text2}</p> 
      </div>
    </div>
  )
};

export default RadioInput;
