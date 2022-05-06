import './styles.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RE_PASSWORD } from '../../../../data/constants';
import TextInput from '../../../Input/TextInput.jsx/TextInput';
import { useSelector } from 'react-redux';
import { getAuth, updatePassword } from "firebase/auth";
import useToggle from '../../../../customHooks/useToggle';
import UserTab from '../UserTab';

const schema = yup.object().shape({
  oldPassword: yup.string().min(8).matches(RE_PASSWORD,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required(),
  newPassword: yup.string().min(8).matches(RE_PASSWORD,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").required(),
  confirmNewPassword: yup.string().oneOf([yup.ref('newPassword')]).required(),
});

const ChangePassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { user } = useSelector(state => state.users);
  const [updatedSuccessfully, setUpdatedSuccessfully] = useToggle();

  const changePassword = [
    {
      label: 'mật khẩu cũ',
      name: 'oldPassword',
      type: 'password',
      placeholder: 'Mật khẩu cũ',
    },
    {
      label: 'mật khẩu mới',
      name: 'newPassword',
      type: 'password',
      placeholder: 'Mật khẩu mới',
    },
    {
      label: 'xác nhận lại mật khẩu mới',
      name: 'confirmNewPassword',
      type: 'password',
      placeholder: 'xác nhận lại mật khẩu mới',
    }
  ];

  const handleChangePassword = (data) => {
    if(data.oldPassword === user.password) {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      updatePassword(currentUser, data.newPassword).then(() => {
        fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({password: data.newPassword})
      });
        setUpdatedSuccessfully();
      }).catch((error) => {
        console.log(error.message);
      });
    }
  };

  return (
    <UserTab title='đổi mật khẩu'>
      <div className='change-password'>
        {updatedSuccessfully && <div className='update-success'>Đổi mật khẩu thành công</div>}
        <p>Để đảm bảo tính bảo mật vui lòng đặt mật khẩu ít nhất 8 ký tự bao gồm it nhất 1 ký tự in hoa, 1 số và 1 ký tự đặc biệt.</p>
        <form className='change-password__form' onSubmit={handleSubmit(handleChangePassword)}>
          {changePassword.map((input) => (
            <TextInput {...input} register={register} errors={errors} />
          ))}
          <button type='submit' className='change-password__btn' onClick={handleChangePassword}>ĐẶT LẠI MẬT KHẨU</button>
        </form>
      </div>
    </UserTab>
  )
};

export default ChangePassword;
