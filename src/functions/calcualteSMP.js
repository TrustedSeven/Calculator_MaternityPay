// Define the SMP rate
const SMP_RATE = 172.48;
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

// Function to calculate SMP
export function calculateSMPMonthlyBreackdown(dueDate, startDate, annualSalary) {
    // let qualifyingWeekStart = addDays(new Date(dueDate), - 7 * 15);
  
    // let relevantPeriodEnd = addDays(qualifyingWeekStart, - 1);
    // let relevantPeriodStart = addDays(relevantPeriodEnd, - 7 * 8);
  
    const monthlyDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dailySalary = annualSalary / 52 / 7;
    let monthlySalary = annualSalary / 12;
  
    let startMonth = new Date(startDate).getMonth() + 1;
    let startDay = new Date(startDate).getDate();
  
    let firstLimitDate = addDays (startDate, 7 * 6);
    let secondLimitDate = addDays (firstLimitDate, 7 * 33);

    let result = [{"Month" : months[startMonth - 1], "Regular Pay" : monthlySalary.toFixed(2), "SMP (90%)" : 0, "SMP (£172.48)" : 0}];

    if (startMonth > 2)
        monthlyDays[2] += isLeap(secondLimitDate.getFullYear());
    else
        monthlyDays[2] += isLeap(firstLimitDate.getFullYear());

      

    let minSalary = Math.min(dailySalary * 0.9, SMP_RATE / 7);
    let flag = true;
    for (let i = 0; i < 10; i ++) {
      let regularPay = 0, smp1 = 0, smp2 = 0;
      let iMonth = startMonth + i > 12 ? startMonth + i - 12 : startMonth + i;
      if (startMonth + i > 12)
        flag = false;
      if (i === 0) {
        regularPay = dailySalary * startDay;
        smp1 = dailySalary * (monthlyDays[startMonth] - startDay) * 0.9;
      }
      else {
        if (iMonth < firstLimitDate.getMonth() + 1 + 12 * (firstLimitDate.getMonth() < new Date(startDate).getMonth()) && flag) {
          smp1 = dailySalary * monthlyDays[iMonth] * 0.9;
          flag = false;
        }
        else if (iMonth === firstLimitDate.getMonth() + 1) {
          smp1 = dailySalary * firstLimitDate.getDate() * 0.9;
          smp2 = minSalary * (monthlyDays[iMonth] - firstLimitDate.getDate());
        }
        else if (iMonth === secondLimitDate.getMonth() + 1)
          smp2 = minSalary * secondLimitDate.getDate() + 1;
        else
          smp2 = minSalary * monthlyDays[iMonth];
      }
      result.push({
        "Month": months[iMonth],
        "Regular Pay": parseFloat(regularPay).toFixed(2),
        "SMP (90%)": smp1.toFixed(2),
        "SMP (£172.48)": smp2.toFixed(2),
      });
    }
    return result;
}
