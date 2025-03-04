import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';
import AddUser from './pages/AddUser';
// 再 加入 tab2 的頁面設計
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element={<UserDetail />} />
        <Route path='/add-user' element={<AddUser />} />
      </Routes>
    </Router>
  );
}