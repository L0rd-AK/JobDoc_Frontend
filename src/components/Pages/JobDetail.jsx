import { FaBusinessTime, FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { LiaDotCircle } from 'react-icons/lia';
import { useLoaderData } from 'react-router-dom';

const JobDetail = () => {

    const job = useLoaderData();

    console.log(job);
    const { Application_Deadline, Salary_Range, Job_Title, Job_Type, Name, Company_Logo, Job_Description } = job;
    return (
        <div className='mt-5 pb-16 bg-[#f1f5f8]'>
            <div className='bg-[#081721] rounded-r-full mr-10'>
                <div className=' flex gap-10 max-w-7xl mx-auto'>
                    <div className=' w-3/4 p-5 '>
                        <div className='text-white space-y-5'>
                            <h1 className='text-3xl'>{Job_Title}</h1>
                            <h3 className='badge bg-white text-black font-semibold'>{Job_Type}</h3>
                            <h3 className='font-bold text-2xl'>Posted By: <span className='text-[#1CA774]'>{Name}</span></h3>
                            <h3 className='font-bold '>Deadline: <span className='text-red-600'>{Application_Deadline}</span></h3>
                            <div className='flex gap-5'>
                                <div className='flex items-center gap-3'>
                                    <div className='text-[#1CA774] text-5xl'><FaBusinessTime></FaBusinessTime></div>
                                    <div>
                                        <div className='font-bold'>Department</div>
                                        <div>Software</div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='text-[#1CA774] text-5xl'><FaLocationDot></FaLocationDot></div>
                                    <div>
                                        <div className='font-bold'>Location</div>
                                        <div>USA</div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='text-[#1CA774] text-5xl'><FaSackDollar></FaSackDollar></div>
                                    <div>
                                        <div className='font-bold'>Salary</div>
                                        <div>{Salary_Range}</div>
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
            <div className='flex gap-5 max-w-7xl mx-auto mt-10'>
                <div className='w-3/4 bg-white p-10 rounded-lg'>
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
                <div className='w-1/4 bg-white p-10 rounded-lg'>
                    <h1 className='text-black font-bold text-3xl mb-3'>Ready To Apply?</h1>
                    <p className='text-sm mb-4'>Complete the eligibities checklist now and get started with your online application</p>
                    <div className='space-y-3'>
                        <input type="text" placeholder="Email..." className="input input-bordered input-accent w-full bg-transparent" />
                        <input type="text" placeholder="CV URL.." className="input input-bordered input-accent w-full bg-transparent" />

                        
                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black ">Get Job Alart</label>
                        </div>
                        

                        <button className='btn bg-[#1CA774] text-white font-semibold w-full'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;