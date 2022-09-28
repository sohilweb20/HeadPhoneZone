import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'

const Routing = ()=>{
    return   <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/"  element={<Home />} />
  </Routes>
}

export default Routing