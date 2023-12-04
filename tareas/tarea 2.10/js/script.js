function intro() { // Al presionar Intro llama a la función como si se presionara el botón
    if (event.key === "Enter") {
        bucle();
    }
}

function bucle() {
    var texto = document.getElementById("texto").value;
    var parrafo = document.getElementById("vacio");
    

    if (isNaN(texto) || texto.trim() === "")
    {
        alert("Debe introducir un número");
        parrafo.innerHTML = ""; // limpia el output antes de cada entrada
        return;
    } else {

        parrafo.innerHTML = ""; // limpia el output antes de cada entrada

        for (let i = 0; i <= 10; i++) {
        	var resultado = texto * i; // almacena el resultado en una variable
            parrafo.innerHTML += texto + " x " + i + " = " + resultado + "<br>"; // muestra la línea correspondiente de la tabla
                       
            console.log(texto); // debug
        }
    }
}