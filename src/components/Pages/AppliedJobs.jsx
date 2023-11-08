import { useLoaderData } from "react-router-dom";
import AppliedJobTable from "../accessories/AppliedJobTable";

const AppliedJobs = () => {
    const jobs=useLoaderData();
    console.log(jobs);
    return (
        <div className="mt-5 max-w-7xl mx-auto">
             <h1 className="text-black font-bold text-5xl text-center">Jobs You have applied</h1>
             <div className='mt-10 overflow-auto'>
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
                            <th className="text-black text-lg ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        jobs.map(job=> <AppliedJobTable key={job._id} job={job}></AppliedJobTable>)
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;