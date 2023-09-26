// import React from 'react';
import PropTypes from "prop-types";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div>
      <div className="card card-compact h-80  bg-base-100 shadow-xl">
        <figure>
          <img className="w-52" src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {job_title} </h2>
          <p> {company_name} </p>
          <div>
            <button className="btn mr-5 border border-purple-500">
              {" "}
              {remote_or_onsite}{" "}
            </button>
            <button className="btn border border-purple-500">
              {" "}
              {job_type}{" "}
            </button>
          </div>
          <div className="flex gap-7">
            <h1 className="flex items-center text-2xl ">
              {" "}
              <GrLocation className=" mr-2"> </GrLocation> {location}
            </h1>
            <h1 className="flex items-center text-2xl ">
              {" "}
              <AiOutlineDollar className=" mr-2"> </AiOutlineDollar> {salary}
            </h1>
          </div>
          <div className="card-actions ">
            <Link to={`/job/${id}`}>
              {" "}
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
