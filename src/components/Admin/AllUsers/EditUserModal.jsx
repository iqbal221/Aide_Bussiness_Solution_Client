import { useEffect} from "react";
import { useForm } from "react-hook-form";



function EditUserModal(userById) {

    const {
        register,
        handleSubmit,
      } = useForm();

    // get user by id from database
    

    const handleUpdateUser=(event)=>{
        event.preventDefault()
        console.log(event.target,)
        
        // const name = data.name;
        // const email = data.email;
        // const role = data.role;
        // const plan = data.plan;
        // const status = data.status;

        
        // UpdateUser(name, email, role,plan,status,id).then((result) => {
        //     if (result === true) {
        //         toast.success("Added User Succesfully")
        //         history.replace('/adminDashboard/allUsers')
        //     } else {
        //         toast.error("User do not added")
        //     }
        //   });
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(handleUpdateUser)}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="input input-bordered input-default w-full "
                                    defaultValue={userById?.userById?.Name}
                                />
                               
                            </div>
                            
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email", {
                                    required: "Email Address is required",
                                    })}
                                
                                    type="email"
                                    className="input input-bordered input-default w-full "
                                    defaultValue={userById?.userById?.Email}
                                    required
                                />
                              
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select
                                    type="text"
                                  
                                    {...register("role")}
                                    className="select select-bordered w-full "
                                    defaultValue={userById?.userById?.Role}
                                >
                                    
                                    <option>Admin</option>
                                    <option>Auditor</option>
                                    <option>Author</option>
                                    <option>Maintainer</option>
                                    <option>Subscriber</option>
                                </select>
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Plan</span>
                                </label>
                                <select
                                    type="text"
                                   
                                    {...register("plan")}
                                    className="select select-bordered w-full "
                                    defaultValue={userById?.userById?.Plan}
                                
                                >
                                    
                                    <option>Enterprise</option>
                                    <option>Team</option>
                                    <option>Company</option>
                                    <option>Basic</option>
                                </select>
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <select
                                    type="text"
                                    name="status"
                                    className="select select-bordered w-full "
                                    defaultValue={userById?.userById?.Status}
                                >
                                    
                                    <option>Pending</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Add User Image</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-md w-full" />
                            </div>    
                        </div>
                            <input
                            // onClick={()=>(userById?.userById?._id)}
                            className="btn btn-success w-full mt-4"
                            type="submit"
                            value="Update User"
                            
                            />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditUserModal;