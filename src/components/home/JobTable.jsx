import { Link } from "react-router-dom";

const JobTable = ({ job }) => {
    const { _id,Application_Deadline, Salary_Range, Job_Posting_Date, Job_Title, Job_Type, Name, Company_Logo,Job_Applicants_Number} = job;
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
                        <span className="badge badge-ghost badge-sm bg-black text-white w-[92px] lg:w-auto">{Job_Type}</span>
                    </div>
                </div>

            </td>
            <td className="text-center">{Job_Posting_Date.slice(0,10)}</td>
            <td className="text-center">{Application_Deadline.slice(0,10)}</td>
            <td className="text-center">{Job_Applicants_Number}</td>
            <td className="text-center">${Salary_Range}</td>
            <th>
                <Link to={`/all-jobs/${_id}`}><button className="btn bg-[#1CA774] btn-ghost btn-xs">details</button></Link>
            </th>
        </tr>
    );
};

export default JobTable;