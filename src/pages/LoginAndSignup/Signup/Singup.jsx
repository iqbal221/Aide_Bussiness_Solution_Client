import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Create from "../../../APIServices/SignupAPI";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";



function Signup() {
    const { createUser } = useContext(AuthContext);
    
    let Name,Email,Password = useRef();
    let navigate = useNavigate();

    
    const handleSignup = () =>{
    const Add_Name = Name.value;
    const Add_Email = Email.value;
    const Add_Password = Password.value;
    console.log(Add_Name, Add_Email, Add_Password)

      createUser(Add_Email, Add_Password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);
        saveUser(Add_Name, Add_Email, Add_Password);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    const saveUser = (Add_Name,Add_Email,Add_Password) => {
        Create(Add_Name, Add_Email, Add_Password).then((result) => {
        if (result === true) {
          toast.success("User Created Succesfully")
          navigate('/')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration failed',
          })
        }
      });
    }
    
   
    return (
        <div className="hero pt-12 pb-16 bg-base-200">
            <div className="hero-content ">
     
                    <div className="card w-96  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input ref={(input) => Name = input}  type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={(input) => Email = input}  type="text" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={(input) => Password = input} required type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-4">
                                <button onClick={handleSignup} className="btn btn-primary">Sign up</button>
                            </div>
                            <small className="text-center">Already have an account? please <Link className="text-blue-600 font-bold" to='/login'>Login</Link></small>
                        </div>
                    </div>
         
            </div>
        </div>
    );
}

export default Signup;