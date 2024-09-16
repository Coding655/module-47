import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
          <div className="card border bg-base-100 shadow-xl p-6">
       
          <img
            className='w-[110px] ml-7'
            src={logo}
            alt="Shoes" />
       
            <div className="card-body">
              <h2 className="card-title">{job_title}</h2>
              <p className='font-medium mb-2'>{company_name}</p>
              <div className='mb-2'>
                  <button className='px-5 py-2 rounded font-extrabold border-[#7E90FE] border mr-4 text-[#7E90FE]'>{remote_or_onsite}</button>
                  <button className='px-5 py-2 rounded font-extrabold border-[#7E90FE] border mr-4 text-[#7E90FE]'>{job_type}</button>
              </div>
              <div className='flex mb-2'>
                  <h2 className='flex font-medium mr-4'><IoLocationOutline className='text-2xl mr-2'></IoLocationOutline>{location}</h2>
                  <h2 className='flex font-medium mr-4'><BsCurrencyDollar className='text-2xl mr-2'></BsCurrencyDollar>Salary: {salary}</h2>
              </div>
              <div className="">
                  <Link to={`/job/${id}`}>
                    <button className='btn font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Show Details</button>
                  </Link>
            </div>
        </div>
      </div>
        </div>
    );
};

export default Jobs;