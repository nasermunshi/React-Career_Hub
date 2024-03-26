import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageApplication } from "../../Utility/localStorage";

const ApplyedJobs = () => {
  const jobs = useLoaderData();

  const [applyedJobs, setapplyedJobs] = useState([]);


  useEffect(()=>{
    const storeJobsIds = getStorageApplication();
    if(jobs. length > 0) {
      const jobApplide = jobs.filter(job => storeJobsIds.includes(job.id) )
      // console.log(jobs, storeJobsIds, jobApplide);
     setapplyedJobs(jobApplide);
    }

  }, [])
 return (
 <div>
    <h2 className="text-2xl">Jobs I Applyeds:{applyedJobs.length}</h2>  
    <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>all</a></li>
    <li><a>Remote</a></li>
    <li><a>onside</a></li>
  </ul>
</div>
    <ul>
      {
        applyedJobs.map(jobs=><li key={jobs.id}> 
       <span>{jobs.job_title}{jobs.company_name}</span>
        </li>)
      }
      </ul>                                                      
  </div>
 );
};

export default ApplyedJobs;