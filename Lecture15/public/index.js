const { sign } = require("crypto");

const signupForm = document.querySelector('#signup');
const loginForm = document.querySelector('#email');
const password= document.querySelector('#password');


function addUser(email,password){
    let newUser={
        email: email,
        password: password
    }
    fetch("/addUser",{
      method: "POST",
      body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return response.json();
})
.then((data) => {
    console.log(data);
    if(data.success) {
        alert(data.message);
        signupForm.reset();
    } else {
        alert(data.error)
        signupForm.reset();
    }
})
.catch((err) => {
    console.error(err);
})

}
signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addUser(email.value, password.value);
    
}