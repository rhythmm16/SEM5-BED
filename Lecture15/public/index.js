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
})
.catch((err) => {
    console.error(err);
})

}
addUser("rhythm161203@gmail.com", "rhythm123");