import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from '../components/Loading';

const Layout = () => {

    const { state } = useNavigation();
    console.log(state)

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="dark"
            />
            <Navbar />
            {state == "loading" ? <Loading /> : <Outlet />}
            <Footer />
        </div>
    );
};

export default Layout;