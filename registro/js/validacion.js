function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



document.addEventListener("DOMContentLoaded", ()=> {
console.log("Mensaje DOMContentLoaded");
    const boton= document.querySelector("#regBtn");
boton.addEventListener("click",function(e){
    let pass1 = document.querySelector("#password1").value;
    let pass2 = document.querySelector("#password2").value;

    let alert = document.getElementById("alert");
    alert.innerHTML="";

    if(pass1!==pass2){
        alert.innerHTML="Las contraseñas no coinciden";
        e.preventDefault();
    }
    console.log("Mensaje click");
})});

function validarCampos(){
     let pass1 = document.querySelector("#password1").value;
    let pass2 = document.querySelector("#password2").value;
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let apellido = document.querySelector("#apellido").value;
    let check = document.querySelector("#terminos");

    if(pass1 && pass2 && nombre && email && apellido && check.checked) {
        } else {
            alert("Ninguno de los campos pueden estar vacíos");

        }
}

document.addEventListener('DomContentLoaded',validarCampos());


    
