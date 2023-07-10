import React, { useState } from "react";

import Navbar from "./navbar";

const Input = () => {
  const [state, setState] = useState({
    title: "",
    surname: "",
    dob: "",
    nationalInsuranceNumber: "",
    address: "",
    phoneNumber: "",
    email: "",
    specialDate: "",
    employerAddress: "",
    employerPhoneNumber: "",
    employmentStartDate: "",
    employmentEndDate: "",
    lastPaymentNumber: "",
    payFrequency: "",
    anotherEmployer: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md mt-5 mb-5 p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Fill out your information
          </h2>

          <div className="space-y-6">
            {/* Section 1: About you */}
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                About you
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="title" className="block text-gray-700">
                    Title
                  </label>
                  <select
                    id="title"
                    name="title"
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option>Select</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Ms</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="surname" className="block text-gray-700">
                    Surname or Family name
                  </label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Surname or Family name"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-gray-700">
                    All other names in full
                  </label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="All other names in full"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-gray-700">
                    All other surnames or family names
                  </label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="All other surnames or family names you have used or have been known by"
                  />
                </div>
                <div>
                  <label htmlFor="dob" className="block text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Date of Birth"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nationalInsuranceNumber"
                    className="block text-gray-700"
                  >
                    National Insurance Number
                  </label>
                  <input
                    id="nationalInsuranceNumber"
                    name="nationalInsuranceNumber"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="National Insurance Number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nationalInsuranceNumber"
                    className="block text-gray-700"
                  >
                    Don't you have National Insurance Number?
                  </label>
                  <input
                    id="nationalInsuranceNumber"
                    name="nationalInsuranceNumber"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="National Insurance Number"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    If you do not know your National Insurance number, have you
                    ever had one or used one at any time?
                  </p>
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Address"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700">
                    Other Address
                  </label>
                  <input
                    id="otheraddress"
                    name="otheraddress"
                    type="text"
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Other Address"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Have you lived at any other addresses in the last 3 years?
                  </p>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                  <label htmlFor="duedate" className="block text-gray-700">
                    Baby due date
                  </label>
                  <input
                    id="duedate"
                    name="duedate"
                    type="date"
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Baby duedate"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    What date do you expect the baby to be born?
                  </p>
                </div>
                <div>
                  <label htmlFor="duedate" className="block text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    id="bdob"
                    name="bdob"
                    type="date"
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Baby date of birth"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    If your baby has already been born, please tell us the date
                    of birth
                  </p>
                </div>
              </div>
            </div>
            {/* Section 2: About your work */}
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                About your work
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="specialDate" className="block text-gray-700">
                    Qualified Week Start
                  </label>
                  <input
                    id="qualifiedweekstart"
                    name="qualifiedweekstart"
                    type="date"
                    disabled={true}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Special Date"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    What date does the 15th week before the week the baby is due
                    start on? (auto complete from due date)
                  </p>
                </div>
                <div>
                  <label htmlFor="specialDate" className="block text-gray-700">
                    Qualified Week within employment
                  </label>
                  <input
                    id="qualifiedweekstart"
                    name="qualifiedweekstart"
                    type="date"
                    onChange={handleChange}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Special Date"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Were you employed by an employer during this 15th week
                    (insert the week details)?
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-5">
                <div>
                  <input
                    id="smp-checkbox"
                    type="checkbox"
                    value=""
                    onChange={(event) => {
                      console.log("lll");
                    }}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="smp-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Are you getting or going to get SMP (Statutory Maternity
                    Pay)?
                  </label>
                </div>
                <div>
                  <input
                    id="director-checkbox"
                    type="checkbox"
                    value=""
                    onChange={(event) => {
                      console.log("lll");
                    }}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="smp-checkbox"
                    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Are you a company director?
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                  <label
                    htmlFor="employerAddress"
                    className="block text-gray-700"
                  >
                    Employer's Address
                  </label>
                  <input
                    id="employerAddress"
                    name="employerAddress"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Employer's Address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="employerPhoneNumber"
                    className="block text-gray-700"
                  >
                    Employer's Phone Number
                  </label>
                  <input
                    id="employerPhoneNumber"
                    name="employerPhoneNumber"
                    type="tel"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Employer's Phone Number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="employmentStartDate"
                    className="block text-gray-700"
                  >
                    Employment Start Date
                  </label>
                  <input
                    id="employmentStartDate"
                    name="employmentStartDate"
                    type="date"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Employment Start Date"
                  />
                </div>
                <div>
                  <label
                    htmlFor="employmentEndDate"
                    className="block text-gray-700"
                  >
                    Employment End Date
                  </label>
                  <input
                    id="employmentEndDate"
                    name="employmentEndDate"
                    type="date"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Employment End Date"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastPaymentNumber"
                    className="block text-gray-700"
                  >
                    Last Payment, Employee, Clock, or Work Staff Number
                  </label>
                  <input
                    id="lastPaymentNumber"
                    name="lastPaymentNumber"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Last Payment, Employee, Clock, or Work Staff Number"
                  />
                </div>
                <div>
                  <label htmlFor="payFrequency" className="block text-gray-700">
                    How often were you normally paid?
                  </label>
                  <input
                    id="payFrequency"
                    name="payFrequency"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="How often were you normally paid?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="anotherEmployer"
                    className="block text-gray-700"
                  >
                    Do you have another employer to tell us about?
                  </label>
                  <input
                    id="anotherEmployer"
                    name="anotherEmployer"
                    type="text"
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Do you have another employer to tell us about?"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
