import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'
import ProductManagementPage from './pages/admin/product/ProductManagementPage'
import Home from './pages/layout/Home'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetail'
import AdminLayout from './pages/admin/adminlayout/AdminLayout'
import DashBoard from './pages/admin/DashBoard'
import AddNewProductPage from './pages/admin/product/AddNewProductPage'
import UpdateProductPage from './pages/admin/product/UpdateProductPage'
import axios from 'axios'
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products').then(response => response.json()).then((data) => setData(data))
  },[])

  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home />}> 
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage products={data}/>} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage />} />
            <Route path='add' element={<AddNewProductPage />} />
            <Route path=':id/edit' element={<UpdateProductPage />} />


          </Route>
        </Route>

      </Routes> 
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={data} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin/products/add' element={<AddNewProductPage />} />
        <Route path='/admin/products' element={<ProductManagementPage />} />
        <Route path='/admin/products/:id/edit' element={<UpdateProductPage />} />
      </Routes> */}
    </div>
  )
}

export default App
