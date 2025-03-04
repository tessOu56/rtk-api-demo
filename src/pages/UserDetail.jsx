import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUserByIdQuery, useUpdateUserMutation } from "../api/userApi";
import { useForm } from "react-hook-form";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading, error } = useGetUserByIdQuery(id);
  const [updateUser] = useUpdateUserMutation();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset({ name: user.name, email: user.email });
    }
  }, [user, reset]);

  if (isLoading) return <p>Loading user details...</p>;
  if (error) return <p>⚠️ 無法載入用戶資訊: {error.message}</p>;

  const onSubmit = async (data) => {
    try {
      await updateUser({ id, ...data }).unwrap(); // 確保 API 完成後才跳轉
      navigate("/");
    } catch (error) {
      alert(`更新失敗: ${error.message}`); // 顯示錯誤訊息
    }
  };

  return (
    <div>
      <h1>編輯用戶</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>姓名：</label>
        <input {...register("name", { required: true })} />
        <label>Email：</label>
        <input {...register("email", { required: true })} />
        <button type="submit">提交修改</button>
      </form>
    </div>
  );
}
