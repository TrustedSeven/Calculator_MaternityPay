export function calculateEmployeeSalaryBreakdown(salary) {
    const personalAllowance = 12579;
    const taxRate1 = 0.20;
    const taxRate2 = 0.40;
    const taxRate3 = 0.45;
    const taxlimit1 = 37700;
    const taxlimit2 = 87440;
    const weeklyPrimaryThreshold = 175;
    const niRate = 0.12;
    const weeksPerYear = 52;
    const monthsPerYear = 12;

    let specialcase = 125140;
    
    let taxfreeAllowance = salary > personalAllowance ? personalAllowance : salary;
    let totalTaxable = salary > personalAllowance ? salary - personalAllowance : 0; 

    if(salary>specialcase){
        totalTaxable = salary
        taxfreeAllowance = 0;
    }
    
    let tax1 = 0;
    let tax2 = 0;
    let tax3 = 0;
    let tax = totalTaxable;
    if (tax>taxlimit1){
        tax1 = taxlimit1 * taxRate1;
        tax = tax - taxlimit1;
        if (tax>taxlimit2){
            tax2 = taxlimit2 * taxRate2;
            tax = tax - taxlimit2;
            tax3 = tax * taxRate3;
        }
        else{
            tax2 = tax * taxRate2;
        }
    }
    else{
        tax1 = tax * taxRate1;
    }

    let totalTaxdue = tax1 + tax2 + tax3;

    let weeklyearning = salary/weeksPerYear;
    let weeklyEarningsAboveThreshold = weeklyearning - weeklyPrimaryThreshold;
    weeklyEarningsAboveThreshold = weeklyEarningsAboveThreshold > 0 ? weeklyEarningsAboveThreshold : 0;
    let weeklyNI = weeklyEarningsAboveThreshold * niRate;
    let yearlyNI = weeklyNI * weeksPerYear;

    let totalDeductions = totalTaxdue + yearlyNI;
    let netWage = salary - totalDeductions;
    
    // let taxableIncome = salary - personalAllowance;
    // taxableIncome = taxableIncome > 0 ? taxableIncome : 0;
    // let tax = taxableIncome * taxRate;

    // let weeklyEarnings = salary / weeksPerYear;
    // let weeklyEarningsAboveThreshold = weeklyEarnings - weeklyPrimaryThreshold;
    // weeklyEarningsAboveThreshold = weeklyEarningsAboveThreshold > 0 ? weeklyEarningsAboveThreshold : 0;
    // let weeklyNI = weeklyEarningsAboveThreshold * niRate;
    // let annualNI = weeklyNI * weeksPerYear;

    // let takeHomePay = salary - tax - annualNI;

    return {
        percent:{
            grossPay: "100",
            taxfreeAllowance: parseFloat((parseFloat(taxfreeAllowance).toFixed(2))*100/salary).toFixed(2),
            totalTaxable: parseFloat((parseFloat(totalTaxable).toFixed(2))*100/salary).toFixed(2),
            totalTaxdue:parseFloat((parseFloat(totalTaxdue).toFixed(2))*100/salary).toFixed(2),
            tax1:parseFloat((parseFloat(tax1).toFixed(2))*100/salary).toFixed(2),
            tax2:parseFloat((parseFloat(tax2).toFixed(2))*100/salary).toFixed(2),
            tax3:parseFloat((parseFloat(tax3).toFixed(2))*100/salary).toFixed(2),
            studentLoan:"",
            nationalInsurance: parseFloat((parseFloat(yearlyNI).toFixed(2))*100/salary).toFixed(2),
            totalDeductions:parseFloat((parseFloat(totalDeductions).toFixed(2))*100/salary).toFixed(2),
            netWage:parseFloat((parseFloat(netWage).toFixed(2))*100/salary).toFixed(2),
            employersNI:"",
            netChange:""
        },
        weekly: {
            grossPay: parseFloat(salary/weeksPerYear).toFixed(2),
            taxfreeAllowance: parseFloat(taxfreeAllowance/weeksPerYear).toFixed(2),
            totalTaxable: parseFloat(totalTaxable/weeksPerYear).toFixed(2),
            totalTaxdue:parseFloat(totalTaxdue/weeksPerYear).toFixed(2),
            tax1:parseFloat(tax1/weeksPerYear).toFixed(2),
            tax2:parseFloat(tax2/weeksPerYear).toFixed(2),
            tax3:parseFloat(tax3/weeksPerYear).toFixed(2),
            studentLoan:"",
            nationalInsurance: parseFloat(yearlyNI/weeksPerYear).toFixed(2),
            totalDeductions:parseFloat(totalDeductions/weeksPerYear).toFixed(2),
            netWage:parseFloat(netWage/weeksPerYear).toFixed(2),
            employersNI:"",
            netChange:""
        },
        monthly: {
            grossPay: parseFloat(salary/monthsPerYear).toFixed(2),
            taxfreeAllowance: parseFloat(taxfreeAllowance/monthsPerYear).toFixed(2),
            totalTaxable: parseFloat(totalTaxable/monthsPerYear).toFixed(2),
            totalTaxdue:parseFloat(totalTaxdue/monthsPerYear).toFixed(2),
            tax1:parseFloat(tax1/monthsPerYear).toFixed(2),
            tax2:parseFloat(tax2/monthsPerYear).toFixed(2),
            tax3:parseFloat(tax3/monthsPerYear).toFixed(2),
            studentLoan:"",
            nationalInsurance: parseFloat(yearlyNI/monthsPerYear).toFixed(2),
            totalDeductions:parseFloat(totalDeductions/monthsPerYear).toFixed(2),
            netWage:parseFloat(netWage/monthsPerYear).toFixed(2),
            employersNI:"",
            netChange:""
        },
        annual: {
            grossPay: parseFloat(salary).toFixed(2),
            taxfreeAllowance: parseFloat(taxfreeAllowance).toFixed(2),
            totalTaxable: parseFloat(totalTaxable).toFixed(2),
            totalTaxdue:parseFloat(totalTaxdue).toFixed(2),
            tax1:parseFloat(tax1).toFixed(2),
            tax2:parseFloat(tax2).toFixed(2),
            tax3:parseFloat(tax3).toFixed(2),
            studentLoan:"",
            nationalInsurance: parseFloat(yearlyNI).toFixed(2),
            totalDeductions:parseFloat(totalDeductions).toFixed(2),
            netWage:parseFloat(netWage).toFixed(2),
            employersNI:"",
            netChange:""
        }
    };
}

// console.log(calculateEmployeeSalaryBreakdown(150000));
// console.log("dddd")
