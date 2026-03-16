import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, userLogout } = useContext(AuthContext);
    // console.log(user)

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li>
            <details>
                <summary><NavLink className={"pr-2"} to={"/bills"}>Bills</NavLink></summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                    <li><NavLink to="/bills/electricity">Electricity</NavLink></li>
                    <li><NavLink to="/bills/gas">Gas</NavLink></li>
                    <li><NavLink to="/bills/internet">Internet</NavLink></li>
                    <li><NavLink to="/bills/water">Water</NavLink></li>
                    <li><NavLink to="/bills/tuition">Tuition</NavLink></li>
                    <li><NavLink to="/bills/credit card bill">Credit card</NavLink></li>
                </ul>
            </details>
        </li>
        <li><NavLink to={"/profile"}>Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">Pay Safe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {/* <Link className="btn btn-success">Register</Link> */}
                <div>{user && user.email}</div>
                {user ?
                    <button onClick={userLogout} className="btn btn-success">Logout</button>
                    :
                    <Link to={"/login"} className="btn btn-success">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;