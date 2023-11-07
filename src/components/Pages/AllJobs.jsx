import { useEffect, useState } from "react";
import AllJobBanner from "../accessories/AllJobBanner";
import JobTable from "../home/JobTable";

const AllJobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all-jobs')
        .then(res=>res.json())
        .then(data=>{
            setJobs(data);
        })
    },[])
    return (
        <div>
            <AllJobBanner></AllJobBanner>
            
            <div className='max-w-7xl mx-auto mt-20 mb-20'>
                <div>
                <h1 className="text-black font-bold text-5xl text-center mb-10">Latest jobs</h1>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-black text-lg ">Posted By</th>
                            <th className="text-black text-lg ">Job Title</th>
                            <th className="text-black text-lg ">Job Posting Date</th>
                            <th className="text-black text-lg ">Application Deadline</th>
                            <th className="text-black text-lg ">Job Applicants Number</th>
                            <th className="text-black text-lg ">Salary Range</th>
                            <th className="text-black text-lg ">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        jobs.map(job=> <JobTable key={job._id} job={job}></JobTable>)
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default AllJobs;