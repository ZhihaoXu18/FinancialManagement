document.getElementById('financialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const monthlyIncome = document.getElementById('monthlyIncome').value;
    const monthlyExpenses = document.getElementById('monthlyExpenses').value;
    const savingsGoal = document.getElementById('savingsGoal').value;

    if (!fullName || !email || !monthlyIncome || !monthlyExpenses || !savingsGoal) {
        alert('Please fill in all fields.');
    } else {
        alert('Form submitted successfully!');
        // Here you can add code to handle the form data, like sending it to a server
    }
});
