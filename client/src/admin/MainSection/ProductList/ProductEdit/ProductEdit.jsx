import './styles.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../../../../components/Input/TextInput.jsx/TextInput';
import Modal from '../../../../components/Modal/Modal';
import useToggle from '../../../../customHooks/useToggle';
import { createProduct, editProduct, addProduct } from '../../../../redux/slices/productsSlice';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  title: yup.string().required(),
  transportation: yup.string().required(),
  startingDate: yup.string().required(),
  duration: yup.string().required(),
  price: yup.number().required(),
  mainImg: yup.string().required(),
  itinerary: yup.string(),
  type: yup.string().required(),
});

const ProductEdit = ({ title, startingDate, duration, mainImg, price, itinerary, type, id, isAddFunction, transportation }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [isEditSuccess, setIsEditSuccess] = useToggle();
  const dispatch = useDispatch();

  const editInputs = [
    {
      label: 'tiêu đề',
      name: 'title',
      type: 'text',
      placeholder: 'Nhập tiêu đề',
      value: title
    },
    {
      label: 'phương tiện',
      name: 'transportation',
      type: 'text',
      placeholder: 'Nhập các loại hình phương tiện',
      value: transportation
    },
    {
      label: 'ngày khởi hành',
      name: 'startingDate',
      type: 'text',
      placeholder: 'Nhập ngày khởi hành',
      value: startingDate
    },
    {
      label: 'thời gian',
      name: 'duration',
      type: 'text',
      placeholder: 'Nhập thời gian tour',
      value: duration
    },
    {
      label: 'giá',
      name: 'price',
      type: 'text',
      placeholder: 'Nhập giá',
      value: price
    },
    {
      label: 'hình ảnh',
      name: 'mainImg',
      type: 'text',
      placeholder: 'Nhập link hình ảnh',
      value: mainImg
    },
    {
      label: 'chương trình tour',
      name: 'itinerary',
      type: 'text',
      placeholder: 'Nhập chương trình tour',
      value: itinerary
    },
    {
      label: 'loại tour',
      name: 'type',
      type: 'text',
      placeholder: 'Nhập loại tour',
      value: type
    }
  ];

  const handleProduct = (data) => {
    if(isAddFunction) {
      const newProduct = {...data, transportation: data.transportation.split(',')};
      dispatch(createProduct(newProduct));
    } else {
      const editedProduct = {...data, transportation: data.transportation.split(',')};
      dispatch(editProduct({id, ...editedProduct}))
    }
    setIsEditSuccess();
  };

  return (
    <form className='product-edit' onSubmit={handleSubmit(handleProduct)}>
      {editInputs.map(input => (
        <TextInput {...input} register={register} errors={errors} />
      ))}
      <button type='submit' className='edit-btn' onClick={() => {
        handleProduct();
      }}>{isAddFunction ? 'ADD' : 'EDIT'}</button>
      <Modal open={isEditSuccess} toggle={setIsEditSuccess}>
        <h4>{isAddFunction ? 'Bạn đã thêm sản phẩm thành công!' : 'Bạn đã chỉnh sửa sản phẩm thành công!'}</h4>
      </Modal>
    </form>
  )
};

export default ProductEdit;
