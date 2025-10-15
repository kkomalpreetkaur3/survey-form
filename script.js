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