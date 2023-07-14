import React, { useState, useEffect } from "react";
import { Collapse, initTE } from "tw-elements";

import Navbar from "./navbar";

import { calculateEmployeeSalaryBreakdown } from "../functions/employee_salarybreakdown";
import { calculateSMPMonthlyBreackdown } from "../functions/calcualteSMP";

initTE({ Collapse });
export default function Smpemployee() {
  const [duedate, setDuedate] = useState("");
  const [startdate, setStartdate] = useState("");
  const [salary, setSalary] = useState(0);

  const [eligibleweekstart, setEligibleweekstart] = useState("");
  const [qualifyingweekstart, setQualifyingweekstart] = useState("");
  const [lastdateclaimleave, setLastdateclaimleave] = useState("");
  const [maternityend, setMaternityend] = useState("");
  const [mspclaim, setMspclaim] = useState("");
  const [data, setData] = useState();
  const [totalsmp, setTotalsmp] = useState(0);
  const [smpdata, setSmpdata] = useState([]);

  const [buttonselect, setButtonselect] = useState();

  const MainCal = () => {
    setData(calculateEmployeeSalaryBreakdown(salary));
    if (duedate !== "" && startdate !== "") {
      console.log(calculateSMPMonthlyBreackdown(duedate, startdate, salary));
      setSmpdata(calculateSMPMonthlyBreackdown(duedate, startdate, salary));
      let smp = 0;
      for (let i = 1; i <= 10; i++) {
        smp =
          parseFloat(smp) +
          parseFloat(
            calculateSMPMonthlyBreackdown(duedate, startdate, salary)[i][
              "SMP (90%)"
            ]
          ) +
          parseFloat(
            calculateSMPMonthlyBreackdown(duedate, startdate, salary)[i][
              "Regular Pay"
            ]
          ) +
          parseFloat(
            calculateSMPMonthlyBreackdown(duedate, startdate, salary)[i][
              "SMP (£172.48)"
            ]
          );
      }
      setTotalsmp(smp.toFixed(2));
      console.log(data);
    }
  };

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
      const qmonth = String(qdate.getMonth() + 1).padStart(2, "0");
      const qday = String(qdate.getDate()).padStart(2, "0");
      const qsimplifiedDateStr = `${qyear}-${qmonth}-${qday}`;
      setQualifyingweekstart(qsimplifiedDateStr);

      const ldate = lastdateClaimleave(duedate);
      const lyear = ldate.getFullYear();
      const lmonth = String(ldate.getMonth() + 1).padStart(2, "0");
      const lday = String(ldate.getDate()).padStart(2, "0");
      const lsimplifiedDateStr = `${lyear}-${lmonth}-${lday}`;
      setLastdateclaimleave(lsimplifiedDateStr);
    }
  }, [duedate]);

  useEffect(() => {
    if (startdate !== "") {
      const edate = maternityEnd(startdate);
      const eyear = edate.getFullYear();
      const emonth = String(edate.getMonth() + 1).padStart(2, "0");
      const eday = String(edate.getDate()).padStart(2, "0");
      const esimplifiedDateStr = `${eyear}-${emonth}-${eday}`;
      setMaternityend(esimplifiedDateStr);

      const sdate = lastdateClaimmap(startdate);
      const syear = sdate.getFullYear();
      const smonth = String(sdate.getMonth() + 1).padStart(2, "0");
      const sday = String(sdate.getDate()).padStart(2, "0");
      const ssimplifiedDateStr = `${syear}-${smonth}-${sday}`;
      setMspclaim(ssimplifiedDateStr);
    }
  }, [startdate]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="grid grid-cols-5 mt-5 w-[80%] mx-auto">
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
                class="bg-gray-50 border w-[50%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
              onClick={MainCal}
            >
              Calculate Now
            </button>
          </div>
          {/* Expandable Breakdown */}
          <div className="content-center items-center col-span-2 ml-5">
            <h2 class="text-2xl font-extrabold dark:text-white">
              SMP Tax Breakdown
            </h2>
            {/* <div className="mt-5">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Pay Summary
                  </th>
                  <th scope="col" class="px-6 py-3">
                    %
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Yearly
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Monthly
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Week
                  </th>
                </tr>
              </thead>
              {data && (
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Gross Pay</td>
                    <td class="px-6 py-4">{data.percent.grossPay}</td>
                    <td class="px-6 py-4">{data.annual.grossPay}</td>
                    <td class="px-6 py-4">{data.monthly.grossPay}</td>
                    <td class="px-6 py-4">{data.weekly.grossPay}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Tax free allowance</td>
                    <td class="px-6 py-4">{data.percent.taxfreeAllowance}</td>
                    <td class="px-6 py-4">{data.annual.taxfreeAllowance}</td>
                    <td class="px-6 py-4">{data.monthly.taxfreeAllowance}</td>
                    <td class="px-6 py-4">{data.weekly.taxfreeAllowance}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Total taxable</td>
                    <td class="px-6 py-4">{data.percent.totalTaxable}</td>
                    <td class="px-6 py-4">{data.annual.totalTaxable}</td>
                    <td class="px-6 py-4">{data.monthly.totalTaxable}</td>
                    <td class="px-6 py-4">{data.weekly.totalTaxable}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Total Tax Due</td>
                    <td class="px-6 py-4">{data.percent.totalTaxdue}</td>
                    <td class="px-6 py-4">{data.annual.totalTaxdue}</td>
                    <td class="px-6 py-4">{data.monthly.totalTaxdue}</td>
                    <td class="px-6 py-4">{data.weekly.totalTaxdue}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">20% rate</td>
                    <td class="px-6 py-4">{data.percent.tax1}</td>
                    <td class="px-6 py-4">{data.annual.tax1}</td>
                    <td class="px-6 py-4">{data.monthly.tax1}</td>
                    <td class="px-6 py-4">{data.weekly.tax1}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">40% rate</td>
                    <td class="px-6 py-4">{data.percent.tax2}</td>
                    <td class="px-6 py-4">{data.annual.tax2}</td>
                    <td class="px-6 py-4">{data.monthly.tax2}</td>
                    <td class="px-6 py-4">{data.weekly.tax2}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">45% rate</td>
                    <td class="px-6 py-4">{data.percent.tax3}</td>
                    <td class="px-6 py-4">{data.annual.tax3}</td>
                    <td class="px-6 py-4">{data.monthly.tax3}</td>
                    <td class="px-6 py-4">{data.weekly.tax3}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Student Loan</td>
                    <td class="px-6 py-4">{data.percent.studentLoan}</td>
                    <td class="px-6 py-4">{data.annual.studentLoan}</td>
                    <td class="px-6 py-4">{data.monthly.studentLoan}</td>
                    <td class="px-6 py-4">{data.weekly.studentLoan}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">National Insurance</td>
                    <td class="px-6 py-4">{data.percent.nationalInsurance}</td>
                    <td class="px-6 py-4">{data.annual.nationalInsurance}</td>
                    <td class="px-6 py-4">{data.monthly.nationalInsurance}</td>
                    <td class="px-6 py-4">{data.weekly.nationalInsurance}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Total Deductions</td>
                    <td class="px-6 py-4">{data.percent.totalDeductions}</td>
                    <td class="px-6 py-4">{data.annual.totalDeductions}</td>
                    <td class="px-6 py-4">{data.monthly.totalDeductions}</td>
                    <td class="px-6 py-4">{data.weekly.totalDeductions}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Net Wage</td>
                    <td class="px-6 py-4">{data.percent.netWage}</td>
                    <td class="px-6 py-4">{data.annual.netWage}</td>
                    <td class="px-6 py-4">{data.monthly.netWage}</td>
                    <td class="px-6 py-4">{data.weekly.netWage}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Employers NI</td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Net change from 2021</td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                </tbody>
              )}
            </div> */}
            <div>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-5">
                {smpdata.map((item, index) => (
                  <div key={index}>
                    <div class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                      <h2 class="mb-0">
                        <button
                          class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                          type="button"
                          onClick={() => {
                            if (buttonselect === index) {
                              setButtonselect(100);
                            } else {
                              setButtonselect(index);
                            }
                          }}
                        >
                          <strong>{item.Month}</strong> - £{parseFloat(item["Total"]).toFixed(2)}
                        </button>
                      </h2>
                      {buttonselect === index && (
                        <div>
                          <div className="grid grid-cols-2 mt-5">
                            <div class="px-5 py-4 content-center items-center col-span-1 ">
                              <strong>SMP details.</strong> <br />
                              Regular Pay - £{item["Regular Pay"]}
                              <br />
                              SMP(90%) - £{item["SMP (90%)"]}
                              <br />
                              SMP(172.48) - £{item["SMP (£172.48)"]}
                              <br />
                              Total - £{item["Total"]}
                              <br />
                            </div>
                            <div className="px-5 py-4 content-center items-center col-span-1 ">
                              <strong>Tax vs Take-home Pay.</strong> <br />
                              Tax - £
                              {
                                calculateEmployeeSalaryBreakdown(
                                  item["Total"] * 12
                                ).monthly.totalTaxdue
                              }
                              <br />
                              National Insurance - £
                              {
                                calculateEmployeeSalaryBreakdown(
                                  item["Total"] * 12
                                ).monthly.nationalInsurance
                              }
                              <br />
                              Net Wage - £
                              {
                                calculateEmployeeSalaryBreakdown(
                                  item["Total"] * 12
                                ).monthly.netWage
                              }
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Total SMP, Maternity related dates */}
          <div className="content-center items-center col-span-1 pl-5">
            <h2 class="text-2xl font-extrabold dark:text-white">
              Maternity Pay details
            </h2>
            <div className="mt-5">
              <div class="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Total SMP
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  £{totalsmp}
                </p>
              </div>
              <div>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">
                      Latest date to claim leave / Tell the employer
                    </td>
                    <td class="px-6 py-4">{lastdateclaimleave}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Latest date to claim SMP</td>
                    <td class="px-6 py-4">{mspclaim}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Earliest date leave can start</td>
                    <td class="px-6 py-4">{qualifyingweekstart}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Baby bue date</td>
                    <td class="px-6 py-4">{duedate}</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">Maternity leave ends</td>
                    <td class="px-6 py-4">{maternityend}</td>
                  </tr>
                </tbody>
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
  result.setDate(result.getDate() - result.getDay());
  return result;
};

const lastdateClaimleave = (date) => {
  var result = new Date(date);
  result.setDate(result.getDate() - 7 * 15);
  result.setDate(result.getDate() - result.getDay() - 1);
  return result;
};

const maternityEnd = (date) => {
  var result = new Date(date);
  result.setDate(result.getDate() + 7 * 52);
  return result;
};

const lastdateClaimmap = (date) => {
  var result = new Date(date);
  result.setDate(result.getDate() - 28);
  return result;
};
