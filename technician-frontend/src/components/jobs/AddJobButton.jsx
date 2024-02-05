import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddJobButton = () => {
    const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate("/add-job")}
      className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4  sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none outline-none rounded "
    >
      <p className="text-sm font-medium leading-none text-white">Add Job</p>
    </button>
  );
}

export default AddJobButton