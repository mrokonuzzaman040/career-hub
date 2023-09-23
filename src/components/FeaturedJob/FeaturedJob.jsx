import React, { useEffect } from 'react';
import { useState } from 'react';
import Job from '../Job/Job';

const FeaturedJob = () => {

    const [dataload, setDtaLoad] = useState(4);

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('./jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className=''>
            <div className="">
                <h2 className='text-4xl text-center'>Featured Jobs Length: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataload).map(job => <Job job={job} key={job.id} ></Job>)
                }
            </div>
            <div className="text-center mt-20">
                <div className={dataload === jobs.length && 'hidden'}>
                    <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white' onClick={() => setDtaLoad(jobs.length)}>Load All</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;