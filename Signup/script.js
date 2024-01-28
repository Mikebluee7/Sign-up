let passwordField = document.getElementById('password');
let confirmPasswordField = document.getElementById('confirmPassword');
let minLength = 8;
let passwordValue = passwordField.value;
let confirmPasswordValue = confirmPasswordField.value;



function validate() {


if (passwordValue.minLength < minLength){
    alert('Hasło jest za krótkie');
    return;
}
print('123')
}