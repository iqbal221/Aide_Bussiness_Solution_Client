import { useEffect, useState } from "react";
import Sidebar from "../SideBar/SideBar";
import AddUserModal from "./AddUserModal";
import GetUser from "../../../APIServices/GetUserAPI";
import { useNavigate} from "react-router-dom";
import { toast } from "react-hot-toast";



function AllUsers() {
    const [users,setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        GetUser().then((result) => {
            setUsers(result);
            navigate('/adminDashboard/allUsers')
          })
        },[navigate])



    const handleDeleteUser = (id) => {
          fetch(`https://aide-bussiness-solution-server.vercel.app/api/v1/DeleteUser/${id}`,{
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.data.acknowledged) {
                toast.success("Deleted Successfully");
              }
              const remainingUsers = users?.filter(
                (user) => user._id !== id
              );
              setUsers(remainingUsers);
            });
      };

    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <div className="ml-32 mt-10">
                <h1 className="text-success text-3xl mb-10 font-semibold">All Users</h1> 
                <div className="card card-compact bg-base-100 shadow-lg p-3">
                <div className="mb-4 flex justify-between">
                    <div className="flex">
                        <div className="border py-1 w-24 ml-1 mr-5 text-center cursor-pointer rounded">PDF</div>
                        <div className="border py-1 w-24  mr-5 text-center cursor-pointer rounded">EXCEL</div>
                        <div className="border py-1 w-24  mr-5 text-center cursor-pointer rounded">PRINT</div>
                    </div>
                    <label htmlFor="my-modal-3" className="btn btn-success btn-sm rounded">Add User</label>
               </div>
                    <AddUserModal></AddUserModal>
                    <div >
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className="w-44">USER</th>
                                        <th className="w-56">EMAIL</th>
                                        <th className="w-32">ROLE</th>
                                        <th className="w-32">PLAN</th>
                                        <th className="w-32">STATUS</th>
                                        <th className="w-32">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    users?.map((user,index)=>{
                                        return (
                                           
                                    <>
                                        <tr className={index}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div className="font-bold">{user.Name}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{user.Email}</p>
                                        </td>
                                        <td>
                                            <p>{user.Role}</p>
                                        </td>
                                        <td>
                                            <p>{user.Plan}</p>
                                        </td>
                                        <td>
                                            <p>{user.Status}</p>
                                        </td>
                                        <th>
                                        <div className="dropdown dropdown-left dropdown-end">
                                            <label tabIndex={0} className="cursor-pointer m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg></label>
                                            <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-28">
                                                <li><a><button onClick={()=>handleDeleteUser(user._id)} className="btn btn-error btn-sm rounded-0">Delete</button></a></li>
                                                <li><a><button className="btn btn-primary btn-sm rounded-0 px-5">Edit</button></a></li>
                                            </ul>
                                        </div>
                                            
                                        </th>
                                    </tr>
                                    </>
                                )
                                })
                                }
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default AllUsers;