import React from "react";
import Navbar from "../components/navbar"

function AboutPage() {
  return (
    
      <div className="flex flex-col w-screen h-auto min-h-screen pb-10 font-sans bg-gray-400">
      <Navbar />
      <div className="self-center w-3/4 px-8 mt-16 text-center bg-gray-200 rounded-lg shadow-lg md:px-24">
        <div className="py-8 ">
          

         
        <p className="mb-3 text-xl font-extrabold md:text-2xl">
            A little bit about me...{" "}
          </p>
          <p className="text-lg">
            <span className="font-bold"> Hi there! </span> {" "} My name is Jacob Patel. I am an undergraduate at the University of California, Berkeley studying Computer Science and Education. I decided to create DBQ Prepper after my younger brother asked me for help in preparing for his AP European History exam. DBQ Prepper is intended to help students acclimate to the new Collegeboard testing procedures. Good luck on test day! 
          </p>
        </div>
        </div>
    </div>
  );
}

export default AboutPage;
