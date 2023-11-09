import { useEffect, useState } from "react";
import AllJobBanner from "../accessories/AllJobBanner";
import JobTable from "../home/JobTable";
import { Helmet } from "react-helmet-async";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [search,setSearch]=useState([]);
    useEffect(() => {
        fetch('https://jobdoc.vercel.app/all-jobs', {
            credentials: "include",
        })
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
            //====================================
    }, [])
    return (
        <div>
            <Helmet>
                <title>All Job</title>
            </Helmet>
            <AllJobBanner setSearch={setSearch}></AllJobBanner>
            <div className='max-w-7xl mx-auto mt-20 mb-20'>
                <div>
                    <h1 className="text-black font-bold text-5xl text-center mb-10">Latest jobs</h1>
                </div>
                <div className="overflow-auto">
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
                                search.length>0?
                                search.map(job => <JobTable key={job._id} job={job}></JobTable>)
                                :
                                jobs.map(job => <JobTable key={job._id} job={job}></JobTable>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;