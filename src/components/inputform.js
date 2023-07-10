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
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Fill out your information
          </h2>
          <form onSubmit={handleSubmit}>
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
                      Surname and Family name
                    </label>
                    <input
                      id="surname"
                      name="surname"
                      type="text"
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Surname and Family name"
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
                    <label
                      htmlFor="phoneNumber"
                      className="block text-gray-700"
                    >
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
              </div>
              {/* Section 2: About your work */}
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  About your work
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="specialDate"
                      className="block text-gray-700"
                    >
                      Special Date
                    </label>
                    <input
                      id="specialDate"
                      name="specialDate"
                      type="date"
                      onChange={handleChange}
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Special Date"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      This is a special date (e.g., anniversary, significant
                      event).
                    </p>
                  </div>
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
                    <label
                      htmlFor="payFrequency"
                      className="block text-gray-700"
                    >
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
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
