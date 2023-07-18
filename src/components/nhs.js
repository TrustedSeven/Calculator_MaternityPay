import React from "react";
import { useState } from "react";

import Navbar from "./navbar";
import { calculateNHS } from "../functions/calculateNHS";

export default function NHS() {
  const [duedate, setDuedate] = useState();
  const [startdate, setStartdate] = useState();
  const [salary, setSalary] = useState();
  const [con1, setCon1] = useState(false);
  const [con2, setCon2] = useState(false);
  const [nhsdata, setNhsdata] = useState([]);

  const MainCal = () => {
    console.log("*ddddddddd*****", calculateNHS(con1, con2, duedate, startdate, salary));
    setNhsdata(calculateNHS(con1, con2, duedate, startdate, salary));
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="grid lg:grid-cols-3 ml-5">
        <div className="content-center items-center lg:col-span-1">
          <h2 class="text-2xl font-extrabold dark:text-white">Input details</h2>
          <div className="mt-5">
            <label
              for="duedate"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Baby Due Date
            </label>
            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                type="date"
                id="duedate"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
                onChange={(event) => {
                  console.log(event.target.value);
                  setDuedate(event.target.value);
                }}
                required
              />
              {/* <DatePicker value={duedate} onChange={
                setDuedate
            } />
            {duedate?.toDate?.().toString()} */}
            </div>
            <label
              for="maternitydate"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
            >
              Maternity Start Date
            </label>
            <div class="relative max-w-sm">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                type="date"
                id="maternitydate"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
                onChange={(event) => {
                  console.log(event.target.value);
                  setStartdate(event.target.value);
                }}
                required
              />
            </div>

            <div className="relative max-w-sm mt-5">
              <label
                for="salary"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Anual Salary
              </label>
              <input
                type="number"
                id="salary"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="£"
                onChange={(event) => {
                  console.log(event.target.value);
                  setSalary(event.target.value);
                }}
                required
              />
            </div>
            <div class="mt-5">
              <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
                Please check if you are in...
              </h3>
              <ul class="w-11/12 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      onChange={(event) => {
                        setCon1(!con1);
                      }}
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="vue-checkbox"
                      class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      12 months continuous service with one or more NHS
                      employers at the beginning of the 11th week before your
                      baby is due.
                    </label>
                  </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      onChange={(event) => {
                        setCon2(!con2);
                      }}
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="react-checkbox"
                      class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      26 weeks continuous service with the same NHS employer at
                      the beginning of the 15th week before your baby is due.
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
              onClick={MainCal}
            >
              Calculate Now
            </button>
          </div>
        </div>
        <div className="content-center items-center lg:col-span-2">
          <h2 class="text-2xl font-extrabold dark:text-white">NHS Result</h2>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Month
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Regular Pay
                  </th>
                  <th scope="col" class="px-6 py-3">
                    SMP
                  </th>
                  <th scope="col" class="px-6 py-3">
                    MA
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total Pay
                  </th>
                </tr>
              </thead>
              <tbody>
                {nhsdata.map((item, index) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                    <td class="px-6 py-4">{item["Month"]}</td>
                    <td class="px-6 py-4">{item["Regular Pay"]}</td>
                    <td class="px-6 py-4">{item["SMP"]}</td>
                    <td class="px-6 py-4">{item["MA"]}</td>
                    <td class="px-6 py-4">{item["Total"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
