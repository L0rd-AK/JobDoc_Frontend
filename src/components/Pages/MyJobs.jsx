import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyJobTable from "../accessories/MyJobTable";

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [myjobs,setMyJobs]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/my-jobs/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyJobs(data);
        })
    },[user.email])
    return (
        <div className='mt-10 mb-16 max-w-7xl mx-auto'>
            <h1 className="text-center text-black font-bold text-5xl mb-5">Job Posted by me:</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th className="text-black text-lg ">Job Title</th>
                            <th className="text-black text-lg ">Job Posting Date</th>
                            <th className="text-black text-lg ">Application Deadline</th>
                            <th className="text-black text-lg ">Job Applicants Number</th>
                            <th className="text-black text-lg ">Salary Range</th>
                            <th className="text-black text-lg ">Update</th>
                            <th className="text-black text-lg ">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        myjobs.map(job=> <MyJobTable key={job._id} job={job} myjobs={myjobs} setMyJobs={setMyJobs}></MyJobTable>)
                    }
                    </tbody>
                    
                </table>
            </div>
    );
};

export default MyJobs;