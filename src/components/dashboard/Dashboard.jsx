import { Link, Outlet } from "react-router-dom";
import './DashBoard.css'
import {  useState } from "react";
const DashBoard = () => {
    // console.log(machedUser);
    const [tag, setTag] = useState('');
    // console.log(location.pathname);
    return (
        <>

            <div className="grid grid-cols-4">
                <div className="min-h-screen bg-success p-10">

                    {/* ================ Admin options ================ */}
                    <h1 className="text-3xl text-center font-bold mb-10">Admin</h1>
                    <div className="mb-10" onClick={() => setTag('home')}>
                        <Link className={`${tag === 'home' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/'>Home</Link>
                    </div>
                    <div className="mb-10" onClick={() => setTag('all-users')}>
                        <Link className={`${tag === 'all-users' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/dashboard/all-users'>All Users</Link>
                    </div>
                    <div className="mb-10" onClick={() => setTag('add-a-test')}>
                        <Link className={`${tag === 'add-a-test' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/dashboard/all-applied-jobs'>Appied Jobs</Link>
                    </div>
                    <div className="mb-10" onClick={() => setTag('allTestas')}>
                        <Link className={`${tag === 'allTestas' ? 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer unique' : 'px-8 py-3 bg-white rounded-lg p-5 text-center font-bold text-lg mb-5 mt-5 cursor-pointer'}`} to='/dashboard/AllTeastas'>Posted Jobs</Link>
                    </div>
                    <div className="divider bg-white h-1"></div>
                </div>
                <div className="grid col-span-3">
                    <Outlet></Outlet>
                </div>
            </div>

        </>
    );
};

export default DashBoard;