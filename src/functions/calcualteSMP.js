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
const monthlyDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Function to add or subtract days from a date
function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Function to calculate SMP
export function calculateSMPMonthlyBreackdown(dueDate, startDate, annualSalary) {
    let result = [];
    // let qualifyingWeekStart = addDays(new Date(dueDate), - 7 * 15);
  
    // let relevantPeriodEnd = addDays(qualifyingWeekStart, - 1);
    // let relevantPeriodStart = addDays(relevantPeriodEnd, - 7 * 8);
  
    let dailySalary = annualSalary / 365;
    let monthlySalary = annualSalary / 12;
  
    let dueMonth = new Date(startDate).getMonth() + 1;
    let dueDay = new Date(startDate).getDate() + 1;
  
    let startMonth = dueMonth - 3 > 0 ? dueMonth - 3 : dueMonth + 9;
  
    let firstLimitDate = addDays (startDate, 7 * 6);
  
    let flag = firstLimitDate.getMonth() < new Date(startDate).getMonth();
    console.log(firstLimitDate);
    for (let i = 0; i < 12; i++) {
      let index = startMonth + i;
      let regularPay = monthlySalary.toFixed(2);
      let smp1 = 0;
      let smp2 = 0;
  
      if (i === 3) {
          regularPay = dailySalary * dueDay;
          smp1 = (monthlyDays[index > 12 ? index - 12 : index] - dueDay) * dailySalary * 0.9;
      }
      else if (i > 3) {
          regularPay = 0;
          smp1 = monthlySalary * 0.9;
          smp2 = 0;
          if (firstLimitDate.getMonth() < index - flag * 12) {
              smp1 = firstLimitDate.getMonth() + 1 === index - flag * 12 ? (firstLimitDate.getDate() + 1) * dailySalary * 0.9 : 0;
              smp2 =  firstLimitDate.getMonth() + 1 === index - flag * 12 ? Math.min(dailySalary * 0.9, SMP_RATE / 7) * (monthlyDays[index > 12 ? index - 12 : index] - firstLimitDate.getDate() - 1) : SMP_RATE / 7 * 30;
          }
      }
      result.push({
        "Month": months[index > 12 ? index - 12 : index],
        "Regular Pay": parseFloat(regularPay).toFixed(2),
        "SMP (90%)": smp1.toFixed(2),
        "SMP (£172.48)": smp2.toFixed(2),
      });
    }
    
    return result;
}
