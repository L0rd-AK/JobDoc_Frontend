import { FaBusinessTime, FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { LiaDotCircle } from 'react-icons/lia';
const JobDetail = ({ job }) => {
    const { Application_Deadline, Salary_Range, Job_Posting_Date, Job_Title, Job_Type, Name, Company_Logo, Job_Applicants_Number, Job_Description } = job;
    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1>{Job_Title}</h1>
                        <h3>{Job_Type}</h3>
                        <h3>Posted By: {Name}</h3>
                        <h3>Deadline: {Application_Deadline}</h3>
                        <div>
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
                                    <div>Department</div>
                                    <div>Software</div>
                                </div>
                            </div>
                            <div>
                                <div>{FaSackDollar}</div>
                                <div>
                                    <div>Department</div>
                                    <div>Software</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Company_Logo} alt="" />
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-3/4'>
                    <h1>Job Description</h1>
                    {
                        Job_Description
                    }
                    <h1>Job Requirements</h1>
                    <h3>Requirements:</h3>
                    <ul>
                        <li>{LiaDotCircle} Candidate must have a Bachelors or Masters degree in Computer. (B.tech, Bsc or BCA/MCA)</li>
                        <li>{LiaDotCircle} Candidate must have a good working knowledge of Javascript and Jquery.</li>
                        <li>{LiaDotCircle} Good knowledge of HTML and CSS is required.</li>
                        <li>{LiaDotCircle} Experience in Next.js is an advantage</li>
                    </ul>
                    <h3>Responsibilities:</h3>
                    <ul>
                        <li>{LiaDotCircle} Write clean, maintainable and efficient code.</li>
                        <li>{LiaDotCircle} Design robust, scalable and secure features.</li>
                        <li>{LiaDotCircle} Collaborate with team members to develop and ship web applications within tight timeframes.</li>
                        <li>{LiaDotCircle} Work on bug fixing, identifying performance issues and improving application performance</li>
                        <li>{LiaDotCircle} Continuously discover, evaluate, and implement new technologies to maximise development efficiency. Handling complex technical iss</li>
                    </ul>
                </div>
                <div className='w-1/4'>
                    <h1>Ready To Apply?</h1>
                    <p>Complete the eligibities checklist now and get started with your online application</p>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;