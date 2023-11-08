import { Link } from 'react-router-dom';
import '../home/JobCatagory.css'
import { useEffect, useState } from 'react';
import JobTable from './JobTable';

const JobCatagory = ({searchJob}) => {
    const [active,setActive]=useState('all-job');
    const [jobs,setJobs]=useState([]);
    const [data,setData]=useState([]);
    const [search,setSearch]=useState([]);
    console.log(searchJob);
    
    useEffect(()=>{
        setSearch(searchJob);
        fetch('https://jobdoc.vercel.app/all-jobs',{
            credentials: "include",
        })
        .then(res=>res.json())
        .then(data=>{
            setData(data);
        })
    },[active,searchJob])
    const handelCategoryJobs=(id)=>{
        setSearch([]);
        setActive(id);
        const filteredData=data.filter(job=>job.Job_Type===id);
        console.log(filteredData);
        if(filteredData.length>0)setJobs(filteredData);
        else setJobs(data);
    }
    return (
        <div className="mt-16 max-w-7xl mx-auto mb-20">
            <div className='flex flex-col items-center'>
                <h1 className="text-black font-bold text-4xl lg:text-5xl text-center">Find your Dream job by category</h1>
                <div className="flex flex-wrap justify-center  mt-10">
                    <Link onClick={()=>handelCategoryJobs('all-job')} className={active=='all-job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> All Jobs</Link>
                    <Link onClick={()=>handelCategoryJobs('On Site Job')} className={active=='On Site Job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> On Site Job</Link>
                    <Link onClick={()=>handelCategoryJobs('Remote Job')} className={active=='Remote Job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> Remote Job</Link>
                    <Link onClick={()=>handelCategoryJobs('Part Time Job')} className={active=='Part Time Job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> Part Time</Link>
                    <Link onClick={()=>handelCategoryJobs('Hybrid')} className={active=='Hybrid'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}>Hybride</Link>
                </div>
            </div>
            <div className='mt-10 overflow-auto'>
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
                    {
                        search.length>0?
                        <tbody>
                        {
                            search.map(job=> <JobTable key={job._id} job={job}></JobTable>)
                        }
                        </tbody>
                        :
                        <tbody>
                        {
                            active==='all-job'?
                            data.map(job=> <JobTable key={job._id} job={job}></JobTable>):
                            jobs.map(job=> <JobTable key={job._id} job={job}></JobTable>)
                        }
                        </tbody>
                    }
                </table>
            </div>
        </div>
    );
};

export default JobCatagory;