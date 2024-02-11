import { useLoaderData } from "react-router-dom";
import PostedJob_CARD from "./PostedJob_CARD";

const PostedJob = () => {
    const TestResult=useLoaderData();
    return (
        <div className="overflow-x-auto">
            <h1 className="text-center text-5xl font-bold text-black mt-10 mb-5">Manage All Tests</h1>
            <table className="table">
                {/* head */}
                <thead className="bg-success text-black text-bold text-center text-base">
                    <tr>
                        <th>Image</th>
                        <th>Job title</th>
                        <th>Posted by</th>
                        <th>Salary</th>
                        <th>Applicants numbers</th>
                        <th>user email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    TestResult.map(i=> <PostedJob_CARD key={i._id} test={i}></PostedJob_CARD>)
                }
            </table>
        </div>
    );
};

export default PostedJob;