

const customerProvince = document.getElementById('provinceSelect').value;
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

  // Check for different provinces with specific financial conditions
  if (province === "Ontario") {
      // Condition for Ontario
      if (income > 3000 && expense > 2500) {
          console.log("Ontario: High income and high spending.");
      } else {
          console.log("Ontario: Other financial situation.");
      }
  } else if (province === "BC") {
      // Condition for BC
      if (income > 2000 && expense < 1500) {
          console.log("BC: Moderate income and low spending.");
      } else {
          console.log("BC: Other financial situation.");
      }
  } else if (province === "Quebec") {
      // Condition for Quebec
      if (income < 2000 && expense > 1000) {
          console.log("Quebec: Low income and relatively high spending.");
      } else {
          console.log("Quebec: Other financial situation.");
      }
  } else {
      // Default condition if none of the specific provinces are matched
      console.log("No specific financial checks for this province.");
  }
}
