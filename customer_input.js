

const customerProvince = document.getElementById('province')
const monthlyIncome = document.getElementById('monthlyIncome')
const monthlyExpenses = document.getElementById('monthlyExpenses')
const savingsGoal = document.getElementById('savingsGoal')

const submitButton = document.getElementById('submit')

const financialForm = document.getElementById('financialForm')

submitButton.addEventListener('click', form_submit)
financialForm.addEventListener('submit', form_submit)

function check_input () {
  return (
    customerProvince.value &&
    monthlyIncome.value &&
    monthlyExpenses.value &&
    savingsGoal.value
  )
}
function form_submit (e) {
  e.preventDefault()
  if (!check_input()) {
    alert('Please fill in all fields')
    return
  }
  alert('Form submitted succesfully!')
  input_process(customerProvince.value, monthlyIncome.value, monthlyExpenses.value, savingsGoal.value);
  financialForm.reset()
}
function input_process(province, income, expense, saving) {
  console.log("Province:", province);
  console.log("Income:", income);
  console.log("Expense:", expense);
  console.log("Saving:", saving);

  // Checking the province and applying income-specific conditions
  if (province === "Ontario" || province === "BC" || province === "Quebec") {
      console.log(`Checking conditions for ${province} with an income of $${income}.`);

      // Different spending checks based on income levels
      if (income < 2000) {
          if (expense > income * 0.80) {
              console.log("Alert: Spending exceeds 80% of income, which is too high for this income bracket.");
          } else {
              console.log("Good: Spending is within acceptable limits for this income bracket.");
          }
      } else if (income >= 2000 && income <= 5000) {
          if (expense > income * 0.70) {
              console.log("Alert: Spending exceeds 70% of income, which is too high for this income bracket.");
          } else {
              console.log("Good: Spending is within acceptable limits for this income bracket.");
          }
      } else if (income > 5000) {
          if (expense > income * 0.60) {
              console.log("Alert: Spending exceeds 60% of income, which is too high for this income bracket.");
          } else {
              console.log("Good: Spending is within acceptable limits for this income bracket.");
          }
      }
      
      // Additional logic to check savings against net income
      performAdditionalChecks(income, expense, saving);
  } else {
      console.log("No specific financial health checks defined for other provinces.");
  }
}

// Function to perform additional financial checks
function performAdditionalChecks(income, expense, saving) {
  var netIncome = income - expense;
  var requiredSavings = netIncome * 0.20; // Example: 20% of net income as savings goal

  if (saving >= requiredSavings) {
      console.log("Success: Savings meet the required 20% of net income.");
  } else {
      console.log("Fail: Savings do not meet the required 20% of net income.");
  }
}
