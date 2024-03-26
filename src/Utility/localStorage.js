const getStorageApplication =()=>{
   const StorageApplication = localStorage.getItem('job Applications');
   if(StorageApplication){
     return JSON.parse(StorageApplication);               
   } 
   return[];              
}

const SaveJobApplication = id =>{
  const StorageApplications = getStorageApplication();
  const exists = StorageApplications.find(jobId => jobId === id);
  if(!exists){
  StorageApplications.push(id);
  localStorage.setItem('job Applications', JSON.stringify(StorageApplications));                
  }
}

export  { getStorageApplication, SaveJobApplication};