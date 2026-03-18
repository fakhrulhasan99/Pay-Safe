import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import App from "../App";
import Layout from "../layout/Layout";
import Bills from "../pages/Bills";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BillDetails from "../pages/BillDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home,
                loader: async () => {
                    const [featuresRes, offersRes] = await Promise.all([
                        fetch("/features.json"),
                        fetch("/offers.json")
                    ]);

                    const features = await featuresRes.json();
                    const offers = await offersRes.json();

                    return { features, offers };
                },
            },
            {
                path: "/bills",
                element:
                    <PrivateRoute>
                        <Bills />
                    </PrivateRoute>,
                loader: async () => {
                    const res = await fetch("/bills.json");
                    return res.json();
                }
            },
            {
                path: "/bills/:category",
                element:
                    <PrivateRoute>
                        <Bills />
                    </PrivateRoute>,
                loader: async () => {
                    const res = await fetch("/bills.json");
                    return res.json();
                }
            },
            {
                path: "/bill-details",
                element:
                    <PrivateRoute>
                        <BillDetails />
                    </PrivateRoute>
            },
            {
                path: "/profile",
                Component: Profile,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            }
        ]
    },
    {
        path: "/*",
        element: <h1>error404</h1>
    },
])