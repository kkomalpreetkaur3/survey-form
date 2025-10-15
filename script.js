// Show and clear error messages 
function showError(id, message) {
    const errorSpan = document.getElementById(id);
    errorSpan.textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

// Validation helper functions 

// Check for empty input
function isNotEmpty(value) {
    return value.trim() !== "";
}

// Validate email format using regex
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email);
}

// Check if at least one radio/checkbox is selected
function hasCheckedOption(name) {
    return document.querySelectorAll(`input[name="${name}"]:checked`).length > 0;
}

// Check dropdown selection
function isSelected(value) {
    return value !== "";
}

// Validate username (alphanumeric only)
function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
}

// Validate date format (DD-MM-YYYY)
function isValidDateFormat(date) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(date);
}

// Main validation on form submit 
document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default submission
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
        showError("emailError", "Enter a valid email address");
        valid = false;
    }

    // Radio button
    if (!hasCheckedOption("cuisine")) {
        showError("cuisineError", "Please select a cuisine type");
        valid = false;
    }

    // Checkbox group
    if (!hasCheckedOption("foods")) {
        showError("foodsError", "Select at least one food option");
        valid = false;
    }

    // Dropdown menu
    const frequency = document.getElementById("frequency").value;
    if (!isSelected(frequency)) {
        showError("frequencyError", "Please select your frequency");
        valid = false;
    }

    // Username (regex validation)
    const username = document.getElementById("username").value;
    if (!isValidUsername(username)) {
        showError("usernameError", "Username must be alphanumeric (A-Z, 0-9)");
        valid = false;
    }

    // Date format (DD-MM-YYYY)
    const date = document.getElementById("surveyDate").value;
    if (!isValidDateFormat(date)) {
        showError("surveyDateError", "Date format must be DD-MM-YYYY");
        valid = false;
    }

    // Number input (rating between 1 and 10)
    const rating = document.getElementById("rating").value;
    if (!isNotEmpty(rating) || rating < 1 || rating > 10) {
        showError("ratingError", "Please enter a rating between 1 and 10");
        valid = false;
    }

    // Success Message
    if (valid) {
        document.getElementById("successMessage").textContent =
            "Thank you! Your survey has been submitted successfully.";
        }
    });