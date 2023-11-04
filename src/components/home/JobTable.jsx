
const JobTable = ({jobs}) => {
    // const {Application_Deadline}=jobs;
    return (
        <div className="max-w-7xl mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-black text-lg ">Posted By</th>
                        <th className="text-black text-lg ">Job Title</th>
                        <th className="text-black text-lg ">Job Posting Date</th>
                        <th className="text-black text-lg ">Application Deadline</th>
                        <th className="text-black text-lg ">Salary Range</th>
                        <th className="text-black text-lg ">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm bg-black text-white">Desktop Support Technician</span>
                        </td>
                        <td>Application_Deadline</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default JobTable;