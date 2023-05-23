import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Home/Footer/Footer";

const Main = () =>{
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                <Home></Home>
            </Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Main;