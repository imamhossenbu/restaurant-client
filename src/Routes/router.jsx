import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers";
import ErrorPage from "../pages/ErrorPage";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/AddItem";
import ManageAllItems from "../pages/Dashboard/ManageAllItems";
import UpdateItems from "../pages/Dashboard/UpdateItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/my-cart',
                element: <MyCart></MyCart>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'payment-history',
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },



            // admin routes
            {
                path:'admin-home',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: '/dashboard/all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
            ,
            {
                path: '/dashboard/add-items',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: '/dashboard/manage-items',
                element: <AdminRoute><ManageAllItems></ManageAllItems></AdminRoute>,
            },
            {
                path: '/dashboard/update-items/:id',
                element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>,
            }
        ]
    }
])