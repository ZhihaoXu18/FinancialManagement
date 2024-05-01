

const customerCountry = document.getElementById('country')
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
    customerCountry.value &&
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
  input_process(customerCountry.value, customerProvince.value, monthlyIncome.value, monthlyExpenses.value, savingsGoal.value);
  financialForm.reset()
}

function input_process (country, province, income, expense, saving) {
  console.log(country, province, income, expense, saving);
}
