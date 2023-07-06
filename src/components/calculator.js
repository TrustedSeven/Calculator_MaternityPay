import React from "react";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";

import Salary_Calc from "../assets/image/salary_calc.jpg";
import Maternity_Leave from "../assets/image/maternityleave.jpg";

import { calculateSalaryBreakdown } from "../functions/salary_calculation";
import { calculateSmp } from "../functions/smp_calculation";

export default function Calculator() {
  const [daily, setDaily] = useState({
    grossIncome: "",
    nationalInsurance: "",
    takeHomePay: "",
    tax: "",
    taxableIncome: "",
  });
  const [weekly, setWeekly] = useState({
    grossIncome: "",
    nationalInsurance: "",
    takeHomePay: "",
    tax: "",
    taxableIncome: "",
  });
  const [monthly, setMonthly] = useState({
    grossIncome: "",
    nationalInsurance: "",
    takeHomePay: "",
    tax: "",
    taxableIncome: "",
  });
  const [anual, setAnual] = useState({
    grossIncome: "",
    nationalInsurance: "",
    takeHomePay: "",
    tax: "",
    taxableIncome: "",
  });
  
  const [grossPayDatesAndAmounts, setGrossPayDatesAndAmounts] = useState();

  const [smp, setSmp] = useState(0);
  const [duedate, setDuedate] = useState();
  const [startdate, setStartdate] = useState();
  const [salary, setSalary] = useState();
  const [qualifyingWeekStart, setQualifyingWeekStart] = useState();
  const [relevantPeriodEnd, setRelevantPeriodEnd] = useState();
  const [relevantPeriodStart, setRelevantPeriodStart] = useState();
  const [firstmonth, setFirstmonth] = useState();
  const [secondmonth, setSecondmonth] = useState();
  const [nextmonth, setNextmonth] = useState();

  const MainCal = () => {
    console.log(calculateSalaryBreakdown(salary));
    setDaily(calculateSalaryBreakdown(salary).daily);
    setWeekly(calculateSalaryBreakdown(salary).weekly);
    setMonthly(calculateSalaryBreakdown(salary).monthly);
    setAnual(calculateSalaryBreakdown(salary).annual);
    console.log("=========",calculateSmp(duedate, startdate, grossPayDatesAndAmounts));
    setSmp(parseFloat(calculateSmp(duedate, startdate, grossPayDatesAndAmounts).smp).toFixed(2));
    setQualifyingWeekStart(calculateSmp(duedate, startdate, grossPayDatesAndAmounts).qualifyingWeekStart);
    setRelevantPeriodEnd(calculateSmp(duedate, startdate, grossPayDatesAndAmounts).relevantPeriodEnd);
    setRelevantPeriodStart(calculateSmp(duedate, startdate, grossPayDatesAndAmounts).relevantPeriodStart);
    setFirstmonth(parseFloat(calculateSmp(duedate, startdate, grossPayDatesAndAmounts).firstmonth).toFixed(2));
    setSecondmonth(parseFloat(calculateSmp(duedate, startdate, grossPayDatesAndAmounts).secondmonth).toFixed(2));
    setNextmonth(parseFloat(calculateSmp(duedate, startdate, grossPayDatesAndAmounts).restmonth).toFixed(2));
  };

  return (
    <div className="grid grid-cols-3 ml-5">
      <div className="content-center items-center col-span-1">
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
                setGrossPayDatesAndAmounts(
                  [
                    {date: '2023-01-31', amount: event.target.value/12},
                    {date: '2023-02-28', amount: event.target.value/12},
                    {date: '2023-03-31', amount: event.target.value/12},
                    {date: '2023-04-30', amount: event.target.value/12},
                    {date: '2023-05-31', amount: event.target.value/12},
                    {date: '2023-06-30', amount: event.target.value/12},
                    {date: '2023-07-31', amount: event.target.value/12},
                    {date: '2023-08-31', amount: event.target.value/12},
                    {date: '2023-09-30', amount: event.target.value/12},
                    {date: '2023-10-31', amount: event.target.value/12},
                    {date: '2023-11-30', amount: event.target.value/12},
                    {date: '2023-12-31', amount: event.target.value/12},
                ]
                )
              }}
              required
            />
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={MainCal}
          >
            Calculate Now
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <h2 class="text-2xl font-extrabold dark:text-white">
          Salary per Day/Week/Month/Year
        </h2>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
          <a href="#">
            <img class="rounded-t-lg" src={Salary_Calc} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Daily Income/Tax
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              GrossIncome : {daily.grossIncome}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              TaxableIncome : {daily.taxableIncome}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tax : {daily.tax}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              nationalInsurance : {daily.nationalInsurance}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              TakeHomePay : {daily.takeHomePay}
            </p>
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Weekly Income/Tax
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              GrossIncome : {weekly.grossIncome}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              TaxableIncome : {weekly.taxableIncome}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tax : {weekly.tax}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              nationalInsurance : {weekly.nationalInsurance}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              TakeHomePay : {weekly.takeHomePay}
            </p>
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Monthly Income/Tax
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              GrossIncome : {monthly.grossIncome}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              TaxableIncome : {monthly.taxableIncome}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tax : {monthly.tax}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              nationalInsurance : {monthly.nationalInsurance}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              TakeHomePay : {monthly.takeHomePay}
            </p>
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Anual Income/Tax
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              GrossIncome : {anual.grossIncome}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              TaxableIncome : {anual.taxableIncome}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Tax : {anual.tax}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              nationalInsurance : {anual.nationalInsurance}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              TakeHomePay : {anual.takeHomePay}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <h2 class="text-2xl font-extrabold dark:text-white">SMP details</h2>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
          <a href="#">
            <img class="rounded-t-lg" src={Maternity_Leave} alt="" />
          </a>
          <div class="p-5">
            {/* <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Total SMP amount
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              £{smp}
            </p> */}
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Qualifying Week Start
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {qualifyingWeekStart}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Relevant Period Start
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {relevantPeriodStart}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Relevant Period End
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {relevantPeriodEnd}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                FirstMonth
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {firstmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                SecondMonth
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {secondmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                3rd Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nextmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                4th Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nextmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                5th Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nextmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                6th Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nextmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                7th Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nextmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                8th Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nextmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                9th Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nextmonth}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                10th Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {nextmonth*0.75}
            </p>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                next Month
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
