import { useContext, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";



function Login() {  
    const { userLogin} = useContext(AuthContext);
    let Email,
    Password = useRef();
    let navigate = useNavigate();

    const handleLogin = () => {
          
    const Add_Email = Email.value;
    const Add_Password = Password.value;
      
      userLogin(Add_Email, Add_Password)
        .then((result) => {
          const user = result.user;
          console.log("user", user);
          toast.success("login Successfully.");
          navigate('/')
        })
        .catch((error) => {
          console.log(error);
          toast.error("Please Signup first");
        });
    };
    return (
        <div className="hero pt-12 pb-16 bg-base-200">
            <div className="hero-content ">
                    <div className="card w-96  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={(input) => Email = input} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={(input) => Password = input} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleLogin} className="btn btn-primary">Login</button>
                            </div>
                            <small className="text-center">Have not any account? please <Link className="text-blue-500 text-md font-bold" to='/signup'>Signup</Link></small>
                        </div>
                    </div>
        
            </div>
        </div>
    );
}

export default Login;