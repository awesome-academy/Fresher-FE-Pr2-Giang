import { useEffect, useState } from 'react';
import './styles.scss';

const TextInput = ({ label, type, placeholder, name, register, errors, value }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(errors[name]?.message);
  }, [errors]);

  return (
    <div className='text-input'>
      <label>{label}</label>
      {register ? <input type={type} defaultValue={value} name={name} placeholder={placeholder} {...register(name)}></input> : <input type={type} name={name} placeholder={placeholder}></input>}
      {errors[name] && <div className='error-message'>{errors[name]?.message}</div>}
    </div>
  )
};

export default TextInput;
