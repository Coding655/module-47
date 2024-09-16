import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    
    return (
        <div>
            <h2>Details of jobs: {id} </h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <div className="text-4xl">details coming soon</div>
                </div>
                <div className="border">
                    <h2 className="text-2xl">side things</h2>
                    <button className="btn btn-primary w-full font-bold text-white"> Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;