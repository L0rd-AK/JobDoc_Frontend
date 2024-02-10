import { useLoaderData } from "react-router-dom";
import AppliedJobTable from "../accessories/AppliedJobTable";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
    const jobs=useLoaderData();
    console.log(jobs);
    return (
        <div className="mt-5 max-w-7xl mx-auto">
            <Helmet>
                <title>Applied Jobs</title>
            </Helmet>
             <h1 className="text-black font-bold text-5xl text-center">Jobs You have applied</h1>
             <div className='mt-10 overflow-auto'>
                {
                    jobs.length>0?
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
                    :
                    <div className="grid justify-center items-center min-h-screen w-full">
                        <h1 className="text-4xl lg:text-6xl font-bold text-black text-center">You Havent applied to <br /> any Jobs yet</h1>
                    </div>
                }
            </div>
        </div>
    );
};

export default AppliedJobs;