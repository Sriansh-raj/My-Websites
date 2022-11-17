function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
    var form = document.getElementById("myform")
    var name = form.name.value;
    var number = form.number.value;
    var email = form.email.value;
    var gender = form.gender.value;
    var qualification = form.qualification.value;
    var course = form.course.value;
    var agreement = form.agreement.value;

    var nameErr = true;
    var numberErr = true;
    var emailErr = true;
    var genderErr = true;
    var qualificationErr = true;
    var courseErr = true;
    var agreementErr = true;

    if (name == "") {
        printError("nameErr", "*Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "*Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (number == "") {
        printError("numberErr", "*Please enter your number");
    } else {
        var phoneno = /^\d{10}$/;
        if (phoneno.test(number) === false) {
            printError("numberErr", "*Please enter a 10 digit number");
        } else {
            printError("numberErr", "");
            numberErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "*Please enter your email");
    } else {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (mailformat.test(email) === false) {
            printError("emailErr", "*Please enter a valid email i'd");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (gender == "") {
        printError("genderErr", "*Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    if (qualification == "") {
        printError("qualificationErr", "*Please select your qualification");
    } else {
        printError("qualificationErr", "");
        qualificationErr = false;
    }

    if (course == "") {
        printError("courseErr", "*Please select your course");
    } else {
        printError("courseErr", "");
        courseErr = false;
    }

    // if (agreement.checked != true) {
    //     printError("agreementErr", "*Please check the conditions");
    // } else {
    //     printError("agreementErr", "");
    //     agreementErr = false;
    // }

    if ((nameErr || numberErr || emailErr || genderErr || qualificationErr || courseErr/* || agreementErr*/) == true) {
        return false;
    }
    else {
        var datapreview =
            "You've entered the following details: \n" +
            "Name: " + name + "\n" +
            "Number: " + number + "\n" +
            "Email: " + email + "\n" +
            "Gender: " + gender + "\n" +
            "Qualification: " + qualification + "\n" +
            "Course: " + course + "\n";
        alert(datapreview);
    }
}

function clrForm() {
    document.getElementById("myform").reset();
}