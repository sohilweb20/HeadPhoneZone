import { Link, NavLink } from "react-router-dom"

const Header = ()=>{
    return <header>
        <nav>
            <ul>
            <li>
                    <NavLink to={'/'} >Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/login'} >Login</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header