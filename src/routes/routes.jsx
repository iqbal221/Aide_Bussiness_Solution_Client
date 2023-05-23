import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/LoginAndSignup/Login/Login";
import Signup from "../pages/LoginAndSignup/Signup/Singup";
import MyCard from "../pages/MyCard";
import AllUsers from "../components/Admin/AllUsers/AllUsers";
import AdminDashboard from "../layout/AdminDashboard";
import AddProducts from "../components/Admin/AddProducts/AddProducts";
import AddUser from "../components/Admin/AddUser/AddUser";
import PrivateRoute from "./privateRoute";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/myCard',
                element:<PrivateRoute><MyCard></MyCard></PrivateRoute>
            },
            
        ]
    },
    {
        path:'/adminDashboard',
        element:<PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
        children:[
            {
                path:'/adminDashboard/allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'/adminDashboard/addProducts',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/adminDashboard/addUser',
                element:<AddUser></AddUser>
            }
        ]
    }
])

