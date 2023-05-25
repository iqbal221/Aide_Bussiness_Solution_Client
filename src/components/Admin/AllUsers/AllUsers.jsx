import { useEffect, useState,useRef } from "react";
import Sidebar from "../SideBar/SideBar";
import AddUserModal from "./AddUserModal";
import {useNavigate} from "react-router-dom";
import { toast } from "react-hot-toast";
import EditUserModal from "./EditUserModal";
import GetUser from "../../../APIServices/GetUserAPI";
import GetUserbyId from "../../../APIServices/GetUserByIdAPI";
import { CSVLink } from "react-csv";
import {useReactToPrint} from 'react-to-print';



function AllUsers() {
    const componentPDF = useRef()
    const [users,setUsers] = useState([])
    const [userById, setUserById] = useState()
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

      const handleEditUser = (id)=>{
        console.log(id)
        GetUserbyId(id)
        .then((result)=>{
            console.log(result)
            setUserById(result)   
        })   
      }

      const generatePDF = useReactToPrint({
        content:()=> componentPDF.current,
        documentTitle:"All Users List"
      })
  

     
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <div className="ml-32 mt-10">
                <h1 className="text-success text-3xl mb-10 font-semibold">All Users</h1> 
                <div className="card card-compact bg-base-100 shadow-lg p-3">
                <div className="mb-4 flex justify-between">
                    <div className="flex">
                        <div onClick={generatePDF} className="border py-1 w-24 ml-1 mr-5 text-center cursor-pointer rounded">PDF</div>
                        <CSVLink 
                            data={users}
                            className="border py-1 w-24  mr-5 text-center cursor-pointer rounded" 
                            filename={"my-file.csv"}
                            target="_blank">
                            EXCEL
                        </CSVLink>
                        <div className="border py-1 w-24  mr-5 text-center cursor-pointer rounded">PRINT</div>
                    </div>
                    <label htmlFor="my-modal-3" className="btn btn-success btn-sm rounded">Add User</label>
               </div>
                    <AddUserModal></AddUserModal>
                    <div >
                        <div className="overflow-x-auto w-full">
                        <div ref={componentPDF} style={{width:"100%"}}>
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
                                    users?.map((user)=>{
                                        return (
                                           
                                    <>
                                        <tr key={user._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.Image} alt="Avatar Tailwind CSS Component" />
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
                                                <li><a><button onClick={()=>handleDeleteUser(user._id)} className="btn btn-error btn-sm rounded-2xl">Delete</button></a></li>
                                                <li><a><button onClick={()=>handleEditUser(user._id)}  className="btn btn-primary btn-sm px-5 rounded-2xl"><label htmlFor="my-modal-4">Edit</label></button></a></li>
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
                            <EditUserModal userById={userById}></EditUserModal>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default AllUsers;