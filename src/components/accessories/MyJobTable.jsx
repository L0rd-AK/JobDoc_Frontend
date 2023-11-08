import { Link } from "react-router-dom";
import {AiFillDelete} from 'react-icons/ai';
import {FaEdit} from 'react-icons/fa';
import Swal from "sweetalert2";
const MyJobTable = ({job,setMyJobs,myjobs}) => {
    const { _id,Application_Deadline, Salary_Range, Job_Posting_Date, Job_Title, Job_Type, Company_Logo,Job_Applicants_Number} = job;
    const handelDelete=()=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://jobdoc.vercel.app/all-jobs/${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                },
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Post has been deleted.',
                        'success'
                      )
                      const x=myjobs.filter(i=>i._id!=_id);
                      console.log(x);
                      setMyJobs(x);
                }
              })
            }
          })
    }
    
    return (
        <tr className="">
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
            <td><Link className="w-full" to={`/update/${_id}`}><div className="flex justify-center items-center h-[72px] text-accent text-2xl"><FaEdit></FaEdit></div></Link></td>
            <td><Link className="w-full" onClick={handelDelete}><div className="flex justify-center items-center h-[72px] text-red-600 text-2xl"><AiFillDelete></AiFillDelete></div></Link></td>
        </tr>
    );
};

export default MyJobTable;