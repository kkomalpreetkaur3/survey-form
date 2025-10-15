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