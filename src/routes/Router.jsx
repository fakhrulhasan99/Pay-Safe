import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import App from "../App";
import Layout from "../layout/Layout";
import Bills from "../pages/Bills";
import Profile from "../pages/Profile";

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
                Component: Bills,
                loader: () => fetch("bills.json"),
            },
            {
                path: "/profile",
                Component: Profile,
            }
        ]
    },
    // {
    //     path: "/auth",
    //     Component: Navbar,
    // },
    {
        path: "/*",
        element: <h1>error404</h1>
    },
])