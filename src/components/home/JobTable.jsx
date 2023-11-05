
const JobTable = ({ job }) => {
    const { Application_Deadline, Salary_Range, Job_Posting_Date, Job_Title, Job_Type, Name, Company_Logo } = job;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{Name}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={Company_Logo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        {Job_Title}
                        <br />
                        <span className="badge badge-ghost badge-sm bg-black text-white">{Job_Type}</span>
                    </div>
                </div>

            </td>
            <td>{Job_Posting_Date}</td>
            <td>{Application_Deadline}</td>
            <td>{Salary_Range}</td>
            <th>
                <button className="btn bg-[#1CA774] btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default JobTable;