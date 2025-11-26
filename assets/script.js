function calcular() {
    let nombre = document.getElementById("nombre").value;
    let nacimiento = document.getElementById("nacimiento").value;

    let añoActual = new Date().getFullYear();
    let edad = añoActual - nacimiento;

    document.getElementById("resultado").innerText =
        "Hola, " + nombre + ". Tienes " + edad + " años.";
}
