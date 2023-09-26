// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  //   console.log(id, job);

  const handleJobApply = () => {
    saveJobApplication(idInt);
    toast.success("you have applei sacssecfully");
  };

  return (
    <div>
      <h1>this is job details of : {id} </h1>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h1>Company Name : {job.company_name}</h1>
          <h2> Job Description : {job.job_description} </h2>
        </div>
        <div className="border">
          <h1>side things</h1>
          <button onClick={handleJobApply} className="btn btn-primary w-full">
            apply now{" "}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
