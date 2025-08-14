function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function showAlertEmail() {
    document.getElementById("alert-email").classList.add("show");
}

//validacion de email al hacer click en registrarme.
document.getElementById("regBtn").addEventListener("click", function(e){
    e.preventDefault();
const emailInput = document.getElementById("email");
const email = emailInput.value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)){
    showAlertEmail();
}
})