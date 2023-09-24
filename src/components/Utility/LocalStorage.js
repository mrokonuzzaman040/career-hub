const getStoredJobApplications = () => {
    const jobApplications = localStorage.getItem("jobApplications");
    if (jobApplications) {
        return JSON.parse(jobApplications);
    } else {
        return [];
    }
};

const saveJobApplication = id =>{
    const storedApplication = getStoredJobApplications();
    const existingApplication = storedApplication.find(jobId => jobId === id);

    if (!existingApplication) {
        storedApplication.push(id);
        localStorage.setItem("jobApplications", JSON.stringify(storedApplication));
    }

} // save job application to local storage


export { getStoredJobApplications, saveJobApplication };