import AddProducts from "../../components/Admin/AddProducts/AddProducts";
import AddUser from "../../components/Admin/AddUser/AddUser";
import AllUsers from "../../components/Admin/AllUsers/AllUsers";



function Admin() {
    return (
        <div>
            <AllUsers></AllUsers>
            <AddUser></AddUser>
            <AddProducts></AddProducts>
        </div>
        
    );
}

export default Admin;