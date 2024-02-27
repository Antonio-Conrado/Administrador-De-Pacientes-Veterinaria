import { BrowserRouter, Route, Routes } from 'react-router-dom';


import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import OlvidePassword from './pages/OlvidePassword';
import Registrar from './pages/Registrar';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import NuevoPassword from './pages/NuevoPassword';

import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='reset-password' element={<OlvidePassword />} />
            <Route path='reset-password/:token' element={<NuevoPassword />} />
            <Route path='registrar' element={<Registrar />} />
            <Route path='confirmar-cuenta/:id' element={<ConfirmarCuenta />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
