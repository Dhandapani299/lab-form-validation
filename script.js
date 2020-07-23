// Progression 1
// Check username
var button1 = document.getElementById("submit");
// create a function called as checkUserName()
function checkUserName() {
    var validname = /^[A-Za-z0-9]{8,15}$/;
    var username = document.getElementById("usertext").value;
    if (!validname.test(username)) {
        alert(
            "username should not empty, do not use special character,must contain minimum 8letter and maximun 15 letter"
        );
        return false;
    } else {
        return true;
    }
}
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail() {
    var mail = document.getElementById("emailtext").value;
    var validemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validemail.test(mail)) {
        return true;
    } else {
        alert("It can be alphanumeric in nature/ please fill valid email id");
        return false;
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
    var password = document.getElementById("passwordtext").value;
    var validpassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (validpassword.test(password)) {
        alert("sucessfull registration");
        return true;
    } else {
        alert(
            "password must contain atleast one Uppercase, one number and special characters/ minimum 8 letters"
        );
        return false;
    }
}
button1.addEventListener("click", checkUserName);
button1.addEventListener("click", checkEmail);
button1.addEventListener("click", checkPassword);
