import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MainLayout from './layouts/MainLayout'
import ProductsTimeRevolution from './pages/ProductsTimeRevolution'
import ProductInfoPage from './pages/ProductInfoPage'
import ProductSuperAqua from './pages/ProductSuperAqua'
import About from './pages/About'
import ShoppingCartPage from './pages/ShoppingCartPage'
import AuthLayout from './layouts/AuthLayout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout><LandingPage /></MainLayout>} />
        <Route path='/TimeRevolution' element={<MainLayout><ProductsTimeRevolution /></MainLayout>} />
        <Route path='TR/ProductInfo/:id' element={<MainLayout><ProductInfoPage></ProductInfoPage></MainLayout>} />
        <Route path='SA/ProductInfo/:id' element={<MainLayout><ProductInfoPage></ProductInfoPage></MainLayout>} />
        <Route path='/SuperAqua' element={<MainLayout><ProductSuperAqua /></MainLayout>} />
        <Route path='/About' element={<MainLayout><About /></MainLayout>} />
        <Route path='/ShoppingCart' element={<MainLayout><ShoppingCartPage /></MainLayout>} />
        <Route path='/Login' element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path='/Register' element={<AuthLayout><RegisterPage /></AuthLayout>} />
      </Routes>
    </>
  )
}

export default App
