

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

  // Check for different provinces with specific financial conditions
  if (province === "Ontario" || province === "British Columbia") {
      // Condition for Ontario
      if (income < 3000) {
        if (expense > income * 0.95) {
            console.log("Alert: Spending exceeds 80% of income, which is too high for this income bracket.");
        } else {
            console.log("Good: Spending is within acceptable limits for this income bracket.");
        }
    } else if (income >= 3000 && income <= 5000) {
        if (expense > income * 0.85) {
            console.log("Alert: Spending exceeds 85% of income, which is too high for this income bracket.");
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
  }
   else if (province === "Prince Edward Island" || province === "New Brunswick"
    || province === "NewFoundland"|| province === "Quebec") {
      // Condition for BC
      if (income > 2500) {
        if (expense > income * 0.95) {
          console.log("Moderate income and low spending.");
        } else { 
          console.log("Saving amount is decent for your income level!")
        }

      } 
      else if (income >= 2500 && income <= 4000) {
        if (expense > income * 0.85) {
          console.log ("Expense if over the index for this income level!")
        }
        else {
          console.log ("Saving amount is decent for your income level, keep up!")
        }
          ;
      }
      else {
        if (expense > income * 0.70){
          console.log ("Expense is a bit much, despite you have a high income.")
        }
        else {
          console.log ("Good job keep up with same expense with this income, keep up!")
        }
      }
  }

   else if (province === "Nova Scotia" || province === "Alberta" ||  province === "Manitoba") {
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
