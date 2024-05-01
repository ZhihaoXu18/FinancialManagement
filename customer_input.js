const fullName = document.getElementById('fullName')
const customerEmail = document.getElementById('email')
const monthlyIncome = document.getElementById('monthlyIncome')
const monthlyExpenses = document.getElementById('monthlyExpenses')
const savingsGoal = document.getElementById('savingsGoal')

const submitButton = document.getElementById('submit')

const financialForm = document.getElementById('financialForm')

submitButton.addEventListener('click', form_submit)
financialForm.addEventListener('submit', form_submit)

function check_input () {
  return (
    fullName.value &&
    customerEmail.value &&
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
  input_process(fullName.value, customerEmail.value, monthlyIncome.value, monthlyExpenses.value, savingsGoal.value);
  financialForm.reset()
}

function input_process (name, email, income, expense, saving) {
  console.log(name, email, income, expense, saving);
}