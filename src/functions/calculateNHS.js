// Define the SMP rate
const SMP_RATE = 172.48;
const MA_RATE = -172.48;
const months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Function to check the year is leap
function isLeap(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// Function to add or subtract days from a date
function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Function to calculate NHS
export function calculateNHS(conditionA, conditionB, dueDate, startDate, annualSalary) {
    const monthlyDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dailySalary = annualSalary / 52 / 7;
    // let monthlySalary = annualSalary / 12;
    // let weeklySalary = annualSalary / 52;
///////////////////////////////////////////////
    let startMonth = new Date(startDate).getMonth() + 1;
    let startDay = new Date(startDate).getDate();
///////////////////////////////////////////////
    let result = [];
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

    let firstLimitDate = (!conditionA && conditionB) ? addDays (startDate, 7 * 6) : addDays (startDate, 7 * 8);
    let secondLimitDate = (!conditionA && conditionB) ? addDays (firstLimitDate, 7 * 33) : addDays (firstLimitDate, 7 * 18);
    let thirdLimitDate = addDays (secondLimitDate, 7 * 13);
    // let fourthLimitDate = addDays (thirdLimitDate, 7 * 13);

    if (startMonth > 2)
      monthlyDays[2] += isLeap(new Date(startDate).getFullYear() + 1);
    else
      monthlyDays[2] += isLeap(new Date(startDate).getFullYear());

    console.log(firstLimitDate, secondLimitDate, thirdLimitDate);
    // let minSalary = Math.min(dailySalary * 0.9, SMP_RATE / 7);
    let step = 0;
    for (let i = 0; i < 12; i ++) {
      let regularPay = 0, smp = 0, ma = 0;
      let iMonth = startMonth + i > 12 ? startMonth + i - 12 : startMonth + i;

      let flag = startMonth + i > 12 ? 0 : 1;
      console.log(flag);
      

      if (i === 0) {
        if (conditionA && conditionB)
          regularPay = dailySalary * (monthlyDays[startMonth] - startDay);
        if (conditionA && !conditionB) {
          regularPay = (dailySalary - ma / 7) * (monthlyDays[startMonth] - startDay);
        }
        if (!conditionA && conditionB) {
          smp = dailySalary * (monthlyDays[startMonth] - startDay) * 0.9;
        }
      }
      else {
        if (conditionA && conditionB) {
          if (iMonth < firstLimitDate.getMonth() + 1 + 12 * ((firstLimitDate.getMonth() < new Date(startDate).getMonth() ? 1 : 0) * flag) && step === 0) {
            regularPay = dailySalary * monthlyDays[iMonth];
          }
          else if (iMonth === firstLimitDate.getMonth() + 1) {
            regularPay = dailySalary * firstLimitDate.getDate() + dailySalary / 2 * (monthlyDays[iMonth] - firstLimitDate.getDate());
            smp = Math.min(SMP_RATE / 7, dailySalary / 2) * (monthlyDays[iMonth] - firstLimitDate.getDate());
            step = 1;
          }
          else if (iMonth < secondLimitDate.getMonth() + 1 + 12 * ((secondLimitDate.getMonth() < new Date(startDate).getMonth() ? 1 : 0) * flag) && step === 1) {
            regularPay = dailySalary / 2 * monthlyDays[iMonth];
            smp = SMP_RATE / 7 * monthlyDays[iMonth];
          }
          else if (iMonth === secondLimitDate.getMonth() + 1) {
            regularPay = dailySalary / 2 * secondLimitDate.getDate();
            smp = SMP_RATE / 7 * (monthlyDays[iMonth] - secondLimitDate.getDate());
            step = 2;
          }
          else if (iMonth < thirdLimitDate.getMonth() + 1 + 12 * ((thirdLimitDate.getMonth() < new Date(startDate).getMonth() ? 1 : 0) * flag) && step === 2) {
            smp = SMP_RATE / 7 * monthlyDays[iMonth];
          }
          else if (iMonth === thirdLimitDate.getMonth() + 1) {
            smp = SMP_RATE / 7 * thirdLimitDate.getDate();
            step = 3;
          }
        }
        if (conditionA && !conditionB) {
          if (iMonth < firstLimitDate.getMonth() + 1 + 12 * (firstLimitDate.getMonth() < new Date(startDate).getMonth() * flag) && step === 0) {
            regularPay = dailySalary * monthlyDays[iMonth];
            ma = MA_RATE / 7 * monthlyDays[iMonth];
          }
          else if (iMonth === firstLimitDate.getMonth() + 1) {
            regularPay = dailySalary * firstLimitDate.getDate() + dailySalary / 2 * (monthlyDays[iMonth] - firstLimitDate.getDate());
            ma = MA_RATE / 7 * firstLimitDate.getDate();
            step = 1;
          }
          else if (iMonth < secondLimitDate.getMonth() + 1 + 12 * (secondLimitDate.getMonth() < new Date(startDate).getMonth() * flag) && step === 1) {
            regularPay = dailySalary / 2 * monthlyDays[iMonth];
          }
          else if (iMonth === secondLimitDate.getMonth() + 1) {
            regularPay = dailySalary / 2 * secondLimitDate.getDate();
            step = 2;
          }
        }
        if (!conditionA && conditionB) {
          let minSalary = Math.min(dailySalary * 0.9, SMP_RATE / 7);

          if (iMonth < firstLimitDate.getMonth() + 1 + 12 * (firstLimitDate.getMonth() < new Date(startDate).getMonth() * flag) && step === 0) {
            smp = dailySalary * monthlyDays[iMonth] * 0.9;
          }
          else if (iMonth === firstLimitDate.getMonth() + 1) {
            smp = dailySalary * firstLimitDate.getDate() * 0.9 + minSalary * (monthlyDays[iMonth] - firstLimitDate.getDate());
            step = 1;
          }
          else if (iMonth < secondLimitDate.getMonth() + 1 + 12 * (secondLimitDate.getMonth() < new Date(startDate).getMonth() * flag) && step === 1) {
            smp = minSalary * monthlyDays[iMonth];
          }
          else if (iMonth === secondLimitDate.getMonth() + 1) {
            smp = minSalary * secondLimitDate.getDate();
            step = 2;
          }
        }
      }
      result.push({
        "Month": months[iMonth],
        "Regular Pay": regularPay.toFixed(2),
        "SMP": smp.toFixed(2),
        "MA": ma.toFixed(2),
        "Total": (regularPay + smp + ma).toFixed(2),
      });
    }
    return result;
}
