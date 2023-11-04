import { Link } from 'react-router-dom';
import '../home/JobCatagory.css'
import { useState } from 'react';

const JobCatagory = () => {
    const [active,setActive]=useState('all-job');
    return (
        <div className="mt-16 max-w-7xl mx-auto grid justify-center">
            <h1 className="text-black font-bold text-5xl">Find your Dream job by category</h1>
            <div className="flex  mt-10">
                <Link onClick={()=>setActive('all-job')} className={active=='all-job'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`} to='/'> All Jobs</Link>
                <Link onClick={()=>setActive('on-site')} className={active=='on-site'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> On Site Job</Link>
                <Link onClick={()=>setActive('remote')} className={active=='remote'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> Remote Job</Link>
                <Link onClick={()=>setActive('part-time')} className={active=='part-time'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> Part Time</Link>
                <Link onClick={()=>setActive('hybrid')} className={active=='hybrid'?`text-lg font-bold px-5 py-2 active`:`text-lg font-bold px-5 py-2`}> Hybride</Link>
            </div>
            

        </div>
    );
};

export default JobCatagory;