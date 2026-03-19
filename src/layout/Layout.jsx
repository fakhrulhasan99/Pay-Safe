import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="dark"
            />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;