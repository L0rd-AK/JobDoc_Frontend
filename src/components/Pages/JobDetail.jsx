import { FaBusinessTime, FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const JobDetail = () => {

    const job=useLoaderData();
    
    console.log(job);
    const { Application_Deadline, Salary_Range, Job_Title, Job_Type, Name, Company_Logo, Job_Description } = job;
    return (
        <div className='mt-5 bg-[#f1f5f8]'>
            <div className='flex gap-10'>
                <div className='bg-[#081721] w-3/4 p-5 '>
                    <div className='text-white space-y-3'>
                        <h1 className='text-3xl'>{Job_Title}</h1>
                        <h3 className='badge bg-white text-black font-semibold'>{Job_Type}</h3>
                        <h3 className='font-bold text-2xl'>Posted By: <span className='text-[#1CA774]'>{Name}</span></h3>
                        <h3 className='font-bold '>Deadline: <span className='text-red-600'>{Application_Deadline}</span></h3>
                        <div className='flex gap-5'>
                            <div>
                                <div>{FaBusinessTime}</div>
                                <div>
                                    <div>Department</div>
                                    <div>Software</div>
                                </div>
                            </div>
                            <div>
                                <div>{FaLocationDot}</div>
                                <div>
                                    <div>Location</div>
                                    <div>USA</div>
                                </div>
                            </div>
                            <div>
                                <div>{FaSackDollar}</div>
                                <div>
                                    <div>Salary</div>
                                    <div>{Salary_Range}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/4'>
                    <img src={Company_Logo} alt="" />
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
                        <li><span className='text-black text-xl'>{FaCheck}</span> Candidate must have a Bachelors or Masters degree in Computer. (B.tech, Bsc or BCA/MCA)</li>
                        <li><span className='text-black text-xl'>{FaCheck}</span> Candidate must have a good working knowledge of Javascript and Jquery.</li>
                        <li><span className='text-black text-xl'>{FaCheck}</span> Good knowledge of HTML and CSS is required.</li>
                        <li><span className='text-black text-xl'>{FaCheck}</span> Experience in Next.js is an advantage</li>
                    </ul>
                    <h3 className='text-black font-bold text-xl'>Responsibilities:</h3>
                    <ul>
                        <li><span className='text-black text-xl'>{FaCheck}</span> Write clean, maintainable and efficient code.</li>
                        <li><span className='text-black text-xl'>{FaCheck}</span> Design robust, scalable and secure features.</li>
                        <li><span className='text-black text-xl'>{FaCheck}</span> Collaborate with team members to develop and ship web applications within tight timeframes.</li>
                        <li><span className='text-black text-xl'>{FaCheck}</span> Work on bug fixing, identifying performance issues and improving application performance</li>
                        <li><span className='text-black text-xl'>{FaCheck}</span> Continuously discover, evaluate, and implement new technologies to maximise development efficiency. Handling complex technical iss</li>
                    </ul>
                </div>
                <div className='w-1/4 bg-white p-10 rounded-lg'>
                    <h1 className='text-black font-bold text-3xl mb-3'>Ready To Apply?</h1>
                    <p>Complete the eligibities checklist now and get started with your online application</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;