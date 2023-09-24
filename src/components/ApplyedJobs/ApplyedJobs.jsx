import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../Utility/LocalStorage";

const ApplyedJobs = () => {
    const jobs = useLoaderData();

    const [applyedJobs, setApplyedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplications();
        if (jobs.length > 0) {
            const applyedJobs = jobs.filter(job => storedJobIds.includes(job.id));
            setApplyedJobs(applyedJobs);
        }
    }, []);
    // console.log(applyedJobs);
    return (
        <div>
            <h2>Jobs you have applyed</h2>
            <h2>Total Applyed Jobs: {applyedJobs.length} </h2>

            <ul>
                {
                    applyedJobs.map(job =>
                        <div className="mb-10 p-5 bg-blue-200 border-blue-300 rounded-xl">
                            <div className="flex gap-10 w-auto ">
                                <div className="w-[96px]">
                                    <img src={job.logo} alt="" />
                                </div>

                                <div className="">
                                    <h3>{job.job_title}</h3>
                                    <p>{job.company_name}</p>
                                    <div className="flex gap-4">
                                        <p>{job.job_type}</p>
                                        <p>{job.remote_or_onsite}</p>
                                    </div>
                                    <p>{job.location}</p>

                                </div>
                            </div>
                        </div>
                    )
                }
            </ul>
        </div>
    );
};

export default ApplyedJobs;