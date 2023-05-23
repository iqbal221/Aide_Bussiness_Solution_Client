import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import AddUser from "../../../APIServices/AddUserAPI";
import { useNavigate } from "react-router-dom";

function AddUserForm() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const handleAddUser=(data)=>{
        
        const name = data.name;
        const email = data.email;
        const role = data.role;
        const plan = data.plan;
        const status = data.status;

        
        AddUser(name, email, role,plan,status).then((result) => {
            if (result === true) {
                toast.success("Added User Succesfully")
                navigate('/adminDashboard/allUsers')
            } else {
                toast.error("User do not added")
            }
          });
    }
    
    return (
        <div className="card card-compact p-4  mt-14 h-96 w-2/5 mx-auto bg-base-100 shadow-lg p-2">
            <form onSubmit={handleSubmit(handleAddUser)}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
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
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                            required: "Email Address is required",
                            })}
                            type="email"
                            className="input input-bordered input-default w-full "
                        />
                        {errors.email && (
                            <p className="text-red-500" role="alert">
                            {errors.email?.message}
                            </p>
                        )}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <select
                            type="text"
                            {...register("role")}
                            className="select select-bordered w-full "
                            defaultValue={"Admin"}
                        >
                            <option>Select</option>
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
                            defaultValue={"Team"}
                        >
                            <option>Select</option>
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
                            {...register("status")}
                            className="select select-bordered w-full "
                            defaultValue={"Pending"}
                        >
                            <option>Select</option>
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
                        className="btn btn-success w-full mt-4"
                        type="submit"
                        value="Add User"
                        />
            </form>
        </div>
          
    );
}

export default AddUserForm;

