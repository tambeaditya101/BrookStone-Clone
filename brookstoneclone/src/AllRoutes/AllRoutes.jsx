import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../pages/Home'
import Massage from '../pages/Massage'
import Sleep from '../pages/Sleep'
import  Wellness  from '../pages/Wellness'
import Notfound from '../pages/Notfound'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import PrivateRoute from '../AllRoutes/PrivateRoute'
import SingleProdPage from '../pages/SingleProdPage'
import SingleMassagePage from '../pages/SingleMassagePage'
import SingleWellnessPage from '../pages/SingleWellnessPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/massage' element={<Massage/>} ></Route>
            <Route path='/wellness' element={<Wellness/>}></Route>
            <Route path='/sleep' element={<Sleep/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/cart' element={
            <PrivateRoute>
            <Cart/>
            </PrivateRoute>
            }></Route>
             <Route path='/wishlist' element={
            <PrivateRoute>
            <Wishlist/>
            </PrivateRoute>
            }></Route>
            <Route path='/sleep/:id' element={<SingleProdPage/>}></Route>
            <Route path='/massage/:id' element={<SingleMassagePage/>}></Route>
            <Route path='/wellness/:id' element={<SingleWellnessPage/>}></Route>
            <Route path='*' element={<Notfound/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes