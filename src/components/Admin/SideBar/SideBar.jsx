import { Link } from "react-router-dom";


const Sidebar = () =>{
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-52 hover:bg-white hover:shadow-lg">
          <div className="flex h-screen flex-col justify-between pt-2 pb-6">
            <div> 
              <ul className="mt-6 space-y-2 tracking-wide">
                <li className="min-w-max">
                  <Link to="/adminDashboard/allUsers" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    <span className="group-hover:text-gray-700">All Users</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link to="/adminDashboard/addUser" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className="group-hover:text-gray-700">Add User</span>
                  </Link>
                </li>
                <li className="min-w-max">
                  <Link to="/adminDashboard/addProducts" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                    <span className="group-hover:text-gray-700">Add Products</span>
                    {/* <span htmlFor="my-modal-4" className="group-hover:text-gray-700">Add Products</span> */}
                  </Link>
                </li>
                
              </ul>
            </div>
          
          </div>
        </div>
      </div>
    )
}

export default Sidebar;