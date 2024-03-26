import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveJobApplication } from "../../Utility/localStorage";


const JobDeatils = () => {
  const jobs = useLoaderData();
  const {id} = useParams()
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);
  console.log(job); 

  const handleApplyJob = ()=> {
    SaveJobApplication(idInt);
   toast('you have applying sussesfully');
  }
  

 return (
   <div>
     {/* more work */}
     <div>
         <h2 className="text-3xl text-center mt-14">Job Details</h2>           
     </div>
     <div className="grid gap-4 md:grid-cols-4">             
       <div className="borer md:col-span-3">
         <h2 className="text-4xl">Deatils Coming hare</h2> 
         <h2>Job deatils of:{job. job_title}</h2>           
      </div> 
       <div className="border">
          <h2 className="text-2xl">Side things</h2>           
           <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>         
       </div>            
   </div>
   <ToastContainer />                                                      
   </div>
   );
};

export default JobDeatils;