import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./navbar";

const Input = () => {
  const [duedate, setDuedate] = useState("");
  const [qualifyingweekstart, setQualifyingweekstart] = useState("");
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [payfrequency, setPayfrequency] = useState();
  const handlePayFrequency = (event) => {
    setPayfrequency(event.target.value);
  };

  const [otherpayfrequency, setOtherpayfrequency] = useState();
  const otherhandlePayFrequency = (event) => {
    setOtherpayfrequency(event.target.value);
  };

  const [sickpay, setSickpay] = useState();
  const handleSickpay = (event) => {
    setSickpay(event.target.value);
  };

  const [otheremployer, setOtheremployer] = useState(false);
  const handleOtherEmployer = (event) => {
    setOtheremployer(event.target.value);
  };
  const [prelated, setPrelated] = useState();
  const handlePrelated = (event) => {
    setPrelated(event.target.value);
  };

  const [agency, setAgency] = useState();
  const handleAgency = (event) => {
    setAgency(event.target.value);
  };

  const [agencystill, setAgencystill] = useState();
  const handleAgencystill = (event) => {
    setAgencystill(event.target.value);
  };

  const [otheragency, setOtheragency] = useState();
  const handleOtherAgency = (event) => {
    setOtheragency(event.target.value);
  };

  const [asickpay, setAsickpay] = useState();
  const handleAsickpay = (event) => {
    setAsickpay(event.target.value);
  };

  const [aprelated, setAprelated] = useState();
  const handleAprelated = (event) => {
    setAprelated(event.target.value);
  };

  const [stillself, setStillself] = useState();
  const handleStillself = (event) => {
    setStillself(event.target.value);
  };

  const [civilselfstop, setCivilselfstop] = useState();
  const handleCivilselfstop = (event) => {
    setCivilselfstop(event.target.value);
  };

  const [civilsickrel, setCivilsickrel] = useState();
  const handleCivilsickrel = (event) => {
    setCivilsickrel(event.target.value);
  };

  const [mcend, setMcend] = useState();
  const handleMcend = (event) =>{
    setMcend(event.target.value);
  }

  const handleAddressChange = async (event) => {
    const inputAddress = event.target.value;

    if (inputAddress.length > 2) {
      try {
        const response = await axios.get(
          `https://api.getAddress.io/autocomplete/${inputAddress}?api-key=AaxzEUFc_0Wnvol9Jv52CA39839`
        );

        setSuggestions(response.data.suggestions);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSuggestions([]);
    }

    setAddress(inputAddress);
  };

  const handleSuggestionSelect = (suggestion) => {
    setAddress(suggestion);
    setSuggestions([]);
  };

  useEffect(() => {
    const dateStr = addDays(duedate, -7 * 15);
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();

    const simplifiedDateStr = `${month} ${day}, ${year}`;

    setQualifyingweekstart(simplifiedDateStr);
  }, [duedate]);

  const handleChange = (e) => {
    //code to be inserted
  };

  const [step, setStep] = useState("1");
  const handleStep = (e) => {
    //code to be inserted
    console.log(e.target.value);
    setStep(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md mt-5 mb-5 p-6">
          <div>
            <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 flex justify-center">
              <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "1" ? "bg-red-500" : ""
                  }`}
                  value="1"
                  onClick={handleStep}
                >
                  1
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "2" ? "bg-red-500" : ""
                  }`}
                  value="2"
                  onClick={handleStep}
                >
                  2
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "3" ? "bg-red-500" : ""
                  }`}
                  value="3"
                  onClick={handleStep}
                >
                  3
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "4" ? "bg-red-500" : ""
                  }`}
                  value="4"
                  onClick={handleStep}
                >
                  4
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "5" ? "bg-red-500" : ""
                  }`}
                  value="5"
                  onClick={handleStep}
                >
                  5
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "6" ? "bg-red-500" : ""
                  }`}
                  value="6"
                  onClick={handleStep}
                >
                  6
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "7" ? "bg-red-500" : ""
                  }`}
                  value="7"
                  onClick={handleStep}
                >
                  7
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "8" ? "bg-red-500" : ""
                  }`}
                  value="8"
                  onClick={handleStep}
                >
                  8
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "9" ? "bg-red-500" : ""
                  }`}
                  value="9"
                  onClick={handleStep}
                >
                  9
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "10" ? "bg-red-500" : ""
                  }`}
                  value="10"
                  onClick={handleStep}
                >
                  10
                </button>
              </li>
              <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <button
                  class={`w-10 h-10 rounded-full bg-blue-500 hover:bg-red-500 text-white ${
                    step === "11" ? "bg-red-500" : ""
                  }`}
                  value="11"
                  onClick={handleStep}
                >
                  11
                </button>
              </li>
            </ol>
          </div>
          <div></div>

          <div className="space-y-6">
            {/* Section 1: About you */}
            {step === "1" && (
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
                    <label
                      htmlFor="phoneNumber"
                      className="block text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="number"
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
                      If you do not know your National Insurance number, have
                      you ever had one or used one at any time?
                    </label>
                    <div class="flex">
                      <div class="flex items-center mr-4">
                        <input
                          id="inline-radio"
                          type="radio"
                          value=""
                          name="inline-radio-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="inline-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input
                          id="inline-2-radio"
                          type="radio"
                          value=""
                          name="inline-radio-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="inline-2-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-gray-700">
                      Address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={address}
                      onChange={handleAddressChange}
                      required
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Address"
                    />
                    {suggestions.length > 0 && (
                      <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 ml-5">
                        {suggestions.map((suggestion) => (
                          <li
                            key={suggestion}
                            onClick={() =>
                              handleSuggestionSelect(suggestion.address)
                            }
                          >
                            {suggestion.address}
                          </li>
                        ))}
                      </ul>
                    )}
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
                      onChange={(event) => {
                        setDuedate(event.target.value);
                      }}
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
                      If your baby has already been born, please tell us the
                      date of birth
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === "2" && (
              <div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-4">
                    About your Test Period
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="specialDate"
                        className="block text-gray-700"
                      >
                        The first day of your Test Period(Sunday)
                      </label>
                      <input
                        id="testperiodstart"
                        name="testperiodstart"
                        type="date"
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="specialDate"
                        className="block text-gray-700"
                      >
                        The lasst day of your Last Period(Saturday)
                      </label>
                      <input
                        id="testperiodend"
                        name="testperiodend"
                        type="date"
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="specialDate"
                        className="block text-gray-700"
                      >
                        During your Test Period, are you or have you been
                        employed?
                      </label>
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4 mt-5">
                          <input
                            id="withintestyes-radio"
                            type="radio"
                            value=""
                            name="withintest-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="withintestyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4 mt-5">
                          <input
                            id="withintestno-radio"
                            type="radio"
                            value=""
                            name="withintest-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="withintestno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="specialDate"
                        className="block text-gray-700"
                      >
                        During your Test Period, have you had any furlough
                        payments from the Coronavirus Job Retention Scheme?
                      </label>
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="retentionyes-radio"
                            type="radio"
                            value=""
                            name="retention-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="retentionyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="retentionno-radio"
                            type="radio"
                            value=""
                            name="retention-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="retentionno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
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
                        Qualified Week Start
                      </label>
                      <input
                        id="qualifiedweekstart"
                        name="qualifiedweekstart"
                        type="text"
                        value={qualifyingweekstart}
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        What date does the 15th week before the week the baby is
                        due start on? (auto complete from due date)
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="specialDate"
                        className="block text-gray-700"
                      >
                        Were you employed by an employer during this 15th week?
                      </label>
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="withinyes-radio"
                            type="radio"
                            value=""
                            name="within-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="withinyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="withinno-radio"
                            type="radio"
                            value=""
                            name="within-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="withinno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 mt-5">
                    <div>
                      <label
                        for="smp-checkbox"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Are you getting or going to get SMP (Statutory Maternity
                        Pay)?
                      </label>
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="smpyes-radio"
                            type="radio"
                            value=""
                            name="smp-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="smpyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="smpno-radio"
                            type="radio"
                            value=""
                            name="smp-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="smpno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        for="director-checkbox"
                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Are you a company director?
                      </label>
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="directoryes-radio"
                            type="radio"
                            value=""
                            name="director-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="directoryes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="directorno-radio"
                            type="radio"
                            value=""
                            name="director-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="directorno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
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
                        type="number"
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
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="payfrequencyweekly-radio"
                            type="radio"
                            value="Weekly"
                            name="payfrequency-group"
                            checked={payfrequency === "Weekly"}
                            onChange={handlePayFrequency}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="payfrequencyweekly-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Weekly
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="payfrequencyfortnightly-radio"
                            type="radio"
                            value="Fortnightly"
                            checked={payfrequency === "Fortnightly"}
                            onChange={handlePayFrequency}
                            name="payfrequency-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="payfrequencyfortnightly-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Fortnightly
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="payfrequency4weeks-radio"
                            type="radio"
                            checked={payfrequency === "Every 4 Weeks"}
                            value="Every 4 Weeks"
                            onChange={handlePayFrequency}
                            name="payfrequency-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="payfrequency4weeks-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Every 4 Weeks
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="payfrequencymonthly-radio"
                            type="radio"
                            value="Monthly"
                            checked={payfrequency === "Monthly"}
                            onChange={handlePayFrequency}
                            name="payfrequency-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="payfrequencymonthly-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Monthly
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="payfrequencyother-radio"
                            type="radio"
                            value="Other"
                            checked={payfrequency === "Other"}
                            onChange={handlePayFrequency}
                            name="payfrequency-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="payfrequencyother-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                      {payfrequency === "Other" && (
                        <input
                          id="payother"
                          name="payother"
                          type="text"
                          onChange={handleChange}
                          className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Please note your pay frequency"
                        />
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="anotherEmployer"
                        className="block text-gray-700"
                      >
                        Do you have another employer to tell us about?
                      </label>
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="secondemployyes-radio"
                            type="radio"
                            value="yes"
                            checked={otheremployer === "yes"}
                            onChange={handleOtherEmployer}
                            name="secondemploy-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="secondemployyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="secondemployno-radio"
                            type="radio"
                            value="no"
                            checked={otheremployer === "no"}
                            onChange={handleOtherEmployer}
                            name="secondemploy-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="secondemployno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {otheremployer === "yes" && (
                    <div>
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
                            type="number"
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
                            htmlFor="otherpayFrequency"
                            className="block text-gray-700"
                          >
                            How often were you normally paid?
                          </label>
                          <div class="flex mt-5">
                            <div class="flex items-center mr-4">
                              <input
                                id="otherpayfrequencyweekly-radio"
                                type="radio"
                                value="Weekly"
                                name="otherpayfrequency-group"
                                checked={otherpayfrequency === "Weekly"}
                                onChange={otherhandlePayFrequency}
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="otherpayfrequencyweekly-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Weekly
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="otherpayfrequencyfortnightly-radio"
                                type="radio"
                                value="Fortnightly"
                                checked={otherpayfrequency === "Fortnightly"}
                                onChange={otherhandlePayFrequency}
                                name="otherpayfrequency-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="otherpayfrequencyfortnightly-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Fortnightly
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="otherpayfrequency4weeks-radio"
                                type="radio"
                                checked={otherpayfrequency === "Every 4 Weeks"}
                                value="Every 4 Weeks"
                                onChange={otherhandlePayFrequency}
                                name="otherpayfrequency-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="otherpayfrequency4weeks-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Every 4 Weeks
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="otherpayfrequencymonthly-radio"
                                type="radio"
                                value="Monthly"
                                checked={otherpayfrequency === "Monthly"}
                                onChange={otherhandlePayFrequency}
                                name="otherpayfrequency-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="otherpayfrequencymonthly-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Monthly
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="otherpayfrequencyother-radio"
                                type="radio"
                                value="Other"
                                checked={otherpayfrequency === "Other"}
                                onChange={otherhandlePayFrequency}
                                name="otherpayfrequency-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="otherpayfrequencyother-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                          {otherpayfrequency === "Other" && (
                            <input
                              id="otherpayother"
                              name="otherpayother"
                              type="text"
                              onChange={handleChange}
                              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Please note your pay frequency"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="mt-5">
                      <label
                        htmlFor="anotherEmployer"
                        className="block text-gray-700"
                      >
                        Have you stopped work to have the baby?
                      </label>
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="stopyes-radio"
                            type="radio"
                            value="yes"
                            name="stop-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="stopyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                          <div className="ml-5">
                            <label
                              htmlFor="employmentEndDate"
                              className="block text-gray-700"
                            >
                              What date did you last work?
                            </label>
                            <input
                              id="stopyesdate"
                              name="stopyesdate"
                              type="date"
                              onChange={handleChange}
                              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="stopno-radio"
                            type="radio"
                            value="no"
                            name="stop-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="stopno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                          <div className="ml-5">
                            <label
                              htmlFor="employmentEndDate"
                              className="block text-gray-700"
                            >
                              What date do you plan to stop work?
                            </label>
                            <input
                              id="stopnodate"
                              name="stopnodate"
                              type="date"
                              onChange={handleChange}
                              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="Employment End Date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <label
                        htmlFor="anotherEmployer"
                        className="block text-gray-700"
                      >
                        Did you get any sick pay after you last worked?
                      </label>
                      <div class="flex mt-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="sickyes-radio"
                            type="radio"
                            value="yes"
                            checked={sickpay === "yes"}
                            onChange={handleSickpay}
                            name="sick-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="sickyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="sickno-radio"
                            type="radio"
                            value="no"
                            checked={sickpay === "no"}
                            onChange={handleSickpay}
                            name="sick-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="sickno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                      {sickpay === "yes" && (
                        <div className="mt-5">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="sickfrom"
                                className="block text-gray-700"
                              >
                                From
                              </label>
                              <input
                                id="sickfrom"
                                name="sickfrom"
                                type="date"
                                onChange={handleChange}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder=""
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="sickto"
                                className="block text-gray-700"
                              >
                                To
                              </label>
                              <input
                                id="sickto"
                                name="sickto"
                                type="date"
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder=""
                              />
                            </div>
                            <div class="flex mt-5">
                              <label
                                htmlFor="anotherEmployer"
                                className="block text-gray-700"
                              >
                                Was it pregnancy related?
                              </label>
                              <div class="flex items-center mr-4 ml-5">
                                <input
                                  id="prelatedyes-radio"
                                  type="radio"
                                  value="yes"
                                  checked={prelated === "yes"}
                                  onChange={handlePrelated}
                                  name="prelated-group"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="prelatedyes-radio"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Yes
                                </label>
                              </div>
                              <div class="flex items-center mr-4">
                                <input
                                  id="prelatedno-radio"
                                  type="radio"
                                  value="no"
                                  checked={prelated === "no"}
                                  onChange={handlePrelated}
                                  name="prelated-group"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="prelatedno-radio"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  No
                                </label>
                              </div>
                            </div>
                            {prelated === "no" && (
                              <div>
                                <label
                                  htmlFor="surname"
                                  className="block text-gray-700"
                                >
                                  What was the reason?
                                </label>
                                <input
                                  id="reason"
                                  name="reason"
                                  type="text"
                                  onChange={handleChange}
                                  className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                  placeholder="What was your sick reason?"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        <div class="flex mt-5">
                          <label
                            htmlFor="anotherEmployer"
                            className="block text-gray-700"
                          >
                            Have you started your maternity leave yet?
                          </label>
                          <div class="flex items-center mr-4 ml-5">
                            <input
                              id="maternitystartedyes-radio"
                              type="radio"
                              value="yes"
                              name="maternitystarted-group"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="maternitystartedyes-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="maternitystartedno-radio"
                              type="radio"
                              value="no"
                              name="maternitystarted-group"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="maternitystartedno-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              No
                            </label>
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="maternitystart"
                            className="block text-gray-700"
                          >
                            What date did your maternity leave start?
                          </label>
                          <input
                            id="maternitystart"
                            name="maternitystart"
                            type="date"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="mastart"
                            className="block text-gray-700"
                          >
                            What date do you want your Maternity Allowance
                            payments to start?
                          </label>
                          <input
                            id="mastart"
                            name="mastart"
                            type="date"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === "3" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Agency Workers
                </h3>
                <div>
                  <label
                    htmlFor="anotherEmployer"
                    className="block text-gray-700"
                  >
                    Do you or have you worked for an agency within your Test
                    Period?
                  </label>
                  <div class="flex mt-5">
                    <div class="flex items-center mr-4">
                      <input
                        id="agencyyes-radio"
                        type="radio"
                        value="yes"
                        checked={agency === "yes"}
                        onChange={handleAgency}
                        name="agency-group"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="agencyyes-radio"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Yes
                      </label>
                    </div>
                    <div class="flex items-center mr-4">
                      <input
                        id="agencyno-radio"
                        type="radio"
                        value="no"
                        checked={agency === "no"}
                        onChange={handleAgency}
                        name="agency-group"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="agencyno-radio"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        No
                      </label>
                    </div>
                  </div>
                  {agency === "yes" && (
                    <div>
                      <div className="grid grid-cols-2 gap-4 mt-5">
                        <div>
                          <label
                            htmlFor="agencyname"
                            className="block text-gray-700"
                          >
                            Agency’s name, in full
                          </label>
                          <input
                            id="agencyname"
                            name="agencyname"
                            type="text"
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="agency name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="agencyaddress"
                            className="block text-gray-700"
                          >
                            Agency’s address, in full
                          </label>
                          <input
                            id="agencyaddress"
                            name="agencyaddress"
                            type="text"
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="agency address"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="agencyphone"
                            className="block text-gray-700"
                          >
                            Agency’s phone number
                          </label>
                          <input
                            id="agencyphone"
                            name="agencyphone"
                            type="number"
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="agency phone"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="agencyregisterdate"
                            className="block text-gray-700"
                          >
                            What date did you register with the Agency?
                          </label>
                          <input
                            id="agencyregisterdate"
                            name="agencyregisterdate"
                            type="date"
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="agency register date"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="agencyregisterdate"
                            className="block text-gray-700"
                          >
                            Do you still have a contract with the Agency?
                          </label>
                          <div class="flex items-center mr-4">
                            <input
                              id="agencystillyes-radio"
                              type="radio"
                              value="yes"
                              checked={agencystill === "yes"}
                              onChange={handleAgencystill}
                              name="agencystill-group"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="agencystillyes-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="agencystillno-radio"
                              type="radio"
                              value="no"
                              checked={agencystill === "no"}
                              onChange={handleAgencystill}
                              name="agencystill-group"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="agencystillno-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              No
                            </label>
                          </div>
                        </div>
                        {agencystill === "yes" && (
                          <div>
                            <label
                              htmlFor="agencystillyes"
                              className="block text-gray-700"
                            >
                              When did your contract start?
                            </label>
                            <input
                              id="agencystillyes"
                              name="agencystillyes"
                              type="date"
                              onChange={handleChange}
                              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder=""
                            />
                          </div>
                        )}
                        {agencystill === "no" && (
                          <div>
                            <label
                              htmlFor="agencystillno"
                              className="block text-gray-700"
                            >
                              When did the contract end?
                            </label>
                            <input
                              id="agencystillno"
                              name="agencystillno"
                              type="date"
                              onChange={handleChange}
                              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder=""
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="otheragency"
                          className="block text-gray-700"
                        >
                          Do you have another agency to tell us about?
                        </label>
                        <div class="flex items-center mr-4">
                          <input
                            id="otheragencyyes-radio"
                            type="radio"
                            value="yes"
                            checked={otheragency === "yes"}
                            onChange={handleOtherAgency}
                            name="otheragency-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="otheragencyyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="otheragencyno-radio"
                            type="radio"
                            value="no"
                            checked={otheragency === "no"}
                            onChange={handleOtherAgency}
                            name="otheragency-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="aotheragencyno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                      {otheragency === "yes" && (
                        <div>
                          <div className="grid grid-cols-2 gap-4 mt-5">
                            <div>
                              <label
                                htmlFor="otheragencyname"
                                className="block text-gray-700"
                              >
                                Agency’s name, in full
                              </label>
                              <input
                                id="otheragencyname"
                                name="otheragencyname"
                                type="text"
                                onChange={handleChange}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="agency name"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="otheragencyaddress"
                                className="block text-gray-700"
                              >
                                Agency’s address, in full
                              </label>
                              <input
                                id="otheragencyaddress"
                                name="otheragencyaddress"
                                type="text"
                                onChange={handleChange}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="agency address"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="otheragencyphone"
                                className="block text-gray-700"
                              >
                                Agency’s phone number
                              </label>
                              <input
                                id="otheragencyphone"
                                name="otheragencyphone"
                                type="number"
                                onChange={handleChange}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="agency phone"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="otheragencyregisterdate"
                                className="block text-gray-700"
                              >
                                What date did you register with the Agency?
                              </label>
                              <input
                                id="otheragencyregisterdate"
                                name="otheragencyregisterdate"
                                type="date"
                                onChange={handleChange}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="agency register date"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="employmentEndDate"
                              className="block text-gray-700"
                            >
                              What date did you last work?
                            </label>
                            <input
                              id="agencystopyesdate"
                              name="agencystopyesdate"
                              type="date"
                              onChange={handleChange}
                              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="anotherEmployer"
                            className="block text-gray-700"
                          >
                            Did you get any sick pay after you last worked?
                          </label>
                          <div class="flex mt-5">
                            <div class="flex items-center mr-4">
                              <input
                                id="asickyes-radio"
                                type="radio"
                                value="yes"
                                checked={asickpay === "yes"}
                                onChange={handleAsickpay}
                                name="asick-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="asickyes-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Yes
                              </label>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="asickno-radio"
                                type="radio"
                                value="no"
                                checked={asickpay === "no"}
                                onChange={handleAsickpay}
                                name="asick-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="asickno-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          {asickpay === "yes" && (
                            <div className="mt-5">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label
                                    htmlFor="sickfrom"
                                    className="block text-gray-700"
                                  >
                                    From
                                  </label>
                                  <input
                                    id="sickfrom"
                                    name="sickfrom"
                                    type="date"
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder=""
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="sickto"
                                    className="block text-gray-700"
                                  >
                                    To
                                  </label>
                                  <input
                                    id="sickto"
                                    name="sickto"
                                    type="date"
                                    onChange={handleChange}
                                    className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder=""
                                  />
                                </div>
                                <div class="flex mt-5">
                                  <label
                                    htmlFor="anotherEmployer"
                                    className="block text-gray-700"
                                  >
                                    Was it pregnancy related?
                                  </label>
                                  <div class="flex items-center mr-4 ml-5">
                                    <input
                                      id="aprelatedyes-radio"
                                      type="radio"
                                      value="yes"
                                      checked={aprelated === "yes"}
                                      onChange={handleAprelated}
                                      name="aprelated-group"
                                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      for="aprelatedyes-radio"
                                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                      Yes
                                    </label>
                                  </div>
                                  <div class="flex items-center mr-4">
                                    <input
                                      id="aprelatedno-radio"
                                      type="radio"
                                      value="no"
                                      checked={aprelated === "no"}
                                      onChange={handleAprelated}
                                      name="aprelated-group"
                                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      for="aprelatedno-radio"
                                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                      No
                                    </label>
                                  </div>
                                </div>
                                {aprelated === "no" && (
                                  <div>
                                    <label
                                      htmlFor="surname"
                                      className="block text-gray-700"
                                    >
                                      What was the reason?
                                    </label>
                                    <input
                                      id="reason"
                                      name="reason"
                                      type="text"
                                      onChange={handleChange}
                                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                      placeholder="What was your sick reason?"
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="anotherEmployer"
                            className="block text-gray-700"
                          >
                            Have you stopped work to have the baby?
                          </label>
                          <div class="flex mt-5">
                            <div class="flex items-center mr-4">
                              <input
                                id="stopyes-radio"
                                type="radio"
                                value="yes"
                                name="stop-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="stopyes-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Yes
                              </label>
                              <div className="ml-5">
                                <label
                                  htmlFor="employmentEndDate"
                                  className="block text-gray-700"
                                >
                                  What date did you last work?
                                </label>
                                <input
                                  id="stopyesdate"
                                  name="stopyesdate"
                                  type="date"
                                  onChange={handleChange}
                                  className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div class="flex items-center mr-4">
                              <input
                                id="stopno-radio"
                                type="radio"
                                value="no"
                                name="stop-group"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="stopno-radio"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                No
                              </label>
                              <div className="ml-5">
                                <label
                                  htmlFor="employmentEndDate"
                                  className="block text-gray-700"
                                >
                                  What date do you plan to stop work?
                                </label>
                                <input
                                  id="stopnodate"
                                  name="stopnodate"
                                  type="date"
                                  onChange={handleChange}
                                  className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                  placeholder="Employment End Date"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="mastart"
                                className="block text-gray-700"
                              >
                                What date do you want your Maternity Allowance
                                payments to start?
                              </label>
                              <input
                                id="mastart"
                                name="mastart"
                                type="date"
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {step === "4" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  About Self-Employment in Your Test Period
                </h3>
                <div>
                  <div>
                    <label
                      htmlFor="specialDate"
                      className="block text-gray-700"
                    >
                      Are you or were you self-employed within your Test Period?
                    </label>
                    <div class="flex mt-5">
                      <div class="flex items-center mr-4">
                        <input
                          id="selftestyes-radio"
                          type="radio"
                          value=""
                          name="selftest-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="selftestyes-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input
                          id="selftestno-radio"
                          type="radio"
                          value=""
                          name="selftest-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="selftestno-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                      <label
                        htmlFor="selftestdate"
                        className="block text-gray-700"
                      >
                        What date did you become registered as self-employed?
                      </label>
                      <input
                        id="selftestdate"
                        name="selftestdate"
                        type="date"
                        onChange={handleChange}
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="sickfrom"
                          className="block text-gray-700"
                        >
                          From
                        </label>
                        <input
                          id="sickfrom"
                          name="sickfrom"
                          type="date"
                          onChange={handleChange}
                          className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <label htmlFor="sickto" className="block text-gray-700">
                          To
                        </label>
                        <input
                          id="sickto"
                          name="sickto"
                          type="date"
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder=""
                        />
                      </div>
                      <div class="flex mt-5">
                        <label
                          htmlFor="anotherEmployer"
                          className="block text-gray-700"
                        >
                          Are you still self-employed?
                        </label>
                        <div class="flex items-center mr-4 ml-5">
                          <input
                            id="stillselfyes-radio"
                            type="radio"
                            value="yes"
                            checked={stillself === "yes"}
                            onChange={handleStillself}
                            name="stillself-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="stillselfyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="stillselfno-radio"
                            type="radio"
                            value="no"
                            checked={stillself === "no"}
                            onChange={handleStillself}
                            name="stillself-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="stillselfno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                      {stillself === "no" && (
                        <div>
                          <label
                            htmlFor="surname"
                            className="block text-gray-700"
                          >
                            What date did your self employment end?
                          </label>
                          <input
                            id="reason"
                            name="reason"
                            type="date"
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="What was your sick reason?"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="anotherEmployer"
                      className="block text-gray-700"
                    >
                      Have you stopped work to have the baby?
                    </label>
                    <div class="flex mt-5">
                      <div class="flex items-center mr-4">
                        <input
                          id="stopyes-radio"
                          type="radio"
                          value="yes"
                          name="stop-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="stopyes-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Yes
                        </label>
                        <div className="ml-5">
                          <label
                            htmlFor="employmentEndDate"
                            className="block text-gray-700"
                          >
                            What date did you last work?
                          </label>
                          <input
                            id="stopyesdate"
                            name="stopyesdate"
                            type="date"
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div class="flex items-center mr-4">
                        <input
                          id="stopno-radio"
                          type="radio"
                          value="no"
                          name="stop-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="stopno-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          No
                        </label>
                        <div className="ml-5">
                          <label
                            htmlFor="employmentEndDate"
                            className="block text-gray-700"
                          >
                            What date do you plan to stop work?
                          </label>
                          <input
                            id="stopnodate"
                            name="stopnodate"
                            type="date"
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Employment End Date"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="mastart"
                          className="block text-gray-700"
                        >
                          What date do you want your Maternity Allowance
                          payments to start?
                        </label>
                        <input
                          id="mastart"
                          name="mastart"
                          type="date"
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === "5" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  About unpaid work for your self-employed spouse or civil
                  partner’s business in your Test Period
                </h3>
                <div>
                  <div>
                    <label
                      htmlFor="specialDate"
                      className="block text-gray-700"
                    >
                      Are you or were you doing any unpaid work for your
                      self-employed spouse or civil partner’s business in your
                      Test Period?
                    </label>
                    <div class="flex mt-5">
                      <div class="flex items-center mr-4">
                        <input
                          id="civiltestyes-radio"
                          type="radio"
                          value=""
                          name="civiltest-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="civiltestyes-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input
                          id="civiltestno-radio"
                          type="radio"
                          value=""
                          name="civiltest-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="civiltestno-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="civiltestunpaid"
                        className="block text-gray-700 mt-5"
                      >
                        On what date did you start doing any unpaid work for
                        your self-employed spouse or civil partner’s business?
                      </label>
                      <input
                        id="civiltestunpaid"
                        name="civiltestunpaid"
                        type="date"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder=""
                      />
                    </div>
                    <div class="flex mt-5">
                      <label
                        htmlFor="anotherEmployer"
                        className="block text-gray-700"
                      >
                        Have you stopped doing any unpaid work for your
                        self-employed spouse or civil partner’s business?
                      </label>
                      <div class="flex items-center mr-4 ml-5">
                        <input
                          id="civilselfstopyes-radio"
                          type="radio"
                          value="yes"
                          checked={civilselfstop === "yes"}
                          onChange={handleCivilselfstop}
                          name="civilselfstop-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="civilselfstopyes-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="flex items-center mr-4">
                        <input
                          id="civilselfstopno-radio"
                          type="radio"
                          value="no"
                          checked={civilselfstop === "no"}
                          onChange={handleCivilselfstop}
                          name="civilselfstop-group"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="civilselfstopno-radio"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    {civilselfstop === "yes" && (
                      <div>
                        <label
                          htmlFor="surname"
                          className="block text-gray-700"
                        >
                          What date did your self employment end?
                        </label>
                        <input
                          id="reason"
                          name="reason"
                          type="date"
                          onChange={handleChange}
                          className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="What was your sick reason?"
                        />
                      </div>
                    )}
                    <div className="mt-5">
                      <label
                        htmlFor="specialDate"
                        className="block text-gray-700"
                      >
                        Did you stop doing any unpaid work for your
                        self-employed spouse or civil partner’s business due to
                        your pregnancy?
                      </label>
                      <div class="flex">
                        <div class="flex items-center mr-4 mt-5">
                          <input
                            id="civilstoppregyes-radio"
                            type="radio"
                            value=""
                            name="civilstoppreg-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="civilstoppregyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4 mt-5">
                          <input
                            id="civilstoppregno-radio"
                            type="radio"
                            value=""
                            name="civilstoppreg-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="civilstoppregno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <label
                        htmlFor="specialDate"
                        className="block text-gray-700"
                      >
                        Did you stop doing any unpaid work for your
                        self-employed spouse or civil partner’s business due to
                        sickness?
                      </label>
                      <div class="flex">
                        <div class="flex items-center mr-4 mt-5">
                          <input
                            id="civilstopsickyes-radio"
                            type="radio"
                            value="yes"
                            checked={civilsickrel === "yes"}
                            onChange={handleCivilsickrel}
                            name="civilstopsick-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="civilstopsickyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4 mt-5">
                          <input
                            id="civilstopsickno-radio"
                            type="radio"
                            value="no"
                            checked={civilsickrel === "no"}
                            onChange={handleCivilsickrel}
                            name="civilstopsick-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="civilstopsickno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    {civilsickrel === "yes" && (
                      <div className="mt-5">
                        <label
                          htmlFor="specialDate"
                          className="block text-gray-700"
                        >
                          Was this sickness related to your pregnancy?
                        </label>
                        <div class="flex">
                          <div class="flex items-center mr-4 mt-5">
                            <input
                              id="civilstopsickrelyes-radio"
                              type="radio"
                              value="yes"
                              name="civilstopsickrel-group"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="civilstopsickrelyes-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4 mt-5">
                            <input
                              id="civilstopsickrelno-radio"
                              type="radio"
                              value="no"
                              name="civilstopsickrel-group"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="civilstopsickrelno-radio"
                              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="civilstopplan"
                        className="block text-gray-700 mt-5"
                      >
                        If you have not stopped yet, on what date do you plan to
                        stop doing any unpaid work for your self-employed spouse
                        or civil partner’s business?
                      </label>
                      <input
                        id="civilstopplan"
                        name="civilstopplan"
                        type="date"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="civilduty"
                        className="block text-gray-700 mt-5"
                      >
                        What duties or activities did you or do you do to
                        support your self-employed spouse or civil partner’s
                        business?
                      </label>
                      <input
                        id="civilduty"
                        name="civilduty"
                        type="text"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your duties"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="civilduty"
                        className="block text-gray-700 mt-5"
                      >
                        Tell us what dates you did unpaid work for your
                        self-employed spouse or civil partner’s business during
                        your Test Period
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="from1"
                            className="block text-gray-700"
                          >
                            From
                          </label>
                          <input
                            id="from1"
                            name="from1"
                            type="date"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="mastart"
                            className="block text-gray-700"
                          >
                            To
                          </label>
                          <input
                            id="to1"
                            name="to1"
                            type="date"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="from2"
                            className="block text-gray-700"
                          >
                            From
                          </label>
                          <input
                            id="from2"
                            name="from2"
                            type="date"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <label htmlFor="to2" className="block text-gray-700">
                            To
                          </label>
                          <input
                            id="to2"
                            name="to2"
                            type="date"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="from3"
                            className="block text-gray-700"
                          >
                            From
                          </label>
                          <input
                            id="from3"
                            name="from3"
                            type="date"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <label htmlFor="to3" className="block text-gray-700">
                            To
                          </label>
                          <input
                            id="to3"
                            name="to3"
                            type="date"
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === "6" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  About your self-employed spouse or civil partner
                </h3>
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="civiltitle"
                        className="block text-gray-700"
                      >
                        Your spouse or civil partner’s title
                      </label>
                      <input
                        id="civiltitle"
                        name="civiltitle"
                        type="text"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your spouse or civil partner’s title"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="civilname"
                        className="block text-gray-700"
                      >
                        Your spouse or civil partner’s surname or family name,
                        in full
                      </label>
                      <input
                        id="civilname"
                        name="civilname"
                        type="text"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your spouse or civil partner’s surname or family name,
                        in full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="civiloname"
                        className="block text-gray-700"
                      >
                        Your spouse or civil partner’s other names, in full
                      </label>
                      <input
                        id="civiloname"
                        name="civiloname"
                        type="text"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your spouse or civil partner’s other names, in full"
                      />
                    </div>
                    <div>
                      <label htmlFor="civilNI" className="block text-gray-700">
                        Your spouse or civil partner’s National Insurance number
                      </label>
                      <input
                        id="civilNI"
                        name="civilNI"
                        type="text"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your spouse or civil partner’s National Insurance number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="civiladdress"
                        className="block text-gray-700"
                      >
                        Your spouse or civil partner’s address
                      </label>
                      <input
                        id="civiladdress"
                        name="civiladdress"
                        type="text"
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your spouse or civil partner’s address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === "7" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  About your marriage or civil partnership
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mcdate" className="block text-gray-700">
                      What was the date of your marriage or civil partnership?
                    </label>
                    <input
                      id="mcdate"
                      name="mcdate"
                      type="date"
                      onChange={handleChange}
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="What was the date of your marriage or civil partnership?"
                    />
                  </div>
                  <div>
                    <label htmlFor="mccountry" className="block text-gray-700">
                      In which country did your marriage or civil partnership
                      take place?
                    </label>
                    <select
                      id="country"
                      name="country"
                      onChange={handleChange}
                      className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option>Select</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>Ukraine</option>
                      <option>France</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Italy</option>
                      <option>Finland</option>
                      <option>Latvia</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="flex mt-5">
                        <label
                          htmlFor="anotherEmployer"
                          className="block text-gray-700"
                        >
                          Has your marriage ended in divorce or has your civil partnership been dissolved?
                        </label>
                        <div class="flex items-center mr-4 ml-5">
                          <input
                            id="mcendyes-radio"
                            type="radio"
                            value="yes"
                            checked={mcend === "yes"}
                            onChange={handleMcend}
                            name="mcend-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="mcendyes-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="mcendno-radio"
                            type="radio"
                            value="no"
                            checked={mcend === "no"}
                            onChange={handleMcend}
                            name="mcend-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="mcendno-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>
                      {mcend === "yes" && (
                        <div>
                          <label
                            htmlFor="mcenddate"
                            className="block text-gray-700"
                          >
                            What date did it end or dissolve?
                          </label>
                          <input
                            id="mcenddate"
                            name="mcenddate"
                            type="date"
                            onChange={handleChange}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="What date did it end or dissolve?"
                          />
                        </div>
                      )}
                </div>
              </div>
            )}
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

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
