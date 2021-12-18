import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
