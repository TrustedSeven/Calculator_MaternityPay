function calculateSalaryBreakdown(salary) {
    const personalAllowance = 12570;
    const taxRate = 0.20;
    const weeklyPrimaryThreshold = 242;
    const niRate = 0.12;
    const weeksPerYear = 52;
    const monthsPerYear = 12;
    const daysPerWeek = 5;

    let taxableIncome = salary - personalAllowance;
    taxableIncome = taxableIncome > 0 ? taxableIncome : 0;
    let tax = taxableIncome * taxRate;

    let weeklyEarnings = salary / weeksPerYear;
    let weeklyEarningsAboveThreshold = weeklyEarnings - weeklyPrimaryThreshold;
    weeklyEarningsAboveThreshold = weeklyEarningsAboveThreshold > 0 ? weeklyEarningsAboveThreshold : 0;
    let weeklyNI = weeklyEarningsAboveThreshold * niRate;
    let annualNI = weeklyNI * weeksPerYear;

    let takeHomePay = salary - tax - annualNI;

    return {
        daily: {
            grossIncome: (salary / (weeksPerYear * daysPerWeek)).toFixed(2),
            taxableIncome: (taxableIncome / (weeksPerYear * daysPerWeek)).toFixed(2),
            tax: (tax / (weeksPerYear * daysPerWeek)).toFixed(2),
            nationalInsurance: (weeklyNI / daysPerWeek).toFixed(2),
            takeHomePay: (takeHomePay / (weeksPerYear * daysPerWeek)).toFixed(2)
        },
        weekly: {
            grossIncome: weeklyEarnings.toFixed(2),
            taxableIncome: (taxableIncome / weeksPerYear).toFixed(2),
            tax: (tax / weeksPerYear).toFixed(2),
            nationalInsurance: weeklyNI.toFixed(2),
            takeHomePay: (takeHomePay / weeksPerYear).toFixed(2)
        },
        monthly: {
            grossIncome: (salary / monthsPerYear).toFixed(2),
            taxableIncome: (taxableIncome / monthsPerYear).toFixed(2),
            tax: (tax / monthsPerYear).toFixed(2),
            nationalInsurance: (annualNI / monthsPerYear).toFixed(2),
            takeHomePay: (takeHomePay / monthsPerYear).toFixed(2)
        },
        annual: {
            grossIncome: salary.toFixed(2),
            taxableIncome: taxableIncome.toFixed(2),
            tax: tax.toFixed(2),
            nationalInsurance: annualNI.toFixed(2),
            takeHomePay: takeHomePay.toFixed(2)
        }
    };
}

console.log(calculateSalaryBreakdown(34000));
