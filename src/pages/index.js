import React from "react";
import Navbar from "../components/navbar";
import { Link } from "gatsby";

function IndexPage() {
  return (
    <div className="w-screen h-screen bg-gray-200">
      <Navbar />
      <div id="navigation" className="flex justify-center w-full">
        <div className="flex items-center justify-around w-3/5 py-4">
          <div className="relative inline-block w-36">
            <select className="block w-full px-4 py-2 pr-8 leading-tight text-center bg-white border border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline">
              <option>Select Class</option>
              <option>AP Euro</option>
              <option>AP World </option>
              <option>APUSH </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <button className="block px-4 py-2 leading-tight bg-white border border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline">
            Generate Prompt
          </button>
          <Link to="#" className="text-blue-700 underline">
            Download Prompt
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full" id="input">
        <div className="w-3/5">
        <textarea className="w-full h-64 p-6 rounded-lg"></textarea>
        </div>
       
      </div>
      <div className="flex justify-center w-full" id="submit">
        <div className="flex justify-end w-3/5 py-2">
          <button className="block px-5 py-2 font-semibold leading-tight text-white bg-black border border-gray-100 rounded-full shadow appearance-none hover:border-gray-400 focus:outline-none focus:shadow-outline">
            Download Response
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
