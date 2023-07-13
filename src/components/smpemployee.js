import React, { useState, useEffect } from "react";

import Navbar from "./navbar";

export default function Smpemployee() {
  const [duedate, setDuedate] = useState("");
  const [startdate, setStartdate] = useState("");
  const [salary, setSalary] = useState("");

  const [eligibleweekstart, setEligibleweekstart] = useState("");
  const [qualifyingweekstart, setQualifyingweekstart] = useState("");

  useEffect(() => {
    if (duedate !== "") {
      const date = eligibleWeek(duedate);
      const year = date.getFullYear();
      const month = date.toLocaleString("default", { month: "long" });
      const day = date.getDate();

      const simplifiedDateStr = `${month} ${day}, ${year}`;
      setStartdate(duedate);
      setEligibleweekstart(simplifiedDateStr);

      const qdate = qualifyingWeek(duedate);
      const qyear = qdate.getFullYear();
      const qmonth = String(qdate.getMonth() + 1).padStart(2, '0');
      const qday = String(qdate.getDate()).padStart(2, '0');
      const qsimplifiedDateStr = `${qyear}-${qmonth}-${qday}`;
      setQualifyingweekstart(qsimplifiedDateStr);
    }
  }, [duedate]);


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="grid grid-cols-4 mt-5 w-[80%] mx-auto">
          <div className="content-center items-center col-span-1 ">
            <h2 class="text-2xl font-extrabold dark:text-white">
              Input details
            </h2>
            <div>
              <label
                for="duedate"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
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
                    setDuedate(event.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div>
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
                  min={qualifyingweekstart}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                  onChange={(event) => {
                    setStartdate(event.target.value);
                  }}
                  defaultValue={duedate}
                />
              </div>
            </div>
            <div>
              <label
                for="salary"
                class="block mb-2 text-sm mt-5 font-medium text-gray-900 dark:text-white"
              >
                Anual Salary
              </label>
              <input
                type="number"
                id="salary"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="£"
                onChange={(event) => {
                  setSalary(event.target.value);
                }}
                required
              />
            </div>
            <div>
              <div class="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Eligible Week Start
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  To meet the eligibility criteria for Maternity Pay, the
                  individual must have started working for the employer
                  continuously no later than the week of {eligibleweekstart}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const eligibleWeek = (date) => {
  var result = new Date(date);
  result.setDate(result.getDate() - 7 * 39);
  result.setDate(result.getDate() - result.getDay() - 1);
  return result;
};
const qualifyingWeek = (date) => {
    var result = new Date(date);
    result.setDate(result.getDate() - 7 * 11);
    // result.setDate(result.getDate() - result.getDay() - 1);
    return result;
  };
