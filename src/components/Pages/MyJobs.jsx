import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyJobTable from "../accessories/MyJobTable";
import { Helmet } from "react-helmet-async";

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [myjobs, setMyJobs] = useState([]);
    useEffect(() => {
        fetch(`https://jobdoc.vercel.app/my-jobs/${user.email}`, { credentials: "include", })
            .then(res => res.json())
            .then(data => {
                setMyJobs(data);
            })
    }, [user.email])
    return (
        <div className='mt-10 mb-16 max-w-7xl mx-auto'>
            <Helmet>
                <title>My Jobs</title>
            </Helmet>
            <h1 className="text-center text-black font-bold text-3xl lg:text-5xl mb-5">Job Posted by me:</h1>
            {
                myjobs.length > 0 ?
                    <div className="overflow-auto">
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
                                    myjobs.map(job => <MyJobTable key={job._id} job={job} myjobs={myjobs} setMyJobs={setMyJobs}></MyJobTable>)
                                }
                            </tbody>

                        </table>
                    </div>
                    :
                    <div className="grid justify-center items-center min-h-screen w-full">
                        <h1 className="text-4xl lg:text-6xl font-bold text-black text-center">You Havent Posted <br /> any Jobs yet</h1>
                    </div>
            }
        </div>
    );
};

export default MyJobs;