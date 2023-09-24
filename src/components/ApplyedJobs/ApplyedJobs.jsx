import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../Utility/LocalStorage";

const ApplyedJobs = () => {
    const jobs = useLoaderData();

    const [applyedJobs, setApplyedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const habdelFilter = (filter) => {
        if(filter === 'All') {
            setDisplayJobs(applyedJobs);
        }
        else if(filter === 'Remote') {
            const remoteJobs = applyedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'OnSite') {
            const onSiteJobs = applyedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onSiteJobs);
        }

    };

    useEffect(() => {
        const storedJobIds = getStoredJobApplications();
        if (jobs.length > 0) {
            const applyedJobs = jobs.filter(job => storedJobIds.includes(job.id));
            setApplyedJobs(applyedJobs);
            setDisplayJobs(applyedJobs);
        }
    }, []);
    // console.log(applyedJobs);
    return (
        <div>
            <h2>Jobs you have applyed</h2>
            <h2>Total Applyed Jobs: {applyedJobs.length} </h2>
            <div className="">
                <details className="dropdown mb-10">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() =>habdelFilter('All') }><a>All</a></li>
                        <li onClick={() =>habdelFilter('Remote') }><a>Remote</a></li>
                        <li onClick={() =>habdelFilter('OnSite') }><a>OnSite</a></li>

                    </ul>
                </details>
            </div>
            <div className="mb-10 p-5 bg-blue-200 border-blue-300 rounded-xl">
                {
                    displayJobs.map(job =>
                        <div key={job.id} className="mb-10">
                            <div  className="flex gap-10 mb-10">
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
            </div>
        </div>
    );
};

export default ApplyedJobs;