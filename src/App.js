import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Register from './pages/Register';
import Shop from './pages/Shop'
import VerifyEmail from './pages/VerifyEmail'
import AwaitEmailVerify from './pages/AwaitEmailVerify';
import Detail from './pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Shop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:email/:token" element={<VerifyEmail />} />
        <Route path="/awaitemailverify" element={<AwaitEmailVerify />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
