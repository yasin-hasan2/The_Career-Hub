// import React from 'react';

import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/LocalStorage";

const AppledJobs = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(jobs);
      console.log(storedJobIds);
      console.log(jobsApplied);
    }
  }, []);

  return (
    <div>
      <h1>jobs i appled </h1>
    </div>
  );
};

export default AppledJobs;
