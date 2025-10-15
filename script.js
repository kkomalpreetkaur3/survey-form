// show and clear errors
function showError(id, message) {
    const errorSpan = document.getElementById(id);
    errorSpan.textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

// Validation helpers: emptiness and email
function isNotEmpty(value) {
    return value.trim() !== "";
}

function isValidEmail(email) {
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regex.test(email);
}

// Validation helpers: hasChecked and isSelected
function hasCheckedOption(name) {
    return document.querySelectorAll(`input[name="${name}"]:checked`).length > 0;
}

function isSelected(value) {
    return value !== "";
}

// Validation helpers: username and dateFormat
function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
}

function isValidDateFormat(date) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(date);
}

// Form validation on submit
document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    let valid = true;

    // Name
    const name = document.getElementById("name").value;
    if (!isNotEmpty(name)) {
        showError("nameError", "Name is required");
        valid = false;
    }

    // Email
    const email = document.getElementById("email").value;
    if (!isValidEmail(email)) {
        showError("emailError", "Please enter a valid email address");
        valid = false;
    }

    // Radio
    if (!hasCheckedOption("cuisine")) {
        showError("cuisineError", "Please select a cuisine type");
        valid = false;
    }

    // Checkbox
    if (!hasCheckedOption("foods")) {
        showError("foodsError", "Select at least one food option");
        valid = false;
    }

    // Dropdown
    const frequency = document.getElementById("frequency").value;
    if (!isSelected(frequency)) {
        showError("frequencyError", "Please select your frequency");
        valid = false;
    }

     // Regex username
    const username = document.getElementById("username").value;
    if (!isValidUsername(username)) {
        showError("usernameError", "Username must be alphanumeric (A-Z, 0-9)");
        valid = false;
    }

    // Date validation
    const date = document.getElementById("surveyDate").value;
    if (!isValidDateFormat(date)) {
        showError("surveyDateError", "Date format must be DD-MM-YYYY");
        valid = false;
    }

    // Number input
    const rating = document.getElementById("rating").value;
    if (!isNotEmpty(rating) || rating < 1 || rating > 10) {
        showError("ratingError", "Please enter a rating between 1 and 10");
        valid = false;
    }

    // success Message
    if (valid) {
        document.getElementById("successMessage").textContent =
            "Thank you! Your survey has been submitted successfully.";
        document.getElementById("surveyForm").reset();
    }
});
