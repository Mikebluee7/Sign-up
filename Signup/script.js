let passwordField = document.getElementById('password');
let confirmPasswordField = document.getElementById('confirmPassword');
let minLength = 8;


function validate() {
    let passwordValue = passwordField.value;
    let confirmPasswordValue = confirmPasswordField.value;

    if (passwordValue.length < minLength){
    alert('Hasło jest za krótkie');
    return;
    }
   }
