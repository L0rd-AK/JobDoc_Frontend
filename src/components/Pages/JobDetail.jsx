import { useContext } from 'react';
import { FaBusinessTime, FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { LiaDotCircle } from 'react-icons/lia';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const JobDetail = () => {
    const { user } = useContext(AuthContext);
    const job = useLoaderData();
    const { _id,Application_Deadline, Salary_Range, Job_Title, Job_Type, Name, Company_Logo, Job_Description,Job_Applicants_Number,userEmail,posted } = job;

    const AppliedJob={Applied: true,Job_Applicants_Number:parseFloat(Job_Applicants_Number)+1,userEmail: user.email}
    const handelApply=()=>{
        fetch(`https://jobdoc.vercel.app/applied-jobs/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(AppliedJob),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Applied',
                    })
                }
                console.log(data);
            })
    }

    return (
        <div className='mt-5 pb-16 bg-[#f1f5f8] '>
            <Helmet>
                <title>Job Details</title>
            </Helmet>
            <div className='bg-[#081721] rounded-r-full mr-10'>
                <div className=' flex gap-10 max-w-7xl mx-auto'>
                    <div className=' w-3/4 p-5 '>
                        <div className='text-white space-y-5'>
                            <h1 className='text-3xl'>{Job_Title}</h1>
                            <h3 className='badge bg-white text-black font-semibold'>{Job_Type}</h3>
                            <h3 className='font-bold text-2xl'>Posted By: <span className='text-[#1CA774]'>{Name}</span></h3>
                            <h3 className='font-bold '>Deadline: <span className='text-red-600'>{Application_Deadline?.slice(0,10)}</span></h3>
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className='flex items-center gap-3'>
                                    <div className='text-[#1CA774] text-3xl lg:text-5xl'><FaBusinessTime></FaBusinessTime></div>
                                    <div>
                                        <div className='font-bold'>Department</div>
                                        <div>Software</div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='text-[#1CA774] text-3xl lg:text-5xl'><FaLocationDot></FaLocationDot></div>
                                    <div>
                                        <div className='font-bold'>Location</div>
                                        <div>USA</div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='text-[#1CA774] text-3xl lg:text-5xl'><FaSackDollar></FaSackDollar></div>
                                    <div>
                                        <div className='font-bold'>Salary</div>
                                        <div>${Salary_Range}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4 p-10'>
                        <img src={Company_Logo} alt="" />
                    </div>
                </div>
            </div>
            {/* ============================================================================ */}
            <div className='flex flex-col lg:flex-row gap-5 lg:max-w-7xl mx-auto mt-10'>
                <div className='lg:w-3/4 bg-white p-10 rounded-lg'>
                    <h1 className='text-black font-bold text-3xl'>Job Description:</h1>
                    {
                        Job_Description
                    }
                    <h1 className='text-black font-bold text-3xl mt-5'>Job Requirements:</h1>
                    <h3 className='text-black font-bold text-xl'>Requirements:</h3>
                    <ul>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Candidate must have a Bachelors or Masters degree in Computer. (B.tech, Bsc or BCA/MCA)</li>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Candidate must have a good working knowledge of Javascript and Jquery.</li>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Good knowledge of HTML and CSS is required.</li>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Experience in Next.js is an advantage</li>
                    </ul>
                    <h3 className='text-black font-bold text-xl'>Responsibilities:</h3>
                    <ul>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Write clean, maintainable and efficient code.</li>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Design robust, scalable and secure features.</li>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Collaborate with team members to develop and ship web applications within tight timeframes.</li>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Work on bug fixing, identifying performance issues and improving application performance</li>
                        <li className='flex items-center'><span className='text-success mr-2'><LiaDotCircle></LiaDotCircle></span> Continuously discover, evaluate, and implement new technologies to maximise development efficiency. Handling complex technical iss</li>
                    </ul>
                </div>
                <div className='lg:w-1/4 bg-white p-10 rounded-lg'>
                    <h1 className='text-black font-bold text-3xl mb-3'>Ready To Apply?</h1>
                    <p className='text-sm mb-4'>Complete the eligibities checklist now and get started with your online application</p>
                    <div className='space-y-3'>
                        <input type="text" placeholder="Email..." className="input input-bordered input-accent w-full bg-transparent" />
                        <input type="text" placeholder="CV URL.." className="input input-bordered input-accent w-full bg-transparent" />

                        
                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black ">Get Job Alart</label>
                        </div>
                        

                        {
                            posted && userEmail===user.email?
                            <button className='btn bg-warning text-white font-semibold w-full'>View Applicants</button>:
                            <button onClick={handelApply} className='btn bg-[#1CA774] text-white font-semibold w-full'>Apply</button>
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;