import AddProduct from "../../../APIServices/AddProductAPI";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function AddProductModal() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const handleAddProduct=(data)=>{ 
        const Name = data.name;
        const Price = data.price;
        // const Image = data.image;
        console.log(Name, Price)
        AddProduct(Name, Price).then((result) => {
            console.log(result)
            if (result === true) {
                toast.success("Product added Succesfully")
                navigate('/')
            } else {
                toast.error("Product do not added")
            }
          });
    }
    return (
        <div className="card card-compact h-96 w-96 mt-20 p-6 mx-auto bg-base-100 shadow-lg p-3">
            <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Product name is required" })}
                            className="input input-bordered input-default w-full "
                        />
                        {errors.name && (
                            <p className="text-red-500" role="alert">
                            {errors.name?.message}
                            </p>
                        )}
                    </div>
                    
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product price</span>
                        </label>
                        <input
                            {...register("price", {
                            required: "Product price is required",
                            })}
                            type="number"
                            className="input input-bordered input-default w-full "
                        />
                        {errors.price && (
                            <p className="text-red-500" role="alert">
                            {errors.price?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Add Product Image</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-md w-full" />
                    </div>    
                        <input
                        className="btn btn-success w-full mt-6"
                        type="submit"
                        value="Add Product"
                        />
            </form>
              
        </div>
    );
}

export default AddProductModal;