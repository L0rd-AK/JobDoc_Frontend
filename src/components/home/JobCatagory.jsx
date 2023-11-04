import { Link } from 'react-router-dom';
import '../home/JobCatagory.css'
import { useEffect, useState } from 'react';
import JobTable from './JobTable';

const JobCatagory = () => {
    const [active,setActive]=useState('all-job');
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all-jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
        const filteredData=jobs.filter(job=>job.Job_Type===active);
        setJobs(filteredData);
    },[active,jobs])
    return (
        <div className="mt-16 max-w-7xl mx-auto">
            <div className='flex flex-col items-center'>
                <h1 className="text-black font-bold text-5xl">Find your Dream job by category</h1>
                <div className="flex  mt-10">
                    <Link onClick={()=>setActive('all-job')} className={active=='all-job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`} to='/'> All Jobs</Link>
                    <Link onClick={()=>setActive('On Site Job')} className={active=='On Site Job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> On Site Job</Link>
                    <Link onClick={()=>setActive('Remote Job')} className={active=='Remote Job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> Remote Job</Link>
                    <Link onClick={()=>setActive('Part Time Job')} className={active=='Part Time Job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> Part Time</Link>
                    <Link onClick={()=>setActive('hybrid')} className={active=='hybrid'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> Hybride</Link>
                </div>
            </div>
            <div className='mt-10'>
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
                    {
                        jobs.map(job=> <JobTable key={job._id} job={job}></JobTable>)
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default JobCatagory;