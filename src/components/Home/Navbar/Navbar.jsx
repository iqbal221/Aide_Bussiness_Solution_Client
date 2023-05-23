import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar =() =>{
    const {user,logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(user)

    const handleLogout = () => {
        logOut()
          .then(() => {
            navigate("/login");
          })
          .catch((error) => console.log(error));
      };

    return (
        <div className="">
            <div className="navbar bg-gray-300 px-14 py-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex={0} className="text-gray-800 text-xl menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/myCard'>My Card</Link></li>
                            <li><Link to='/admin'>Admin</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>SignUp</Link></li>
                        </ul>
                    </div>
                <Link className="btn btn-ghost normal-case text-violet-500 font-bold text-2xl">Zahed Iqbal</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="text-gray-800 text-md menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/myCard'>My Cart</Link></li>
                        <li><Link to='/adminDashboard/allUsers'>Admin</Link></li>
            
                        {
                            user?.email ? (
                            <>
                                
                                <li><Link onClick={handleLogout} to='/logout'>Logout</Link></li>
                            </>
                            
                            ) : (
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>SignUp</Link></li>
                            </>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;