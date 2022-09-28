import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'

const Routing = ()=>{
    return   <Routes>
    <Route   path="/login" element={<Login />} />
    <Route  path="/"  element={<Home />} />
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
}

export default Routing