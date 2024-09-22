import { Outlet, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

import './layout.sass'

const Layout = () => {
    return (
        <>

            <Outlet />
            <nav className="menu">
                <ul>
                    <li>
                        <NavLink to="/" end><FaHome /><span>Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/friends"><FaUserFriends /><span>Friends</span></NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Layout;