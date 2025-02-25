import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedsJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setdataLength] = useState(4);

   useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data));
   }, [])


  return (
 <div>
    <div className="text-center">
      <h2 className="text-5xl">Featured Jobs:{jobs.length}</h2>
      <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
    </div>
    <div className="grid grid-cols-2 gap-6">
      {
        jobs.slice(0, dataLength). map (job=> <Job key={job.id} job={job}></Job>)           
      }              
   </div>

   <div className={dataLength === jobs.length && 'hidden'}>
        <button
        onClick={()=> setdataLength(jobs.length)}
         className="btn btn-primary ">Show All Jobs</button>             
  </div>                                                        
 </div>
 );
};

export default FeaturedsJobs;