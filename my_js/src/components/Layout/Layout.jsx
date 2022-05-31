import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return <>
    <nav>
        <ul>
            <li><Link to="/math">Math</Link></li>
            <li><Link to="/object">Object</Link></li>            
        </ul>
    </nav>
    <Outlet />
    </>
}
export default Layout