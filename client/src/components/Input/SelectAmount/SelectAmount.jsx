import './styles.scss';

const SelectAmount = ({ value, setAmount }) => {
  const handleAmount = (e) => {
    if(e.target.value >= 0){
      console.log(e.target.value);
      setAmount(e.target.value);
    }
  };

  return (
    <div className='amount'>
      <input type='number' value={value} onChange={handleAmount}></input>
    </div>
  )
};

export default SelectAmount;
