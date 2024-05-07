const returnStatement = document.getElementById('return__statement__content')

var return_text = localStorage.getItem('return_text')
returnStatement.innerHTML = return_text
console.log(return_text)