import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ListProduct from '../../Components/ListProduct/ListProduct'
import {Routes,Route} from "react-router-dom"
import AddProduct from '../../Components/AddProduct/AddProduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/listProduct' element={<ListProduct></ListProduct>}></Route>
      </Routes>
    </div>
  )
}

export default Admin
