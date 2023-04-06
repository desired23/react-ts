import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductManagement from './pages/admin/product/ProductManagement'
import AddProduct from './pages/admin/product/AddProduct'
import UpdateProduct from './pages/admin/product/UpdateProduct'
import { IProduct } from './types/product'
import { addProduct, delProduct, editProduct, getAllProduct } from './api/product'
import { ICategory } from './types/category'
import { getAllCategory } from './api/categories'
import ULayout from './pages/layout/Layout'
import SignUp from './pages/SignUp'
import { IUser } from './types/user'
import { addUser, getAllUsers } from './api/user'





function App() {
  const [data, setData] = useState<IProduct[]>([])
  const [cate, setCate] = useState<ICategory[]>([])

  useEffect(() => {
    getAllProduct().then(({data})=>setData(data));
    getAllCategory().then(({data})=>setCate(data));
  },[]);
  const onHandleRemove = (id: number) => {
    delProduct(id).then(() => setData(data.filter((item: IProduct) => item.id !== id)))
  }
  const onHandleAdd = (newItem: IProduct)  => {
    addProduct(newItem).then(() => getAllProduct().then(({data})=>setData(data)))
  }
  const onHandleUpdate = (eItem: IProduct)  => {
    editProduct(eItem).then(() => getAllProduct().then(({data})=>setData(data)))
  }
  const onHandleSignUp = (obj: IUser) => {
    addUser(obj)
  }
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element ={<ULayout/>}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<Products products={data} onRemove={onHandleRemove} />} />
          <Route path='products/:id' element={<ProductDetail products={data} />} />
          
        </Route>
        <Route path='signup' element={<SignUp onSignUp={onHandleSignUp}/>}/>
        <Route path='/admin'>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagement products={data} onRemove = {onHandleRemove} />} />
            <Route path='add' element={<AddProduct onAdd ={onHandleAdd} categories={cate}/>} />
            <Route path=':id/update' element={<UpdateProduct products={data} categories={cate} onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
