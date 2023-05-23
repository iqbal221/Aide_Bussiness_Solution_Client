import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar/Navbar";
import Footer from "../components/Home/Footer/Footer";
import Admin from "../pages/Admin";


const AdminDashboard = () =>{
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                <Admin></Admin>
            </Outlet>
            <Footer></Footer>
        </div>
    )
}

export default AdminDashboard;