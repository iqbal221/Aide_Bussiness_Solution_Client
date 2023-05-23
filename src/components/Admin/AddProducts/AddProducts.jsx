import Sidebar from "../SideBar/SideBar";
import AddProductModal from "./AddProductForm";


function AddProducts() {
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <AddProductModal></AddProductModal>
        </div>
    );
}

export default AddProducts;