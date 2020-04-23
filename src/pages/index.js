import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Input from "../components/input";
import prompts from "../data/prompts.json";

function IndexPage() {
  const [course, setCourse] = useState();
  const [link, setLink] = useState();

  useEffect(() => {
    console.log(course, link)
  });

  return (
    <div className="flex flex-col w-screen bg-gray-300">
      <Navbar />
      <div className="self-center max-w-sm my-4 text-center rounded shadow-lg md:max-w-lg">
        <div className="px-6 py-4">
          <p className="mb-2 text-xl font-bold md:text-3xl">
            2020 PRACTICE DBQ FREE-RESPONSE QUESTIONS{" "}
          </p>
          <p className="mb-2 text-lg "> HISTORY CLASS</p>
          <p className="mb-2 text-lg "> Total Time—1 hour and 40 minutes</p>
          <p className="text-base text-gray-700">
            <span className="font-bold"> Directions:</span> First select your
            subject, then select the year of the prompt you want, then click the
            generate button. You will be taken to a new page with your prompt. A
            clock will start as soon as you enter.
          </p>
        </div>
        <div className="flex flex-col justify-between px-6 py-4">
          <div className="relative inline-block mb-4">
            <select className="block w-full px-4 py-2 pr-8 text-sm leading-tight text-center bg-white border border-0 border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" value={course} onChange={e => setCourse(e.currentTarget.value)}>
            <option> Select Subject...</option>
              {prompts.map(({ name }) => (
                <option key={name} value={name}> {name} </option>
              ))}
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
          <div className="relative inline-block mb-4 w-36">
            <select className="block w-full px-4 py-2 pr-8 text-sm leading-tight text-center bg-white border border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" value={link} onChange={e => setLink(e.currentTarget.value)}>
            <option> Select Year...</option>
              {prompts.filter(obj => obj.name === course).map(({ pdfs }) => (
                pdfs.map(({ year, link }) => (
                  <option key={year} value={link}> {year} </option>
                  ))
              ))}
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
          <button className="px-4 py-2 mb-4 text-sm font-bold leading-tight bg-white border border-gray-400 rounded-full shadow appearance-none md:block hover:border-gray-500 focus:outline-none focus:shadow-outline">
            Generate Prompt
          </button>
          <Input></Input>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
