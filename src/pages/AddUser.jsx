
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const { register, handleSubmit } = useForm();
  const [addUser] = useAddUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const optimisticUser = { id: Math.random(), ...data }; // 當 API 呼叫前，先將資料加入 UI
    try {
      await addUser(optimisticUser);
      navigate('/');
    } catch (error) {
      alert('提交失敗，請重試');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder='輸入用戶名' />
      <input {...register('email', { required: true })} placeholder='輸入 Email' />
      <button type='submit'>新增</button>
    </form>
  );
}
