import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const UpdateJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const jobType = useRef();
    // const Job_Posting_Date = useRef();
    // const Application_Deadline = useRef();
    // const {id}=useParams();
    // const [machedJob,setMachedJob]=useState([]);
    const machedJob = useLoaderData();
    // ======================================================================
    useEffect(() => {
        setStartDate(startDate);
        setEndDate(endDate);
    }, [startDate, endDate]);
    console.log(machedJob._id);
    // ======================================================================

    const UpdateJob = (e) => {
        e.preventDefault();
        const selected_jobType = jobType.current.value;
        // const selected_Job_Posting_Date = Job_Posting_Date.current.value;
        // const selected_Application_Deadline = Application_Deadline.current.value;
        const form = new FormData(e.currentTarget);
        const Job_Title = form.get('title');
        const Company_Logo = form.get('photo');
        const Name = form.get('name');
        const Salary_Range = form.get('Salary');
        const Job_Applicants_Number = form.get('Job_Applicants_Number');
        const Job_Description = form.get('description');
        const updatedJob = { Job_Title, Job_Type: selected_jobType, Company_Logo, Name, Salary_Range, Job_Applicants_Number, Job_Posting_Date: startDate, Application_Deadline: endDate, Job_Description };
        fetch(`https://jobdoc.vercel.app/all-jobs/${machedJob._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedJob),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Job has been Updated',
                    })
                }
                console.log(data);
            })
    }

    return (
        <section className="bg-white ">
            <Helmet>
                <title>Update Job</title>
            </Helmet>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-10 text-2xl font-bold text-black ">Update Job Information</h2>
                <namem action="#">
                    <form onSubmit={UpdateJob}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="w-full">
                                <label name="title" className="block mb-2 text-sm font-medium text-black">Job Title</label>
                                <input defaultValue={machedJob.Job_Title} type="text" name="title" id="title" className="input input-bordered input-accent w-full bg-transparent" placeholder="Type product name" required="" />
                            </div>
                            <div>
                                <label name="type" className="block mb-2 text-sm font-medium text-black">Job Category</label>
                                <select ref={jobType} name="type" className="input input-bordered input-accent w-full bg-transparent">
                                    <option selected="">{machedJob.Job_Type}</option>
                                    <option value="On Site Job">On Site Job</option>
                                    <option value="Remote Job">Remote Job</option>
                                    <option value="Part Time Job">Part Time Job</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label name="photo" className="block mb-2 text-sm font-medium text-black">Company Logo or Job banner URL</label>
                                <input defaultValue={machedJob.Company_Logo} type="text" name="photo" id="photo" className="input input-bordered input-accent w-full bg-transparent" placeholder="URL" required="" />
                            </div>
                            <div className="w-full">
                                <label name="name" className="block mb-2 text-sm font-medium text-black">User Name</label>
                                <input defaultValue={machedJob.Name} type="text" name="name" id="name" className="input input-bordered input-accent w-full bg-transparent" placeholder="User name" required="" />
                            </div>
                            <div className="w-full">
                                <label name="Salary" className="block mb-2 text-sm font-medium text-black">Salary</label>
                                <input defaultValue={machedJob.Salary_Range} type="number" name="Salary" id="Salary" className="input input-bordered input-accent w-full bg-transparent" placeholder="$2999" required="" />
                            </div>
                            <div className="w-full">
                                <label name="Job_Applicants_Number" className="block mb-2 text-sm font-medium text-black">Applicant number</label>
                                <input defaultValue={machedJob.Job_Applicants_Number} type="number" name="Job_Applicants_Number" id="Job_Applicants_Number" className="input input-bordered input-accent w-full bg-transparent" placeholder="0" required="" />
                            </div>
                            <div className="w-full">
                                <label name="postedDate" className="block mb-2 text-sm font-medium text-black">Job Posted on</label>
                                <DatePicker value={startDate} name="postedDate" className="border-accent" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div className="w-full">
                                <label name="deadline" className="block mb-2 text-sm font-medium text-black">Job Deadline</label>
                                <DatePicker value={endDate} name="deadline" selected={endDate} onChange={(date) => setEndDate(date)}/>
                            </div>
                            <div className="sm:col-span-2">
                                <label name="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                                <textarea defaultValue={machedJob.Job_Description} name='description' id="description" rows="8" className="input input-bordered input-accent w-full bg-transparent h-24" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="bg-[#1CA774] inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Update
                        </button>
                    </form>
                </namem>
            </div>
        </section>
    );
};

export default UpdateJob;