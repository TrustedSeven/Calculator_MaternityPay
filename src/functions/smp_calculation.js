// Define the SMP rate
// const SMP_RATE = 172.48;

// Function to add or subtract days from a date
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Function to calculate SMP
export function calculateSmp(dueDateStr, startDateStr, grossPayDatesAndAmounts) {
    // Calculate qualifying week
    let dueDate = new Date(dueDateStr);
    console.log('dueDate',dueDate)
    let qualifyingWeekStart = addDays(dueDate, -7*15);
    console.log("qualifyingWeekStart", qualifyingWeekStart)
    
    // Calculate relevant period
    let relevantPeriodEnd = addDays(qualifyingWeekStart, -1);
    console.log("relevantPeriodEnd", relevantPeriodEnd);
    let relevantPeriodStart = addDays(relevantPeriodEnd, -7*8);
    console.log("relevantPeriodStart",relevantPeriodStart)
    
    // Filter the gross pay within relevant period
    let relevantGrossPay = grossPayDatesAndAmounts.filter(item => {
        let payDate = new Date(item.date);
        return payDate >= relevantPeriodStart && payDate <= relevantPeriodEnd;
    }).map(item => item.amount);
    
    // Calculate average weekly earnings
    let totalEarnings = relevantGrossPay.reduce((a, b) => a + b, 0);
    let averageMonthlyEarning = totalEarnings / relevantGrossPay.length;
    let averageWeeklyEarning = (averageMonthlyEarning * 12) / 52;
    console.log("averageWeeklyEarning", averageWeeklyEarning)
    
    // Calculate SMP
    let smpFirst6Weeks = averageWeeklyEarning * 0.9 * 6;
    let startDate = new Date(startDateStr);
    let remainingWeeks = Math.floor((startDate - qualifyingWeekStart) / (7 * 24 * 60 * 60 * 1000)) - 6;
    // let smpRemaining = Math.min(SMP_RATE, averageWeeklyEarning * 0.9) * remainingWeeks;
    let smpRemaining = Math.min(172.48, averageWeeklyEarning * 0.9) * remainingWeeks;

    let firstmonth = averageWeeklyEarning * 0.9 * 4;
    let secondmonth = averageWeeklyEarning * 0.9 * 2 + Math.min(172.48, averageWeeklyEarning * 0.9) * 2;
    let restmonth = Math.min(172.48, averageWeeklyEarning * 0.9) * 4;
    
    // return smpFirst6Weeks + smpRemaining;
    return {
        smp:smpFirst6Weeks + smpRemaining,
        qualifyingWeekStart: JSON.stringify(qualifyingWeekStart),
        relevantPeriodEnd:JSON.stringify(relevantPeriodEnd),
        relevantPeriodStart:JSON.stringify(relevantPeriodStart),
        firstmonth: JSON.stringify(firstmonth),
        secondmonth : JSON.stringify(secondmonth),
        restmonth : JSON.stringify(restmonth)
    };
}


// Define the due date, start date, and gross pay with dates
// let dueDate = '2023-12-25'; // format: 'YYYY-MM-DD'
// let startDate = '2023-10-01'; // format: 'YYYY-MM-DD'
// let grossPayDatesAndAmounts = [
//     {date: '2023-01-31', amount: 3400},
//     {date: '2023-02-28', amount: 3400},
//     {date: '2023-03-31', amount: 3400},
//     {date: '2023-04-30', amount: 3400},
//     {date: '2023-05-31', amount: 3400},
//     {date: '2023-06-30', amount: 3400},
//     {date: '2023-07-31', amount: 3400},
//     {date: '2023-08-31', amount: 3400},
//     {date: '2023-09-30', amount: 3400},
//     {date: '2023-10-31', amount: 3400},
//     {date: '2023-11-30', amount: 3400},
//     {date: '2023-12-31', amount: 3400},
// ]; // format: {date: 'YYYY-MM-DD', amount: amount}

// // Calculate the total SMP
// let totalSmp = calculateSmp(dueDate, startDate, grossPayDatesAndAmounts);
// console.log(`Total SMP: £${totalSmp.toFixed(2)}`);
