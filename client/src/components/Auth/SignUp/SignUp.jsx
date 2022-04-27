import './styles.scss';
import TextInput from '../../Input/TextInput.jsx/TextInput';
import BannerSide from '../LoginBanner/BannerSide';
import { useState } from 'react';
import { validatePhoneNumber, validateNameString, validateEmail, validatePassword } from '../../../helpers/validation';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RE_PASSWORD, RE_STRING } from '../../../data/constants';

const schema = yup.object().shape({
  lastName: yup.string().matches(RE_STRING, "Only alphabets are allowed for this field").required(),
  firstName: yup.string().matches(RE_STRING, "Only alphabets are allowed for this field").required(),
  phoneNumber: yup.string().min(10).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).matches(RE_PASSWORD,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required()
});

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const loginInputs = [
    {
      label: 'họ',
      name: 'lastName',
      type: 'text',
      placeholder: 'Nhập họ',
    },
    {
      label: 'tên',
      name: 'firstName',
      type: 'text',
      placeholder: 'Nhập tên',
    },
    {
      label: 'số điện thoại',
      name: 'phoneNumber',
      type: 'text',
      placeholder: 'Nhập số điện thoại',
    },
    {
      label: 'email',
      name: 'email',
      type: 'text',
      placeholder: 'Nhập địa chỉ email',
    },
    {
      label: 'mật khẩu',
      name: 'password',
      type: 'password',
      placeholder: 'Nhập mật khẩu',
    }
  ];

  const handleSignUp = (data) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => { 
        const user = userCredential.user;

        const jsonUser = {
          accessId: user.uid,
          ...data
        }

        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jsonUser)
        });
        navigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <section className='login__container'>
      <div className='container-xl '>
        <div className='login'>
          <div className='d-flex login__inner-container'>
            <div className='col-lg-6'>
              <BannerSide />
            </div>
            <div className='col-lg-6 login__right'>
              <h5>Đăng ký</h5>
              <form onSubmit={handleSubmit(handleSignUp)}>
                {loginInputs.map((input) => (
                  <TextInput {...input} register={register} errors={errors}/>
                ))}
                <button className='login__btn' onClick={handleSignUp}>TẠO TÀI KHOẢN</button>
              </form>
              <p>Evo Tour cam kết bảo mật và sẽ không bao giờ đăng
                hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default SignUp;
