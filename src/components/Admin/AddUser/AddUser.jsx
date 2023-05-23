import Sidebar from "../SideBar/SideBar";
import AddUserForm from "./AddUserForm";


function AddUser() {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <AddUserForm></AddUserForm>
        </div>
    );
}

export default AddUser;