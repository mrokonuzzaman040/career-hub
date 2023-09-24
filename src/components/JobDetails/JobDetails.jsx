import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);


    const handelAppyJob = () => {
        saveJobApplication(job.id);
        toast.success("Job Apply Successfully");
    };

    return (
        <div className="m-10">
            <h2>Job Details of: {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3">
                    <p className="font-bold">Job Description: <span className="font-normal">{job.job_description}</span> </p>
                    
                    <p className="font-bold">Job Responsibility: <span className="font-normal">{job.job_responsibility}</span></p>

                    <p className="font-bold">Job Requirements: <span className="font-normal">{job.educational_requirements}</span> </p>


                    <p className="font-bold">Experiance: <span className="font-normal">{job.experiences}</span> </p>

                    
                </div>
                <div className="border rounded-xl p-4 bg-gradient-to-r from-cyan-200 to-blue-300">
                    <h2 className="font-bold">Job Details</h2>
                    <br />
                    <hr />
                    <p className="font-bold">Salarry: <span className="font-normal">{job.salary}</span></p>
                    <p className="font-bold">Job Titel: <span className="font-normal">{job.job_title}</span></p>
                    <br />
                    <hr />
                    <h2 className="font-bold">Contact Info</h2>
                    <hr /> 
                    <p><span className="font-bold">Phone: </span>{job.contact_information.phone}</p>
                    <p><span className="font-bold">Email: </span>{job.contact_information.email}</p>
                    <p><span className="font-bold">Addres: </span>{job.contact_information.address}</p>


                    {/* <Link onClick={handelAppyJob} className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Apply Now</Link> */}

                    <button onClick={handelAppyJob}>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;