function validateForm() {
    let isValid = true;

    // Get values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let age = document.getElementById("age").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let state = document.getElementById("state").value.trim();
    let country = document.getElementById("country").value;
    let termsChecked = document.getElementById("terms").checked;

    // Validation rules
    if (firstName === "") {
        showError("firstNameError");
        isValid = false;
    } else {
        hideError("firstNameError");
    }

    if (lastName === "") {
        showError("lastNameError");
        isValid = false;
    } else {
        hideError("lastNameError");
    }

    if (!validateEmail(email)) {
        showError("emailError");
        isValid = false;
    } else {
        hideError("emailError");
    }

    if (password.length < 6) {
        showError("passwordError");
        isValid = false;
    } else {
        hideError("passwordError");
    }

    if (confirmPassword !== password) {
        showError("confirmPasswordError");
        isValid = false;
    } else {
        hideError("confirmPasswordError");
    }

    if (age === "" || age < 18) {
        showError("ageError");
        isValid = false;
    } else {
        hideError("ageError");
    }

    if (!validatePhone(phone)) {
        showError("phoneError");
        isValid = false;
    } else {
        hideError("phoneError");
    }

    if (address === "") {
        showError("addressError");
        isValid = false;
    } else {
        hideError("addressError");
    }

    if (state === "") {
        showError("stateError");
        isValid = false;
    } else {
        hideError("stateError");
    }

    if (country === "") {
        alert("Please select a country");
        isValid = false;
    }

    if (!termsChecked) {
        alert("You must agree to the declaration!");
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
    }
}

// Helper functions
function showError(id) {
    document.getElementById(id).style.display = "inline";
}

function hideError(id) {
    document.getElementById(id).style.display = "none";
}

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function validatePhone(phone) {
    let re = /^[0-9]{10}$/;
    return re.test(phone);
}
