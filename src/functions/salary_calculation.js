export function calculateSalaryBreakdown(salary) {
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
            grossIncome: parseFloat(salary / (weeksPerYear * daysPerWeek)).toFixed(2),
            taxableIncome: parseFloat(taxableIncome / (weeksPerYear * daysPerWeek)).toFixed(2),
            tax: parseFloat(tax / (weeksPerYear * daysPerWeek)).toFixed(2),
            nationalInsurance: parseFloat(weeklyNI / daysPerWeek).toFixed(2),
            takeHomePay: parseFloat(takeHomePay / (weeksPerYear * daysPerWeek)).toFixed(2)
        },
        weekly: {
            grossIncome: parseFloat(weeklyEarnings).toFixed(2),
            taxableIncome: parseFloat(taxableIncome / weeksPerYear).toFixed(2),
            tax: parseFloat(tax / weeksPerYear).toFixed(2),
            nationalInsurance: parseFloat(weeklyNI).toFixed(2),
            takeHomePay: parseFloat(takeHomePay / weeksPerYear).toFixed(2)
        },
        monthly: {
            grossIncome: parseFloat(salary / monthsPerYear).toFixed(2),
            taxableIncome: parseFloat(taxableIncome / monthsPerYear).toFixed(2),
            tax: parseFloat(tax / monthsPerYear).toFixed(2),
            nationalInsurance: parseFloat(annualNI / monthsPerYear).toFixed(2),
            takeHomePay: parseFloat(takeHomePay / monthsPerYear).toFixed(2)
        },
        annual: {
            grossIncome: parseFloat(salary).toFixed(2),
            taxableIncome: parseFloat(taxableIncome).toFixed(2),
            tax: parseFloat(tax).toFixed(2),
            nationalInsurance: parseFloat(annualNI).toFixed(2),
            takeHomePay: parseFloat(takeHomePay).toFixed(2)
        }
    };
}

// console.log(calculateSalaryBreakdown(34000));
