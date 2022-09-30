import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const Routing = ()=>{
    return   <Routes>
    <Route   path="/login" element={<Login />} />
    <Route  path="/"  element={<Home />} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path='/Signup' element={<Signup/>}/>
  </Routes>
}

export default Routing