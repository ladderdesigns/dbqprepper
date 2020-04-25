import React from "react";
import Navbar from "../components/navbar"

function AboutPage() {
  return (
    
      <div className="flex flex-col w-screen h-auto min-h-screen pb-10 font-sans bg-gray-400">
      <Navbar />
      <div className="self-center w-3/4 px-8 mt-16 text-center bg-gray-200 rounded-lg shadow-lg md:px-24">
        <div className="py-8 ">
          <p className="mb-3 text-xl font-extrabold md:text-2xl">
            DBQ Prepper is dedicated to Nicholas Patel.{" "}
          </p>

         

          <p className="text-base text-gray-700">
            {"After my younger brother asked me about new ways he could prepare for his AP European History exam, I decided to create DBQ Prepper as a way for students to better aclimate to new Collegeboard testing. Keep working hard little brother - you'll go far."}
          </p>
        </div>
        </div>
    </div>
  );
}

export default AboutPage;
