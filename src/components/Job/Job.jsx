import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, id } = job;
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl mt-6">
            <figure><img src={logo} alt={company_name} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-4">
                    <button className="px-5 py-2 text-extrabold border rounded-md border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 text-extrabold border rounded-md border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex mt-4">
                    <p className="flex"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> {location}</p>

                    <p className="flex"><CiDollar className="text-2xl mr-2"></CiDollar> {salary}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;