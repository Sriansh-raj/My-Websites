function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
    var form = document.getElementById("myform")
    var name = form.name.value;
    var pwd = form.password.value;

    var usernameErr = true;
    var passwordErr = true;

    if (name == "") {
        printError("usernameErr", "*Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("usernameErr", "*Please enter a valid name");
        } else {
            printError("usernameErr", "");
            usernameErr = false;
        }
    }

    if (pwd == "") {
        printError("passwordErr", "*Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if ((usernameErr || passwordErr) == true) {
        return false;
    }
    else {
        var datapreview =
            "You've entered the following details: \n" +
            "Username: " + name + "\n" +
            "Password: " + pwd + "\n";
        alert(datapreview);
    }
}

function clrForm() {
    document.getElementById("myform").reset();
}