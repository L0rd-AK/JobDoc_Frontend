import { Link } from "react-router-dom";

const PostedJob_CARD = ({test}) => {
    return (
        <tbody className="text-center">
        {/* row 1 */}
        <tr>
        <th className="flex justify-center">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={test.Company_Logo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </th>
            <td>
                {test.Job_Title}
            </td>
            <td>
                <div>
                    <div className="font-bold text-left">{test.Name}</div>
                    {/* <div className="text-sm opacity-50 text-left">MedLab Ltd.</div> */}
                </div>
            </td>
            <td>
                {test.Salary_Range}
            </td>
            <td>
                {test.Job_Applicants_Number}
            </td>
            <td>
                {test.userEmail}
            </td>
            <td>
                {
                    test?.approved?
                    <Link ><button className="btn btn-ghost btn-md bg-success">Approved</button></Link>
                    :
                    <Link ><button className="btn btn-ghost btn-md bg-warning">pending</button></Link>

                }
            </td>
            <th>
                <Link ><button className="btn btn-ghost btn-md bg-success">Cancle</button></Link>
            </th>
        </tr>
    </tbody>
    );
};

export default PostedJob_CARD;