import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import '../home/Navbar.css'
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const customLink =
        <>
            {
                user ?
                <div className='flex'>
                    <li className="text-lg px-5 py-2"><NavLink to="/">Home</NavLink></li>
                    <li className="text-lg px-5 py-2"><NavLink to="/all-jobs">All Jobs</NavLink></li>
                    <li className="text-lg px-5 py-2"><NavLink to="/blogs">Blogs</NavLink></li>
                    <li className="text-lg px-5 py-2"><NavLink to="/add-a-job">Add a Job</NavLink></li>
                    <li className="text-lg px-5 py-2"><NavLink to='/my-jobs'>My Jobs</NavLink></li>
                    <li className="text-lg px-5 py-2"><NavLink to={`/applied-jobs/${user.email}`}>Applied Jobs</NavLink></li>
                </div>
                :
                <div className='flex'>
                    <li className="text-lg px-5 py-2"><NavLink to="/">Home</NavLink></li>
                    <li className="text-lg px-5 py-2"><NavLink to="/all-jobs">All Jobs</NavLink></li>
                    <li className="text-lg px-5 py-2"><NavLink to="/blogs">Blogs</NavLink></li>
                </div>
            }
        </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
                        {customLink}
                    </ul>
                </div>
                <h1 className='text-5xl font-bold text-black ml-3'>Job<span className='text-[#1CA774]'>D</span>oc</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-2 text-black font-bold">
                    {customLink}
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end mr-10 gap-3">
                        <p className='text-black font-semibold'>{user.displayName}</p>
                        <img className="rounded-full h-10" src={user.photoURL} alt="" />
                        <Link onClick={() => logOut()} to='/'><a className="btn bg-[#1CA774] text-white border-none">Log Out</a></Link>
                    </div>
                    :
                    <div className="navbar-end mr-10">
                        <Link to='/login'><a className="btn bg-[#1CA774] text-white border-none">Log in</a></Link>
                    </div>

            }
        </div>
    );
};

export default Navbar;