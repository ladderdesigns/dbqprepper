import React from "react";
import Navbar from "../components/navbar"

function AboutPage() {
  return (
    
      <div className="flex flex-col w-screen h-auto min-h-screen pb-10 font-sans bg-gray-400">
      <Navbar />
      <div className="self-center w-3/4 px-8 text-center bg-gray-200 rounded-lg shadow-lg">
        <div className="py-8 ">
          <p className="mb-3 text-xl font-extrabold md:text-2xl">
            DBQ Prepper is dedicated to Nicholas Patel.{" "}
          </p>

         

          <p className="text-base text-gray-700">
            Keep working hard little brother and you will go far.
          </p>
        </div>
        </div>
    </div>
  );
}

export default AboutPage;
