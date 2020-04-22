import React from "react";
import Navbar from "../components/navbar";

function IndexPage() {
  const [courses] = React.useState([
    { label: "AP Euro", value: "ap-euro" },
    { label: "AP World", value: "ap-world" },
    { label: "APUSH", value: "apush" },
  ]);
  const [course, setCourse] = React.useState();
  const [years] = React.useState([
    { label: "2018", value: "2018" },
    { label: "2017", value: "2017" },
    { label: "2016", value: "2016" },
    { label: "2015", value: "2015" },
  ]);
  const [year, setYear] = React.useState();
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-300">
      <Navbar />
      <div className="self-center max-w-sm overflow-hidden text-center rounded shadow-lg md:max-w-lg">
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
            <select className="block w-full px-4 py-2 text-sm leading-tight text-center bg-white border border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" value={course} onChange={e => setCourse(e.currentTarget.value)}>
              {courses.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
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
            <select className="block w-full px-4 py-2 pr-8 text-sm leading-tight text-center bg-white border border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline" value={year} onChange={e => setYear(e.currentTarget.value)}>
            {years.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
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
          <button className="px-4 py-2 text-sm font-bold leading-tight bg-white border border-gray-400 rounded-full shadow appearance-none md:block hover:border-gray-500 focus:outline-none focus:shadow-outline">
            Generate Prompt
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
