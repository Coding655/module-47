import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);
 
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [])

    return (
        <div className="mt-14">
            <h2 className="text-5xl text-center">Featured Jobs List: {jobs.length}</h2>
            <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-6 mt-8">
                {
                    jobs.slice(0, dataLength).map(job => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>
            <div className={ dataLength === jobs.length && 'hidden' }>
                <button 
                    onClick={() => setDataLength(jobs.length)}
                    className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold my-[60px] mx-[500px]"
                
                >Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;