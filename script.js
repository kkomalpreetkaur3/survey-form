// show and clear errors
function showError(id, message) {
    const errorSpan = document.getElementById(id);
    errorSpan.textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}