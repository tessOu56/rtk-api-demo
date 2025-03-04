import { useGetUsersQuery } from '../api/userApi';
import { Link } from 'react-router-dom';

export default function Home() {
  // RTK query 基礎應用
  // const { data: users, isLoading } = useGetUsersQuery();
  // RTK query 進階應用：每 5 秒自動重新獲取數據
  const { data: users, isLoading, refetch } = useGetUsersQuery(undefined, {  // 新增修改後回來列表頁面會有更新
    refetchOnMountOrArgChange: true, // add 或 update 用戶後自動重新獲取數據
    // refetchInterval: 5000, // 每 5 秒自動重新獲取數據，頁面要幾秒更新？
    // refetchOnReconnect: true, // 斷線重連後自動重新獲取數據
    // refetchOnFocus: true, // 頁面重新獲取焦點後自動重新獲取數據
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>用戶列表</h1>
      <button onClick={refetch}>手動刷新</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Link to='/add-user'>新增用戶</Link>
    </div>
  );
}