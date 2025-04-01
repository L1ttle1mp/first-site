let users = [];
const form = document.getElementById('registrationForm');
const userList = document.getElementById('userList');

form.onsubmit = function(event) {
event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if(!isValidName(name)){
    alert("В іменні повинно бути не менш 2 букви");
return; 
}

if(!isValidPassword(password)){
    alert("В паролі повинно бути 5 числ");
return; 
}



const newUser = {
name: name,
email: email,
password: password
};
users.push(newUser);
form.reset();
console.log(users)
//  updateUserList();
}; 
function isValidName(name) {
return name.length > 2;


}
function isValidPassword(password) {
    return name.length > 5;
    
    
    }