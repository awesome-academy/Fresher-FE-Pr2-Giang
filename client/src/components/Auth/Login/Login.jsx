import './styles.scss';
import TextInput from '../../Input/TextInput.jsx/TextInput';
import BannerSide from '../LoginBanner/BannerSide';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setUser } from '../../../redux/slices/usersSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RE_PASSWORD } from '../../../data/constants';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).matches(RE_PASSWORD,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required()
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState('');

  const { users, user } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const loginInputs = [
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

  const handleSignIn = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const signedInUser = users.find(registedUser => registedUser.accessId === user.uid);
        dispatch(setUser(signedInUser));
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
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
              <h5>Đăng nhập</h5>
              {error && <div className='error-message'>{error.substring(5).split('-').join(' ')} ! please try again</div>}
              <form onSubmit={handleSubmit(handleSignIn)}>
                {loginInputs.map((input) => (
                  <TextInput  {...input} register={register} errors={errors} />
                ))}
                <button type='submit' className='login__btn' onClick={handleSignIn}>ĐĂNG NHẬP</button>
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

export default Login;
