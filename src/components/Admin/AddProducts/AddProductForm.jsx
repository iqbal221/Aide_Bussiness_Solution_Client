import AddProduct from "../../../APIServices/AddProductAPI";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UploadProduct from "../../Home/UploadProduct/UploadProduct";
import {useState} from 'react'






function AddProductModal() {
    
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    // const IMAGE_HOSTING_KEY = "3a18e766256285294071cef60adb0051";
    


    const handleAddProduct=(data)=>{ 
        const Name = data.name;
        const Price = data.price;

        // image save to imagebb
        const image = data.image[0]
        const formData = new FormData()
        formData.append("image",image)
        console.log(image)

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=3a18e766256285294071cef60adb0051`
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imageData=>{
            console.log(imageData.data.url)

            // Name Price save to database
            console.log(Name,Price,imageData.data.url)
            AddProduct(Name,Price,imageData.data.url).then((result) => {
            console.log(result)
            if (result === true) {
                toast.success("Product added Succesfully")
                navigate('/')
            } else {
                toast.error("Product do not added")
            }
         
        })
        });
        
        // Name Price save to database
        // console.log(Name,Price)
        // AddProduct(Name,Price).then((result) => {
        //     console.log(result)
        //     if (result === true) {
        //         toast.success("Product added Succesfully")
        //         navigate('/')
        //     } else {
        //         toast.error("Product do not added")
        //     }
         
        // })
    }
    // console.log(image)

 

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
                        <input 
                        {...register("image", {
                        required: "Product price is required",
                        })}
                        type="file" 
                        className="file-input file-input-bordered file-input-md w-full" 
                        />
                    </div>    
                    {/* <div className="form-control w-full"> */}
                        <input
                        className="btn btn-success w-full mt-6"
                        type="submit"
                        value="Add Product"
                        />
                    {/* </div> */}
            </form>
            
        </div>
    );
}

export default AddProductModal;