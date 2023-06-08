import React from "react";
// import { Link } from "react-router-dom";
const LeftContainer = () => {
  return (
    <div className="flex flex-col justify-between h-full pt-6 px-8 pb-12 bg-white shadow">
      <div>
        <div>
          <a href="#" className="italic text-black-800 font-bold text-2xl">
            LODGN
          </a>
        </div>
        <div className="font-semibold mt-10">
          <a href="" className="hover:text-lightgreen">
            Current requests
          </a>
          <hr className="my-4 " />
          <a href="" className="hover:text-lightgreen">
            Ongoing stays
          </a>
          <hr className="my-4" />
          <a href="" className="hover:text-lightgreen">
            Previous stays
          </a>
          <hr className="my-4" />
          <a href="" className="hover:text-lightgreen">
            Reports
          </a>
          <hr className="my-4" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <button className="bg-green text-white p-4 font-semibold rounded-xl w-full">
          Log-out
        </button>
        <p>Help-Desk:</p>
        <p>786-874 9988</p>
      </div>
    </div>
  );
};

export default LeftContainer;
